import { panels } from "$lib/api";
import type { ISprotPanel, SprotActions } from "$lib/types";
import { writable } from "svelte/store";

// interface SprotPanelsState {
//     pinned: boolean, 
//     open: boolean,
// }

const initState: ISprotPanel[] = panels ;

const panelState = writable<ISprotPanel[]>(initState);

export const closePanels = () => {
    panelState.update(state => {
        state = state.map(panel => {
            panel.active = false;
            return panel;
        })
        return state;
    })
}

// export const openPanels = () => {
//     panels.update(() => true );
// }

// export const togglePanels = () => {
//     panels.update(state => !state );
// }

export const getPanels = (predicate: (panes: ISprotPanel[]) => void) => {
    panelState.subscribe(state => predicate(state));
}

export const setActivePanel = (id: SprotActions) => {
    panelState.update(state => {
        state = state.map(panel => {
            // panel.active = panel.id == id;
            if(panel.id == id) {
                panel.active = !panel.active;
            } else {
                panel.active = false;
            }
            return panel;
        })
        return state;
    })
}

export const setSelectedPanel = (id: SprotActions, selected: boolean) => {
    panelState.update(state => {
        state = state.map(panel => {
            if(panel.id == id) {
                panel.selected = selected;
            }
            return panel;
        })
        return state;
    })
}

// export const panelsPinned = (pinned: boolean) => {
//     panels.update(state => { return { ...state, open: true, pinned }});
// }

// export const togglePanelsPinned = () => {
//     panels.update(state => { return { ...state, open: true, pinned: !state.pinned }});
// }

// export const getPanelsState = (predicate: (open: boolean) => void) => {
//     panels.subscribe(state => predicate(state));
// }