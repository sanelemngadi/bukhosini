import { None, type SprotOption } from "$lib/utils";
import type { ComponentType } from "svelte";
import { writable } from "svelte/store";

interface SprotTopLevel {
    top: number,
    component: SprotOption<ComponentType>,
}

export const toplevel = writable<SprotTopLevel>({top: 0, component: None});

export const getActionTopLevel = (predicate: (tl: SprotOption<ComponentType>, top: number) => void) => {
    toplevel.subscribe(item => predicate(item.component, item.top));
}

export const setActionTopLevel = (tl: SprotOption<ComponentType>, top: number) => {
    toplevel.update(() => {
        return { top, component: tl }
    });
}