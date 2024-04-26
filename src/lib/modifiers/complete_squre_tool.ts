import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotAppViewController, SprotEntity, SprotModifierToolSet, 
    SprotSelectionWrapper
} from "$wasm/sprot_app";
import { SprotCanvasModifierTool } from "./base";
import { None, type SprotOption } from "$lib/utils";
import { ICompleteSquare } from "$components/icons";

export class SprotCompleteSquareTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotSelectionWrapper) => void>;

    constructor() {
        const name = "Complete Square";
        const id = SprotActions.ToolCompleteSquare;
        const kind = SprotToolKind.ModifierTool;
        const icon = ICompleteSquare;
        const shortkey = "X";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        return app.set_modifier_tool(SprotModifierToolSet.SprotCompleteSquareTool);
    }

    // onMouseMove = (app: SprotAppViewController, point: SprotPoint): SprotClientCursor => {
    //     let interaction = super.onMouseMove(app, point);
    //     // this._predicate.Some(predicate => predicate(this.selection)); 
        
    //     return interaction;
    // }

    // getModifiedEntity = (predicate: (selection: SprotSelectionWrapper) => void) => {
    //     this._predicate = Some(predicate);
    // }
}
