import { mouseInteraction, type SprotClientCursor } from "$lib/cursor";
import type { SprotActions, SprotToolKind, SprotToolPreset } from "$lib/types";
import { None, type SprotOption } from "$lib/utils";
import { SprotCanvasMessages, SprotModifierToolSet, SprotPoint, SprotSelectionWrapper, type SprotAppViewController } from "$wasm/sprot_app";
import type { ComponentType } from "svelte";

export abstract class SprotCanvasModifierTool {
    public active: boolean;
    public panelComponent: ComponentType | null;
    public presets: SprotToolPreset[];
    public selection: SprotOption<SprotSelectionWrapper>;

    constructor(
        public name: string, 
        public id: SprotActions, 
        public kind: SprotToolKind,
        public icon: ComponentType, 
        public shortkey: string | null = null) {
            this.active = false;
            this.panelComponent = null;
            this.presets = [];
            this.selection = None;

    }

    // this must also take the reference point which can be given as the mouse click
    // or the coodinate from the top level panel
    abstract init(app: SprotAppViewController): boolean; // return a boolean to comfirm if we were able to set the action tool

    removeModifierTool(app: SprotAppViewController) {
        app.set_modifier_tool(SprotModifierToolSet.SprotNoTool);
    }
    //data: any // this is the data inside the tool, for example in selection tool this is a selection
    // in rect tool this is rect, in line tool this is the tool inside the tool.

    onMouseDown(app: SprotAppViewController, button: number ): SprotClientCursor {
        let message: SprotCanvasMessages = SprotCanvasMessages.MouseLeftDown;

        switch (button) {
            case 0:
                message = SprotCanvasMessages.MouseLeftDown;                
                break;
            case 1:
                message = SprotCanvasMessages.MouseMiddleDown;
                break;
            case 2:
                message = SprotCanvasMessages.MouseRightDown;
                break;
        
            default:
                break;
        }

        const selection = app.on_event(message);
        // this.selection = selection ? Some(SomeSelelction(selection)) : None;

        return mouseInteraction(app.mouse_interaction());
    }

    onMouseUp(app: SprotAppViewController, button: number): SprotClientCursor {
        let message: SprotCanvasMessages = SprotCanvasMessages.MouseLeftUp;

        switch (button) {
            case 0:
                message = SprotCanvasMessages.MouseLeftUp;                
                break;
            case 1:
                message = SprotCanvasMessages.MouseMiddleUp;
                break;
            case 2:
                message = SprotCanvasMessages.MouseRightUp;
                break;
        
            default:
                break;
        }

        const selection = app.on_event(message);
        // this.selection = selection ? Some(SomeSelelction(selection)) : None;

        return mouseInteraction(app.mouse_interaction());
    }

    onMouseMove(app: SprotAppViewController, point: SprotPoint): SprotClientCursor {
        const selection = app.on_event(SprotCanvasMessages.MouseMove, point);
        // this.selection = selection ? Some(SomeSelelction(selection)) : None;

        return mouseInteraction(app.mouse_interaction());
    }

    onWheel(app: SprotAppViewController, delta: number): SprotClientCursor {
        app.on_wheel(delta);

        return mouseInteraction(app.mouse_interaction());
    }
}