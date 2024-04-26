import { SprotActions, SprotToolKind } from "$lib/types";
import { 
        SprotAppViewController, SprotEntity, SprotModifierToolSet,
    } from "$wasm/sprot_app";
import {  MovePanel } from "$components/canvas/toplevels";
import { SprotCanvasModifierTool } from "./base";
import { None, Some, type SprotOption, SelectionOption } from "$lib/utils";
import { Move } from "$components/icons/modifiers";
import { clearModifierTools } from "$lib/stores";
import type { SprotClientCursor } from "$lib/cursor";

export class SprotMoveTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;
    private _path_stated: boolean;

    constructor() {
        const name = "Move";
        const id = SprotActions.ToolMove;
        const kind = SprotToolKind.ModifierTool;
        const icon = Move;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = MovePanel ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
        this._path_stated = false;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        return app.set_modifier_tool(SprotModifierToolSet.SprotMoveTool);
    }

    onMouseDown = (app: SprotAppViewController, button: number = 0): SprotClientCursor => {
        let interaction = super.onMouseDown(app, button);

        if(button !== 0) {
            return interaction;
        }

        if (!this._path_stated ) {
            this._path_stated = true;
        } 
        else {
            // end movement tool
            clearModifierTools();
            app.set_modifier_tool(SprotModifierToolSet.SprotNoTool);
            this._path_stated = false;
        }
        return interaction;
    }
}
