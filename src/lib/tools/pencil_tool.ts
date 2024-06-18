import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
// import { DrawingPanel } from "$components/canvas/toplevels";
import { PencilToolIcon } from "$components/icons/tools";

export class SprotPencilTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Pencil";
        const id = SprotActions.ToolPencil;
        const kind = SprotToolKind.DrawingTool;
        const icon = PencilToolIcon;
        const shortkey = "L";
        super(name, id, kind, icon, shortkey);
        
        // this.panelComponent = DrawingPanel ;
        this.toolSet = SprotToolSet.SprotPencilTool;
    }
}
