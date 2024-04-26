import type { SprotTSColor } from "$lib/types";
import { writable } from "svelte/store";

const initState: SprotTSColor = { id: -10, r: 255, g: 255, b: 255, alpha: 255 };
const actionColor = writable<SprotTSColor>(initState);

export const getActionColor = (predicate: (color: SprotTSColor) => void) => {
    actionColor.subscribe(action => predicate(action));
}

export const setActionColor = (color: SprotTSColor) => {
    actionColor.update(() => color);
}