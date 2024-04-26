import { writable } from "svelte/store";

const statusInit: string = "Read?";

const status = writable<string>(statusInit);

export const setStatus = (statusText: string) => {
    status.update(() => statusText);
}

export const setDefaultStatus = () => {
    status.update(() => "Ready");
}

export const getStatus = (predicate: (statusText: string) => void) => {
    status.subscribe((value) => {
        predicate(value);
    });
}
