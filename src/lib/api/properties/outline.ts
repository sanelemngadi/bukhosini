import MarginItem from "$components/general/accordion/MarginItem.svelte";
import OutlineItem from "$components/general/accordion/OutlineItem.svelte";
import { Line } from "$components/icons";
import { Move, Rotate, Scale } from "$components/icons/modifiers";
import { SprotActions, type ISprotAccordionListItem } from "$lib/types";

export const outlines: ISprotAccordionListItem[] = [
    { 
        name: "Standard", 
        active: false,
        kind: SprotActions.TransformationMove, 
        listItem: OutlineItem, 
        listeItemProps: {
            active: false,
            elementId: SprotActions.TransformationMove,
            icon: undefined,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Pattern", 
        active: false,
        kind: SprotActions.TransformationScale, 
        listItem: OutlineItem, 
        listeItemProps: {
            active: false,
            elementId: SprotActions.TransformationScale,
            icon: undefined,
            setActive: (id: number) => {},
            show: true,
        }
    },
]