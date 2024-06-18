/*
COMMUNICATION

    TYPESCRIPTS / JAVASCRIPT
    When javascript sends communication to rust it sends message via 
    SprotAppViewController

    RUST
    When rust sends communication to the client JS, it sends via
    SprotClientViewController

    RUST traits
    When rust traits sends communication to the client they use serde to
    send / receive data to / from the client
*/

import { SprotClient } from "../../../src-wasm/src/sprot";
import { SprotPanelKind, SprotSelection, SprotToolInterface, SprotToolSet, 
    type SprotCursor, type SprotDocument } from "$wasm/sprot_app";
import { setActionDocument, setActionPreset, setActionTool, setCurrentSelection } from "$lib/stores";
import { setTargetToolBusy } from "$lib/stores/action-tool";
import { SprotClientDocument } from "./document";


export class SprotClientViewController extends SprotClient {
    constructor() {
        super();
    }

    on_selection(selection: SprotSelection): void {
        setCurrentSelection(selection);

        // console.log("screen w: ", this.get_screen_width(), " h: ", this.get_screen_height(), " r: ", this.get_screen_ratio());
    }

    on_cursor(cursor: SprotCursor) {
        // console.log(cursor.toString());        
    }

    
    on_document_changed(document: SprotDocument | null) {
        let d = new SprotClientDocument();
        if(document) {
            d.changeState(document);
        }

        setActionDocument(d);
        // console.log("document changed: ", document);
    }

    on_action_preset(preset_id: number) {
        setActionPreset(preset_id);
    }
    
    on_current_tool(tool_id: SprotToolSet, presets: SprotToolInterface) {
        setActionTool(tool_id, presets);
    }

    on_current_panel(panel_id: SprotPanelKind) {}

    set_tool_busy(busy: boolean) {
        setTargetToolBusy(busy);
    }


    // to be implementend
    on_document_changes_made() {
        // on new entity added, removed or modified, and all the undoable actions and commands
    }

    on_tool_command(){
        // the tool message and the input expected
    }
}

/*
We need save an image object for every document (general CAD and survey board)
so that hovering on top of a tab shows the document drawing
and so that navigating using navigation shows the image of an active document

*/