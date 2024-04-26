import type { ISprotPropertyAttribute } from "$lib/types";
import { cads } from "./cad";
import { hatchs } from "./hach";
import { margins } from "./margins";
import { outlines } from "./outline";
import { Transformations } from "./transformations";

export const selectionAttributes: ISprotPropertyAttribute[] = [
    {
        id: 0,
        name: "Hatch",
        active: false,
        maxListItems: 4,
        attributes: hatchs,
    },
    {
        id: 1,
        name: "Outline",
        active: false,
        maxListItems: 4,
        attributes: outlines,
    },
    {
        id: 2,
        name: "Transformation",
        active: false,
        maxListItems: 10,
        attributes: Transformations,
    },
    {
        id: 3,
        name: "CAD",
        active: false,
        maxListItems: 10,
        attributes: cads,
    },
]