import { canvasTools } from "$lib/api/canvastools";
import { writable } from "svelte/store";
import { clearModifierTools } from "./modifiertools";
import type { SprotCanvasTool } from "$lib/tools/base";

const tools = canvasTools;

const getTool = (): SprotCanvasTool | null => {
    let tool: SprotCanvasTool | null = null;

    if(canvasTools.length > 0) {
        canvasTools.forEach(group => {
            if(Array.isArray(group.tools)) {
                const active = group.tools.find(tl => tl.active);
                if(active) {
                    tool = active;
                }
            } else {
                const active = group.tools;
                if(active.active) {
                    tool = active;
                }
            }
        });

        if(!tool && tools.length > 0) {
            tool = Array.isArray(tools[0].tools) ? tools[0].tools[0] : tools[0].tools;
        }
    }

    return tool;
}

// const active: SprotTool | null = Array.isArray(tools) ? tools.find(tool => tool.active) || tools[0] : null;
const initState: SprotCanvasTool | null = getTool();
const toolState = writable<SprotCanvasTool | null>(initState);

export const setTargetTool = (tool: SprotCanvasTool) => {
    clearModifierTools(); // when we chage a canvas tool remove the canvas modifier tool
    toolState.update(() => tool);
}

export const getTargetTool = (predicate: (tool: SprotCanvasTool) => void) => {
    toolState.subscribe(state => {
        if(state) {
            // if none of the tools are active get the first tool, then activate it so it can
            // be used in the canvas
            // if(!state.active) { setActionTool(state.id); }

            // then notify our subscribed components about active too;
            predicate(state);
        }
    });
}