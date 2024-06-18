import { SprotClientDocument } from "$lib/application/document";
import { writable } from "svelte/store";

const documentState = writable<SprotClientDocument>(new SprotClientDocument());

export const getActionDocument = (predicate: (active: SprotClientDocument) => void) => {
    documentState.subscribe(state => predicate(state));
}

export const setActionDocument = (document: SprotClientDocument) => {
    documentState.update(() => document);
}

