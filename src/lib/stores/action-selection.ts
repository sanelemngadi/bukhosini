import { NO_SELECTION, type SprotTSSelection } from "$lib/types";
import { SprotSelection } from "$wasm/sprot_app";
import { writable } from "svelte/store";

// const initState: SprotTSSelection = {
//     entities: [],
//     is_group: false,
//     is_none: true,
//     is_single: false,
//     label: "No Selection",
// }

const selection = writable<SprotTSSelection>(NO_SELECTION);

export const getCurrentSelection = (predicate: (item: SprotTSSelection) => void) => {
    selection.subscribe(selected => {
        predicate(selected);
    });
}

export const setCurrentSelection = (selected: SprotSelection) => {
    let rect = selected.get_bounding_box();

    selection.update(() => {
        let selection: SprotTSSelection = {
            entities: selected.get_entities(),
            is_group: selected.is_group(),
            is_none: selected.is_empty(),
            is_single: selected.is_single(),
            label: selected.get_selection_label(),
            rect: {pt: {x: rect.x, y: rect.y }, sz: {w: rect.w, h: rect.h }}
        }

        return selection;
    });
}