import { type SprotMenubarItem, type SprotTSSize } from "$lib/types";
import type { ComponentType } from "svelte";
// import type { SprotDocument } from "$wasm/sprot_app";
import type { SprotClientDocument } from "$lib/application/document";

export enum ISprotMenubarItemKind {
    Seperator,
    Control,
    Button,
    Checkbox,
    Radiobox,
}

export type TSprotCanvasTabItem = Pick<SprotMenubarItem, "active" | "id" | "name"> & {
    kind?: ISprotMenubarItemKind, // document kind
    icon?: ComponentType, // icon if any
    fit: boolean,
    document: SprotClientDocument,
}

export class SprotCanvasTab {
    private _canvastabItems: TSprotCanvasTabItem[];
    private _idCounter: number;
    private _active: boolean; // can popup menus on active when hovered

    constructor() {
        this._canvastabItems = [];
        this._idCounter = 1;
        this._active = false;
    }

    addTab(name: string, document: SprotClientDocument, event: (() => {}) | null = null) {
        const canvastabItem: TSprotCanvasTabItem = {
            active: false,
            id: this._idCounter++,
            name, 
            kind: ISprotMenubarItemKind.Button,
            fit: true,
            document,
        }

        this._canvastabItems.push(canvastabItem);
    }



    #getToolSize(item: TSprotCanvasTabItem): SprotTSSize {
        switch(item.kind) {
            default:
                return { w: 160, h: 32 }
        }
    }

    onResize(availSpace: number): SprotCanvasTab {
        let x = 0;
        for(const tool of this._canvastabItems) {
            let sz = this.#getToolSize(tool);

            if(x + sz.w <= availSpace) {
                x += sz.w;
                tool.fit = true;
            } else {
                tool.fit = false;
            }
        }

        // console.log("avail size: ", availSpace, );
        return this;
    }


    getcanvastabItems(): TSprotCanvasTabItem[] {
        return this._canvastabItems;
    }
}