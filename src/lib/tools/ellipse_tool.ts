import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Ellipse } from "$components/icons";
import { DrawingPanel } from "$components/canvas/toplevels";

export class SprotEllipseTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "ellipse";
        const id = SprotActions.ToolEllipse;
        const kind = SprotToolKind.DrawingTool;
        const icon = Ellipse;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);

        this.panelComponent = DrawingPanel ;
        this.toolSet = SprotToolSet.SprotEllipseTool;
    }
}
