import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotAppViewController, SprotEntity, SprotModifierToolSet, SprotPoint, 
    SprotSelectionWrapper
} from "$wasm/sprot_app";
import { SprotCanvasModifierTool } from "./base";
import { None, type SprotOption, SelectionOption } from "$lib/utils";
import { Trim } from "$components/icons/modifiers";
import type { SprotClientCursor } from "$lib/cursor";

export class SprotTrimTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;

    constructor() {
        const name = "Trim";
        const id = SprotActions.ToolTrim;
        const kind = SprotToolKind.ModifierTool;
        const icon = Trim;
        const shortkey = "X";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        return app.set_modifier_tool(SprotModifierToolSet.SprotTrimTool);
    }
}
