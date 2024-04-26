import MarginItem from "$components/general/accordion/MarginItem.svelte";
import { BottomSide, LeftSide, RightSide, TopSide } from "$components/icons";
import { SprotActions, type ISprotAccordionListItem } from "$lib/types";

export const margins: ISprotAccordionListItem[] = [
    { 
        name: "Top Margin", 
        active: false,
        kind: SprotActions.MarginTop, 
        listItem: MarginItem, 
        listeItemProps: {
            active: false,
            elementId: SprotActions.MarginTop,
            icon: TopSide,
            setActive: (id: number) => {},
            show: true,
            side: "top",
        }
    },
    { 
        name: "Right Margin", 
        active: false,
        kind: SprotActions.MarginRight, 
        listItem: MarginItem, 
        listeItemProps: {
            active: false,
            elementId: SprotActions.MarginRight,
            icon: RightSide,
            setActive: (id: number) => {},
            show: true,
            side: "right",
        }
    },
    { 
        name: "Bottom Margin", 
        active: false,
        kind: SprotActions.MarginBottom, 
        listItem: MarginItem, 
        listeItemProps: {
            active: false,
            elementId: SprotActions.MarginBottom,
            icon: BottomSide,
            setActive: (id: number) => {},
            show: true,
            side: "bottom",
        }
    },
    { 
        name: "Left Margin", 
        active: false,
        kind: SprotActions.MarginLeft, 
        listItem: MarginItem, 
        listeItemProps: {
            active: false,
            elementId: SprotActions.MarginLeft,
            icon: LeftSide,
            setActive: (id: number) => {},
            show: true,
            side: "left",
        }
    },
]