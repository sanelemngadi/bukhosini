import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { CanvasMessage } from "$components/icons";
import { DrawingText } from "$components/canvas/toplevels";

export class SprotMessageTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "message";
        const id = SprotActions.ToolLeaveMessage;
        const kind = SprotToolKind.TextTool;
        const icon = CanvasMessage;
        const shortkey = "C";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = DrawingText ;
        this.toolSet = SprotToolSet.SprotMeasureTool;
    }
}
