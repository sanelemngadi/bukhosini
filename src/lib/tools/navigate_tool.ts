import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Selection } from "$components/icons";

// with this tool when we hover the canvas we show an image of the whole canvas
// zoomed so that clicking on it pans and zoom to the point, then
// go back to selection tool unless it's a friend tool
export class SprotNavigateTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "navigate";
        const id = SprotActions.ToolNavigate;
        const kind = SprotToolKind.StandardTool;
        const icon = Selection;
        const shortkey = "N";
        super(name, id, kind, icon, shortkey);
        
        this.toolSet = SprotToolSet.SprotNavigateTool;
    }
}
