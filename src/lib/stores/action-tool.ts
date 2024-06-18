import { canvasTools } from "$lib/api/canvastools";
import type { SprotToolGroup } from "$lib/types";
import { writable } from "svelte/store";
import type { SprotCanvasTool } from "$lib/tools/base";
import type { SprotToolInterface, SprotToolSet } from "$wasm/sprot_app";

const initState: SprotToolGroup[] = canvasTools;
const toolState = writable<SprotToolGroup[]>(initState);

export const setActionTool = (id: SprotToolSet, presets: SprotToolInterface) => {
    toolState.update(toolGroups => {
        let newState = toolGroups.map((group) => {
            let activeGroup = false;

            group.tools = group.tools.map((tool) => {

                if(tool.toolSet === id && tool.init(presets)) {
                    tool.active = true;
                    activeGroup = true;

                } else {
                    tool.active = false;
                    group.active = false;
                }
                return tool;
            });

            group.active = activeGroup;

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

export const getTargetTool = (predicate: (tool: SprotCanvasTool) => void) => {
    toolState.subscribe(groups => {
        const activeGroup = groups.find(grp => grp.active);

        if(activeGroup) {
            const activeTool = activeGroup.tools.find(tl => tl.active);

            if(activeTool) {
                predicate(activeTool);
            }
        }
    });
}

export const setTargetToolBusy = (busy: boolean) => {
    toolState.update(groups => {
        const activeGroup = groups.find(grp => grp.active);

        if(activeGroup) {
            const activeTool = activeGroup.tools.find(tl => tl.active);

            if(activeTool) {
                activeTool.isBusy = busy;
            }
        }

        return groups;
    });
}

// export const setTargetTool = (tool: SprotCanvasTool) => {
//     setActionTool()
// }