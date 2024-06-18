import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { PolygonToolIcon } from "$components/icons/tools";
import DrawingsConstraitsTrait from "$components/canvas/tools/DrawingsConstraitsTrait.svelte";

export class SprotPolygonTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "polygon";
        const id = SprotActions.ToolPolygon;
        const kind = SprotToolKind.DrawingTool;
        const icon = PolygonToolIcon;
        const shortkey = "K";
        super(name, id, kind, icon, shortkey);
        
        this.toolSet = SprotToolSet.SprotPolygonTool;
        this.toolsPanel = [DrawingsConstraitsTrait];
    }
}
