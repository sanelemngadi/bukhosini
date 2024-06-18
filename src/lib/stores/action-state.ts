import { writable } from "svelte/store"

interface ISprotState {
    showPanels: boolean,
    showRulers: boolean,
}

const initState: ISprotState = {
    showPanels: false,
    showRulers: false,
}

const state = writable<ISprotState>(initState);

export const modifyState = (predicate: (state: ISprotState) => ISprotState) => {
    state.update(st => predicate(st));
}

export const getState = (predicate: (state: ISprotState) => void) => {
    state.subscribe(st => predicate(st));
}