import { SprotCursor } from "$wasm/sprot_app";
import { writable } from "svelte/store";

const cursor = writable<SprotCursor>(SprotCursor.SprotCursorSelect);

export const setActionCursor = (cur: SprotCursor) => {
    cursor.update(() => cur);
}

export const getActionCursor = (predicate: (cursor: SprotCursor) => void) => {
    cursor.subscribe(crsor => predicate(crsor));
}