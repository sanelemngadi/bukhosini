import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { DimensionsIcon } from "$components/icons";

export class SprotDimensionsTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Dimentions";
        const id = SprotActions.ToolDimensions;
        const kind = SprotToolKind.StandardTool;
        const icon = DimensionsIcon;
        const shortkey = "D";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;
        this.toolSet = SprotToolSet.SprotDimensionsTool;
    }
}
