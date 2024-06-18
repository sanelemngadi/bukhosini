import { SprotMenuItemKind, type SprotMenubarItem, type SprotTSSize } from "$lib/types";
import type { ComponentType } from "svelte";
import type { SprotMenu } from ".";
import { Seperator } from "$components/toolbars";

export enum ISprotMenubarItemKind {
    Seperator,
    Control,
    Button,
    Checkbox,
    Radiobox,
}

export type TSprotToolbarItem = Pick<SprotMenubarItem, "active" | "id" | "name"> & {
    kind: ISprotMenubarItemKind,
    icon: ComponentType,
    fit: boolean,
    disabled: boolean,
    event: (() => void) | null,
}

export class SprotToolbar {
    private _toolbarItems: TSprotToolbarItem[];
    private _idCounter: number;
    private _active: boolean; // can popup menus on active when hovered

    constructor() {
        this._toolbarItems = [];
        this._idCounter = 1;
        this._active = false;
    }

    addTool(name: string, icon: ComponentType, event: (() => void) | null = null) {
        const toolbarItem: TSprotToolbarItem = {
            active: false,
            id: this._idCounter++,
            name, 
            kind: ISprotMenubarItemKind.Button,
            icon,
            fit: true,
            disabled: false,
            event
        }

        this._toolbarItems.push(toolbarItem);
    }

    addControl(name: string, icon: ComponentType, event: (() => {}) | null = null) {
        const toolbarItem: TSprotToolbarItem = {
            active: false,
            id: this._idCounter++,
            name, 
            kind: ISprotMenubarItemKind.Control,
            icon,
            fit: true,
            disabled: false,
            event
        }

        this._toolbarItems.push(toolbarItem);
    }

    addSeperator() {
        const toolbarItem: TSprotToolbarItem = {
            active: false,
            id: this._idCounter++,
            name: "Seperator", 
            kind: ISprotMenubarItemKind.Seperator,
            icon: Seperator,
            fit: true,
            disabled: false,
            event: null
        }

        this._toolbarItems.push(toolbarItem);
    }

    onButtonClicked(id: number): SprotToolbar {
        for (const tool of this._toolbarItems) {
            if (tool.id === id && tool.event) {
                tool.event();
            }
        }
        return this;
    }

    disabled(d: boolean): SprotToolbar {
        for(const tool of this._toolbarItems) {
            tool.disabled = d;
        }
        return this;
    }

    #getToolSize(item: TSprotToolbarItem): SprotTSSize {
        switch(item.kind) {
            case ISprotMenubarItemKind.Button:
            return { w: 32, h: 32 };
            case ISprotMenubarItemKind.Control:
                return { w: 164, h: 32 };
            case ISprotMenubarItemKind.Seperator:
                return { w: 16, h: 32 };
            default:
                return { w: 32, h: 32 }
        }
    }

    onResize(availSpace: number): SprotToolbar {
        let x = 0;
        for(const tool of this._toolbarItems) {
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


    getToolbarItems(): TSprotToolbarItem[] {
        return this._toolbarItems;
    }
}