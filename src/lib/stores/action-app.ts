import type { SprotAppViewController } from "$wasm/sprot_app";
import { writable } from "svelte/store";

const appState = writable<SprotAppViewController | null>(null);

export const setAppViewController = (controller: SprotAppViewController) => {
    appState.update(() => controller);
}

export const getAppViewController = (predicate: (app: SprotAppViewController) => void) => {
    appState.subscribe(state => {
        if(state) {
            predicate(state);
        }
    })
}