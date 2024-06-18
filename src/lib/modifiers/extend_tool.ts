import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotToolSet
} from "$wasm/sprot_app";
import { Extend } from "$components/icons/modifiers";
import { SprotCanvasTool } from "$lib/tools/base";

export class SprotExtendTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Extend";
        const id = SprotActions.ToolExtend;
        const kind = SprotToolKind.ModifierTool;
        const icon = Extend;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotExtendTool;
    }
}
