import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotAppViewController, SprotEntity } from "$wasm/sprot_app";
import {  CadPanel } from "$components/canvas/toplevels";
import { SprotCanvasModifierTool } from "./base";
import { None, type SprotOption, SelectionOption } from "$lib/utils";
import { ToggleCad } from "$components/icons/toggling";

export class SprotCADTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;
    private _path_stated: boolean;

    constructor() {
        const name = "CAD";
        const id = SprotActions.ToggleCAD;
        const kind = SprotToolKind.ModifierTool;
        const icon = ToggleCad;
        const shortkey = "A";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = CadPanel ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
        this._path_stated = false;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        // return app.set_modifier_tool(SprotModifierToolSet.SprotCADTool, selection);
        return true;
    }
}
