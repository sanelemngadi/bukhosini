import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotAppViewController, SprotEntity } from "$wasm/sprot_app";
import {  AlignmentPanel } from "$components/canvas/toplevels";
import { SprotCanvasModifierTool } from "./base";
import { None, type SprotOption, SelectionOption } from "$lib/utils";
import { Align } from "$components/icons";

export class SprotAlignmentTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;
    private _path_stated: boolean;

    constructor() {
        const name = "Alignment";
        const id = SprotActions.ToolAlign;
        const kind = SprotToolKind.ModifierTool;
        const icon = Align;
        const shortkey = "A";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = AlignmentPanel ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
        this._path_stated = false;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        // return app.set_modifier_tool(SprotModifierToolSet.SprotArrangmentTool, selection);
        return true;
    }
}
