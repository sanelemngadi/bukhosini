import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { PropsPicker } from "$components/icons";


export class SprotPropertyPickerTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "property picker";
        const id = SprotActions.ToolPropertyPicker;
        const kind = SprotToolKind.SelectionTool;
        const icon = PropsPicker;
        const shortkey = "G";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = null ;

        this.toolSet = SprotToolSet.SprotSelectionTool;
    }
}
