import { modifierTools } from "$lib/api/modifiertools";
import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
import { SomeFromUnknown, type SprotOption } from "$lib/utils";
import type { SprotAppViewController, SprotEntity } from "$wasm/sprot_app";
import { writable } from "svelte/store";

const tools = writable(modifierTools);


export const getCanvasModifierTools = (): SprotCanvasModifierTool[] => {
    let ts: SprotCanvasModifierTool[] = [];
    tools.subscribe(t => ts = t);
    return ts;
}

export const setTargetModifierTool = (
    app: SprotAppViewController, 
    tool: SprotOption<SprotCanvasModifierTool>, 
    selection: SprotEntity[]
    ) => {
    // console.log(tool);
    
    tools.update(state => {
        let newState: SprotCanvasModifierTool[] = [];
        
        tool.Some(found => {
            newState = state.map(tl => {
                tl.active = tl.id == found.id;

                if(tl.active) {
                    let to = tl.init(app);

                    if(to) {
                        console.log("tool was set: ", tl.name);
                        
                    } else {
                        console.log("the tool was not set: ", tl.name);
                        
                    }
                }

                return tl;
            });
        })
        .None(() => {
            newState = state.map(tl => {
                tl.active = false;
                tl.removeModifierTool(app);
                return tl;
            });
        })

        return newState;
    })
}

export const clearModifierTools = () => {
    tools.update(state => {
        let newState: SprotCanvasModifierTool[] = state.map(tl => {
            tl.active = false;
            return tl;
        });

        return newState;
    })

}

export const getActionModifierTool = (predicate: (tool: SprotOption<SprotCanvasModifierTool>) => void) => {
    tools.subscribe(tl => {
        // const tool = ;
        let active_tool = SomeFromUnknown(tl.find(t => t.active));

        predicate(active_tool);
        // console.log("modifier: ", tool);
        // if(tool) {

            
        // }
    });
}