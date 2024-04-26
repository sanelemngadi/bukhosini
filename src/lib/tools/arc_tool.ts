import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { DrawingPanel } from "$components/canvas/toplevels";
import { ArcToolIcon } from "$components/icons/tools";
// import { SomeFromUnknown, type SprotOption } from "$lib/utils";

export class SprotArcTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Arc";
        const id = SprotActions.ToolArc;
        const kind = SprotToolKind.DrawingTool;
        const icon = ArcToolIcon;
        const shortkey = "A";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = DrawingPanel;
        this.toolSet = SprotToolSet.SprotArcTool;
    }
}
