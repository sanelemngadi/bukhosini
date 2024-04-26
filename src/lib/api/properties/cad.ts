import CadItem from "$components/general/accordion/CADItem.svelte";
import { BottomSide, ICompleteSquare, LeftSide, RightSide, TopSide } from "$components/icons";
import { CopyToMouse, Extend, Meet, Trim } from "$components/icons/modifiers";
import { SnapIntersection } from "$components/icons/snapping";
import { SprotActions, type ISprotAccordionListItem } from "$lib/types";

export const cads: ISprotAccordionListItem[] = [
    { 
        name: "Copy_To_Mouse", 
        active: false,
        kind: SprotActions.ToolCopyToMouse, 
        listItem: CadItem, 
        listeItemProps: {
            name: "Copy To Mouse",
            active: false,
            elementId: SprotActions.ToolCopyToMouse,
            icon: CopyToMouse,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Trim", 
        active: false,
        kind: SprotActions.ToolTrim, 
        listItem: CadItem, 
        listeItemProps: {
            name: "Trim",
            active: false,
            elementId: SprotActions.ToolTrim,
            icon: Trim,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Intersect", 
        active: false,
        kind: SprotActions.ToolIntersect, 
        listItem: CadItem, 
        listeItemProps: {
            name: "Intersect",
            active: false,
            elementId: SprotActions.ToolIntersect,
            icon: SnapIntersection,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Meet", 
        active: false,
        kind: SprotActions.ToolMeet, 
        listItem: CadItem, 
        listeItemProps: {
            name: "Meet",
            active: false,
            elementId: SprotActions.ToolMeet,
            icon: Meet,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Extend", 
        active: false,
        kind: SprotActions.ToolExtend, 
        listItem: CadItem, 
        listeItemProps: {
            name: "Extend",
            active: false,
            elementId: SprotActions.ToolExtend,
            icon: Extend,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Complete Square", 
        active: false,
        kind: SprotActions.ToolCompleteSquare, 
        listItem: CadItem, 
        listeItemProps: {
            name: "Complete_Square",
            active: false,
            elementId: SprotActions.ToolCompleteSquare,
            icon: ICompleteSquare,
            setActive: (id: number) => {},
            show: true,
        }
    },
]