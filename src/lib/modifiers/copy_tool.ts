import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotAppViewController, 
    SprotModifierToolSet, 
} from "$wasm/sprot_app";
import { SprotCanvasModifierTool } from "./base";
import { CopyToMouse } from "$components/icons/modifiers";

export class SprotCopyTool extends SprotCanvasModifierTool {

    constructor() {
        const name = "Copy to mouse";
        const id = SprotActions.ToolCopyToMouse;
        const kind = SprotToolKind.ModifierTool;
        const icon = CopyToMouse;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.presets = [];
    }

    
    init(app: SprotAppViewController): boolean { 
        return app.set_modifier_tool(SprotModifierToolSet.SprotCopyTool);
    }
}
