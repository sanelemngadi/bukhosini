import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Typography } from "$components/icons";
import { DrawingText } from "$components/canvas/toplevels";

export class SprotTextTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "text";
        const id = SprotActions.ToolText;
        const kind = SprotToolKind.TextTool;
        const icon = Typography;
        const shortkey = "C";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = DrawingText ;
        this.toolSet = SprotToolSet.SprotSelectionTool;
    }
}
