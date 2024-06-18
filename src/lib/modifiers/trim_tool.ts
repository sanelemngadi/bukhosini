import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { Trim } from "$components/icons/modifiers";
import { SprotCanvasTool } from "$lib/tools/base";

export class SprotTrimTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Trim";
        const id = SprotActions.ToolTrim;
        const kind = SprotToolKind.ModifierTool;
        const icon = Trim;
        const shortkey = "X";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotTrimTool;
    }
}
