import { writable } from "svelte/store";

const preset = writable<number>(0);

export const  setActionPreset = (id: number) => {
    preset.update(() => id);
}

export const  getActionPreset = (predicate: (id: number) => void) => {
    preset.subscribe(id => predicate(id));
}