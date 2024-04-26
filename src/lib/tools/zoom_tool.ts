import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Zoom } from "$components/icons";

export class SprotZoomTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "zoom";
        const id = SprotActions.ToolScale;
        const kind = SprotToolKind.StandardTool;
        const icon = Zoom;
        const shortkey = "Z";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.toolSet = SprotToolSet.SprotZoomTool;
    }
}
