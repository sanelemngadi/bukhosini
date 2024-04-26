import HatchItem from "$components/general/accordion/HatchItem.svelte";
import MarginItem from "$components/general/accordion/MarginItem.svelte";
import { Rect } from "$components/icons";
import { Move, Rotate, Scale } from "$components/icons/modifiers";
import { SprotActions, type ISprotAccordionListItem } from "$lib/types";

export const hatchs: ISprotAccordionListItem[] = [
    { 
        name: "Standard", 
        active: false,
        kind: SprotActions.TransformationMove, 
        listItem: HatchItem, 
        listeItemProps: {
            active: false,
            elementId: SprotActions.TransformationMove,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Pattern", 
        active: false,
        kind: SprotActions.TransformationScale, 
        listItem: HatchItem, 
        listeItemProps: {
            active: false,
            elementId: SprotActions.TransformationScale,
            setActive: (id: number) => {},
            show: true,
        }
    },
]