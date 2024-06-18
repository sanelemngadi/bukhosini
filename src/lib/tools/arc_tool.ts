import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { ArcToolIcon } from "$components/icons/tools";
import DrawingsConstraitsTrait from "$components/canvas/tools/DrawingsConstraitsTrait.svelte";

export class SprotArcTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Arc";
        const id = SprotActions.ToolArc;
        const kind = SprotToolKind.DrawingTool;
        const icon = ArcToolIcon;
        const shortkey = "A";
        super(name, id, kind, icon, shortkey);
        this.toolsPanel = [DrawingsConstraitsTrait];
        this.toolSet = SprotToolSet.SprotArcTool;
    }
}
