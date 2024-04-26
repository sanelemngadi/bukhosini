import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotAppViewController, SprotEntity, SprotSelectionWrapper } from "$wasm/sprot_app";
import {  TransformationPanel } from "$components/canvas/toplevels";
import { SprotCanvasModifierTool } from "./base";
import { None, type SprotOption, SelectionOption } from "$lib/utils";
import { Scale } from "$components/icons/modifiers";

export class SprotTransformationTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;
    private _path_stated: boolean;

    constructor() {
        const name = "Transformation";
        const id = SprotActions.New;
        const kind = SprotToolKind.ModifierTool;
        const icon = Scale;
        const shortkey = "A";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = TransformationPanel ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
        this._path_stated = false;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        // return app.set_modifier_tool(SprotModifierToolSet.SprotTransformationTool, selection);
        return true;
    }
}
