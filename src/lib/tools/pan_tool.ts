import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Hand } from "$components/icons";

export class SprotPanTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "pan";
        const id = SprotActions.ToolPan;
        const kind = SprotToolKind.StandardTool;
        const icon = Hand;
        const shortkey = "L";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.toolSet = SprotToolSet.SprotPanTool;
    }
}
