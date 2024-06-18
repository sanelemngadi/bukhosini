import { SprotActions, SprotToolKind } from "$lib/types";
import {  
    SprotToolSet
} from "$wasm/sprot_app";
import { Meet} from "$components/icons/modifiers";
import { SprotCanvasTool } from "$lib/tools/base";

export class SprotMeetTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Meet";
        const id = SprotActions.ToolMeet;
        const kind = SprotToolKind.ModifierTool;
        const icon = Meet;
        const shortkey = "V";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotMeetTool;
    }
}
