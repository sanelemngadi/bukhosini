// import { selectionOperations } from "$lib/api";
import { selectionOperations } from "$lib/api/selectionoperations";
import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
import { writable } from "svelte/store";

const operations = writable(selectionOperations);

export const getSelectionOperations = (): SprotCanvasModifierTool[] => {
    let ts: SprotCanvasModifierTool[] = [];
    operations.subscribe(t => ts = t);
    return ts;
}