
import type { SprotSelectionWrapper } from "$wasm/sprot_app";

export class SprotClientBinder {
    constructor() {}

    on_selection(selection: SprotSelectionWrapper) {
        // console.log("selection from rust: ", selection);        
    }
}