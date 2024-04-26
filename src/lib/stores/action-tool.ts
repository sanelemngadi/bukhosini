import { canvasTools } from "$lib/api/canvastools";
import type { SprotActions, SprotToolGroup } from "$lib/types";
import { writable } from "svelte/store";
import { setTargetTool } from "./target-tool";
import type { SprotCanvasTool } from "$lib/tools/base";
import type { SprotAppViewController } from "$wasm/sprot_app";

const initState: SprotToolGroup[] = canvasTools;
const toolState = writable<SprotToolGroup[]>(initState);

export const setActionTool = (app: SprotAppViewController, id: SprotActions) => {
    toolState.update(toolGroups => {
        let newState = toolGroups.map(group => {
            let items: SprotCanvasTool | SprotCanvasTool[] = [];

            if(Array.isArray(group.tools)) {
                items = group.tools.map(tool => {
                    if (tool.id === id && tool.init(app)) { // this makes sure that the tool is set on the backend
                        setTargetTool(tool); 
                        tool.active = true;
                        // tool.init(app); // initialize the same tool in rust
                    } 
                    else {
                        tool.active = false;
                    }
                    return tool;
                })
            } else {
                const tool = group.tools;

                if (tool.id === id && tool.init(app)) { // this makes sure that the tool is set on the backend
                    setTargetTool(tool); 
                    tool.active = true;
                    // tool.init(app); // initialize the same tool in rust
                } 
                else {
                    tool.active = false;
                }
                
                items = tool;
            }
            group = { ...group, tools: items };

            return group;
        });


        return newState;
    })
}

export const getCanvasTools = (predicate: (toolGroups: SprotToolGroup[]) => void ) => {
    toolState.subscribe(groups => {
        predicate(groups);
    })
}