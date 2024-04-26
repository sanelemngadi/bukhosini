import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotAppViewController, SprotModifierToolSet
} from "$wasm/sprot_app";
import { RotatePanel } from "$components/canvas/toplevels";
import { SprotCanvasModifierTool } from "./base";
import { Rotate } from "$components/icons/modifiers";

export class SprotRotateTool extends SprotCanvasModifierTool {

    constructor() {
        const name = "Rotate";
        const id = SprotActions.ToolRotate;
        const kind = SprotToolKind.ModifierTool;
        const icon = Rotate;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = RotatePanel ;
        this.presets = [];
    }

    
    init = (app: SprotAppViewController): boolean => { 
        return app.set_modifier_tool(SprotModifierToolSet.SprotRotateTool);
    }

}
