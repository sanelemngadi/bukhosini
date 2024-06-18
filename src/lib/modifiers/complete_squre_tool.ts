import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotToolSet
} from "$wasm/sprot_app";
import { ICompleteSquare } from "$components/icons";
import { SprotCanvasTool } from "$lib/tools/base";

export class SprotCompleteSquareTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Complete Square";
        const id = SprotActions.ToolCompleteSquare;
        const kind = SprotToolKind.ModifierTool;
        const icon = ICompleteSquare;
        const shortkey = "X";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotCompleteSquareTool;
    }
}
