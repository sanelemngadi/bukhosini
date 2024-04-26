import type { ComponentType } from "svelte";

export interface ISprotNotebookPage {
    name: string,
    id: number,
    panel: ComponentType,
    active: boolean,
}

export class SprotNotebook {
    public pages: ISprotNotebookPage[];
    private _pageCounter: number;

    constructor () {
        this.pages = [];
        this._pageCounter = 1;
    }

    private deactiveateAll() {
        for(const panel of this.pages) {
            panel.active = false;
        }
    }

    addPage(name: string, panel: ComponentType, active: boolean) {
        let pane = {
            name,
            id: this._pageCounter++,
            active,
            panel,
        };

        if(active) {
            this.deactiveateAll();
        }

        this.pages.push(pane);
    }

    setSelection(id: number): SprotNotebook {
        for(const panel of this.pages) {
            panel.active = panel.id === id;
        }
        return this;
    }
}