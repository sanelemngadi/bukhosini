import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet, } from "$wasm/sprot_app";
import { CopyToMouse } from "$components/icons/modifiers";
import { SprotCanvasTool } from "$lib/tools/base";

export class SprotCopyTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Clone";
        const id = SprotActions.ToolCopyToMouse;
        const kind = SprotToolKind.ModifierTool;
        const icon = CopyToMouse;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);
        
        this.toolSet = SprotToolSet.SprotCopyTool;
    }
}
