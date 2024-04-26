import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Line } from "$components/icons";
import { DrawingPanel } from "$components/canvas/toplevels";

export class SprotLineTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "line";
        const id = SprotActions.ToolLine;
        const kind = SprotToolKind.DrawingTool;
        const icon = Line;
        const shortkey = "L";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = DrawingPanel ;
        this.toolSet = SprotToolSet.SprotLineTool;
    }
}
