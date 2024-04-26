import type { SprotMenubarItem } from "$lib/types";
import type { SprotMenu } from ".";



export class SprotMenubar {
    private _menubarItems: SprotMenubarItem[];
    private _idCounter: number;
    private _active: boolean; // can popup menus on active when hovered

    constructor() {
        this._menubarItems = [];
        this._idCounter = 1;
        this._active = false;
    }

    addMenu(name: string, menu: SprotMenu, key: string) {
        const menubarItem: SprotMenubarItem = {
            active: false,
            altKey: key,
            id: this._idCounter++,
            name, menu,
        }

        menubarItem.menu.setParent(this);

        this._menubarItems.push(menubarItem);
    }

    getMenubarItems(): SprotMenubarItem[] {
        return this._menubarItems;
    }

    activate(active: boolean): SprotMenubar {
        this._active = active;
        return this;
    }

    toggleActive() {
        return this.activate(!this._active);
    }

    isActive(): boolean {
        return this._active;
    }

    setActiveMenu(menu: SprotMenubarItem | null): SprotMenubar {
        for(const item of this._menubarItems) {
            item.active = menu && menu.id === item.id || false;
        }

        return this;
    }
}