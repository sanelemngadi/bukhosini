import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import CanvasMessage from "$components/icons/CanvasMessage.svelte";

export class SprotCommentsTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Comments";
        const id = SprotActions.ToolComments;
        const kind = SprotToolKind.StandardTool;
        const icon = CanvasMessage;
        const shortkey = "D";
        super(name, id, kind, icon, shortkey);
        
        this.toolSet = SprotToolSet.SprotCommentsTool;
    }
}
