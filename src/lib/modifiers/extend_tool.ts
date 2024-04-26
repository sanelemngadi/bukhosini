import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotAppViewController, SprotEntity, SprotModifierToolSet
} from "$wasm/sprot_app";
import { SprotCanvasModifierTool } from "./base";
import { None, Some, type SprotOption, SelectionOption } from "$lib/utils";
import { Extend } from "$components/icons/modifiers";

export class SprotExtendTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;

    constructor() {
        const name = "Extend";
        const id = SprotActions.ToolExtend;
        const kind = SprotToolKind.ModifierTool;
        const icon = Extend;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
    }

    init = (app: SprotAppViewController): boolean => { //
        return app.set_modifier_tool(SprotModifierToolSet.SprotExtendTool);
    }
}
