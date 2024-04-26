import TransformationItem from "$components/general/accordion/TransformationItem.svelte";
import { Move, Rotate, Scale } from "$components/icons/modifiers";
import { SprotActions, type ISprotAccordionListItem } from "$lib/types";

export const Transformations: ISprotAccordionListItem[] = [
    { 
        name: "Translate", 
        active: false,
        kind: SprotActions.TransformationMove, 
        listItem: TransformationItem, 
        listeItemProps: {
            name: "Translate",
            active: false,
            elementId: SprotActions.TransformationMove,
            icon: Move,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Scale", 
        active: false,
        kind: SprotActions.TransformationScale, 
        listItem: TransformationItem, 
        listeItemProps: {
            name: "Scale",
            active: false,
            elementId: SprotActions.TransformationScale,
            icon: Scale,
            setActive: (id: number) => {},
            show: true,
        }
    },
    { 
        name: "Rotate", 
        active: false,
        kind: SprotActions.TransformationRotate, 
        listItem: TransformationItem, 
        listeItemProps: {
            name: "Rotate",
            active: false,
            elementId: SprotActions.TransformationRotate,
            icon: Rotate,
            setActive: (id: number) => {},
            show: true,
        }
    },
]