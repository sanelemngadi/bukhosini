import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotAppViewController, SprotEntity, SprotModifierToolSet, 
    SprotSelectionWrapper
} from "$wasm/sprot_app";
import { SprotCanvasModifierTool } from "./base";
import { None, type SprotOption, SelectionOption } from "$lib/utils";
import { Meet} from "$components/icons/modifiers";

export class SprotMeetTool extends SprotCanvasModifierTool {
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;

    constructor() {
        const name = "Meet";
        const id = SprotActions.ToolMeet;
        const kind = SprotToolKind.ModifierTool;
        const icon = Meet;
        const shortkey = "V";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.presets = [];
        this._predicate = None;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        return app.set_modifier_tool(SprotModifierToolSet.SprotMeetTool);
    }
}
