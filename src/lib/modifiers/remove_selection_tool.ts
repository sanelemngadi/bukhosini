import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotAppViewController, SprotEntity } from "$wasm/sprot_app";
import { SprotCanvasModifierTool } from "./base";
import { None, type SprotOption, SelectionOption } from "$lib/utils";
import { Trash } from "$components/icons";

export class SprotRemoveSelectionTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;
    private _path_stated: boolean;

    constructor() {
        const name = "Remove Selection";
        const id = SprotActions.ToolRemoveSelection;
        const kind = SprotToolKind.ModifierTool;
        const icon = Trash;
        const shortkey = "Del";
        super(name, id, kind, icon, shortkey);
        
        // this.panelComponent = null ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
        this._path_stated = false;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        // return app.set_modifier_tool(SprotModifierToolSet.SprotRemoveSelectionTool, selection);
        return true;
    }
}
