import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotAppViewController, SprotEntity, SprotModifierToolSet
} from "$wasm/sprot_app";
import { SprotCanvasModifierTool } from "./base";
import { None, type SprotOption, SelectionOption } from "$lib/utils";
import { SnapIntersection } from "$components/icons/snapping";

export class SprotIntersectTool extends SprotCanvasModifierTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _predicate: SprotOption<(selection: SprotOption<SelectionOption<SprotEntity>>) => void>;

    constructor() {
        const name = "Intersection";
        const id = SprotActions.ToolIntersect;
        const kind = SprotToolKind.ModifierTool;
        const icon = SnapIntersection;
        const shortkey = "X";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.presets = [];

        this._entity = None;
        this._predicate = None;
    }

    
    init = (app: SprotAppViewController): boolean => { 
        return app.set_modifier_tool(SprotModifierToolSet.SprotIntersectTool);
    }
}
