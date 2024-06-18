import { SprotActions, SprotToolKind } from "$lib/types";
import {
    SprotToolSet
} from "$wasm/sprot_app";
import { SnapIntersection } from "$components/icons/snapping";
import { SprotCanvasTool } from "$lib/tools/base";

export class SprotIntersectTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Intersection";
        const id = SprotActions.ToolIntersect;
        const kind = SprotToolKind.ModifierTool;
        const icon = SnapIntersection;
        const shortkey = "X";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotIntersectTool;
    }
}
