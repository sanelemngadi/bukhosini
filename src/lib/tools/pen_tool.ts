import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
// import { DrawingPanel } from "$components/canvas/toplevels";
import { PenToolIcon } from "$components/icons/tools";

export class SprotPenTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Pen";
        const id = SprotActions.ToolPen;
        const kind = SprotToolKind.DrawingTool;
        const icon = PenToolIcon;
        const shortkey = "P";
        super(name, id, kind, icon, shortkey);
        
        // this.panelComponent = DrawingPanel ;
        this.toolSet = SprotToolSet.SprotPenTool;
    }
}
