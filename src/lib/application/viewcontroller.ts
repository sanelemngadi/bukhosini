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
import type { SprotClientBinder } from "./binder";
import { SprotPanelKind, SprotSelectionWrapper, SprotToolSet, 
    type SprotCursor, type SprotDocumentState } from "$wasm/sprot_app";
import { setCurrentSelection } from "$lib/stores";


export class SprotClientViewController extends SprotClient {
    constructor(private _binder: SprotClientBinder) {
        super();
    }

    on_selection(selection: SprotSelectionWrapper): void {
        setCurrentSelection(selection);

        console.log("screen w: ", this.get_screen_width(), " h: ", this.get_screen_height(), " r: ", this.get_screen_ratio());
        
    }

    on_cursor(cursor: SprotCursor) {
        // console.log(cursor.toString());        
    }

    
    on_document_changed(document: SprotDocumentState[]) {}
    
    on_current_tool(tool_id: SprotToolSet) {}
    on_current_panel(panel_id: SprotPanelKind) {}
}