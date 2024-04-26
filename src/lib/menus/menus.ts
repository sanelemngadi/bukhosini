import type { ComponentType } from "svelte";
import { SprotMenuItemKind, SprotMenuItemState, type SprotMenuItem } from "../types";
// import type DropDownMenu from "$components/menus/DropDownMenu.svelte";
import DropDownMenu from "$components/menus/DropDownMenu.svelte";
import { SprotMenubar } from "./menubar";
// import { None, Some, type SprotOption } from "$lib/utils";


export class SprotMenu {
    private _menus: SprotMenuItem[];
    private _idCounter: number;
    private _subMenuComponent: ComponentType;
    private _parent: SprotMenu | SprotMenubar | null;

    constructor() {
        this._menus = [];
        this._idCounter = 1;
        this._subMenuComponent = DropDownMenu;
        this._parent = null;
    }

    setParent(parent: SprotMenu | SprotMenubar) {
        this._parent = parent;
    }

    getParent(): SprotMenu | SprotMenubar | null {
        return this._parent;
    }

    addSeperator = (): SprotMenuItem => {
        const menuItem: SprotMenuItem = {
            id: this._idCounter, 
            name: "seperator",
            kind: SprotMenuItemKind.SprotMenuSeperator,
            shortHelp: "",
            state: SprotMenuItemState.SprotMenuDisabled,
            active: false,
        }

        this._idCounter += 1;

        this._menus.push(menuItem);
        return menuItem;
    }

    addSubmenu = (name: string, menu: SprotMenu): SprotMenuItem => {
        const menuItem: SprotMenuItem = {
            id: this._idCounter, 
            name: name,
            submenu: menu,
            kind: SprotMenuItemKind.SprotMenuSubmenu,
            shortHelp: "",
            state: SprotMenuItemState.SprotMenuIdle,
            active: false,
        }

        if(menuItem.submenu) {
            menuItem.submenu.setParent(this);
        }

        this._idCounter += 1;

        this._menus.push(menuItem);

        return menuItem;
    }

    addButton = (name: string, shortkey: string, icon: ComponentType | null, longHelp?: string): SprotMenuItem => {
        const menuItem: SprotMenuItem = {
            id: this._idCounter, 
            name: name,
            kind: SprotMenuItemKind.SprotMenuButton,
            shortHelp: "",
            longHelp,
            state: SprotMenuItemState.SprotMenuIdle,
            icon: icon || undefined,
            shortkey,
            active: false,
        }

        this._idCounter += 1;

        this._menus.push(menuItem);

        return menuItem;
    }

    getMenus = (): SprotMenuItem[] => {
        return this._menus;
    }

    getComponent = (): ComponentType => {
        return this._subMenuComponent;
    }

    setActiveMenuItem = (item: SprotMenuItem): SprotMenu => {
        this._menus = this._menus.map(state => {
            state.active = item.kind === SprotMenuItemKind.SprotMenuSubmenu && item.id === state.id;

            if(state.submenu) {
                state.submenu = state.submenu.setActiveMenuItem(item);
            }

            return state;
        });

        return this;
    }

    // getLastChild(): SprotMenu {
    //     let lastChild: SprotMenu | null = this;

    //     for(const menu of this._menus) {
    //         if(menu.active && menu.submenu) {
    //             lastChild = menu.submenu.getLastChild();
    //         }
    //     }

    //     return lastChild;
    // }

    closeMenu() {
        for(const menus of this._menus) {
            
            if(menus.active && menus.submenu) {
                menus.active = false;

                menus.submenu = menus.submenu.closeAllPanes();
            }
        }
    }

    closeAllPanes = (): SprotMenu => {
          
        // this.closeMenu();
        
        let lastParent: SprotMenu | SprotMenubar | null = this;
        while(lastParent instanceof SprotMenu && lastParent?.getParent()) {
            // lastParent.setActiveMenuItem();
            lastParent.closeMenu();
            lastParent = lastParent.getParent();
        }

        if(lastParent && lastParent instanceof SprotMenubar) {
            lastParent.setActiveMenu(null);
            lastParent.activate(false);
        }

        

        // while(lastParent?.)

        // this.closeMenu();

        // console.log(lastParent);
        
        
        return this;
    }
}