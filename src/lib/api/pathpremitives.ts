import { LeftSide } from "$components/icons";
import AddCircleToPathIcon from "$components/icons/panels/AddCircleToPathIcon.svelte";
import AddLineToBottom from "$components/icons/panels/AddLineToBottom.svelte";
import AddLineToLeft from "$components/icons/panels/AddLineToLeft.svelte";
import AddLineToRight from "$components/icons/panels/AddLineToRight.svelte";
import AddLineToTop from "$components/icons/panels/AddLineToTop.svelte";
import AddPoint from "$components/icons/panels/AddPoint.svelte";
import AddRectIcon from "$components/icons/panels/AddRectIcon.svelte";
import AddRectToPath from "$components/panels/path/AddRectToPath.svelte";
import LineDistance from "$components/panels/path/LineDistance.svelte";
import LineTo from "$components/panels/path/LineTo.svelte";
import PolarTo from "$components/panels/path/PolarTo.svelte";
import type { ComponentProps, ComponentType, SvelteComponent } from "svelte";

export enum SprotPathPremitiveKind {
    LEFT,
    RIGHT,
    BOTTOM,
    TOP,
    LINE_TO,
    MOVE_TO,
    POLAR_TO,
    ADD_RECT,
    ADD_CIRCLE,
}

export interface SprotPathPremitive {
    id: number,
    active: boolean,
    current: boolean,
    kind: SprotPathPremitiveKind,
    name: string,
    icon: ComponentType,
    component: {
        panel: ComponentType,
        props?: ComponentProps<SvelteComponent>
    },
  }

export const pathPremitives: SprotPathPremitive[] = [
    {
        id: 0,
        active: true,
        current: false,
        kind: SprotPathPremitiveKind.LEFT,
        name: "Go Left",
        icon: AddLineToLeft,
        component: {
            panel: LineDistance,
        }
    },
    {
        id: 1,
        active: true,
        current: false,
        kind: SprotPathPremitiveKind.RIGHT,
        name: "Go Right",
        icon: AddLineToRight,
        component: {
            panel: LineDistance,
        }
    },
    {
        id: 2,
        active: true,
        current: false,
        kind: SprotPathPremitiveKind.TOP,
        name: "Go Up",
        icon: AddLineToTop,
        component: {
            panel: LineDistance,
        }
    },
    {
        id: 3,
        active: true,
        current: false,
        kind: SprotPathPremitiveKind.BOTTOM,
        name: "Go Down",
        icon: AddLineToBottom,
        component: {
            panel: LineDistance,
        }
    },
    {
        id: 4,
        active: true,
        current: false,
        kind: SprotPathPremitiveKind.ADD_RECT,
        name: "Add Rect",
        icon: AddRectIcon,
        component: {
            panel: AddRectToPath,
        }
    },
    {
        id: 5,
        active: true,
        current: false,
        kind: SprotPathPremitiveKind.ADD_CIRCLE,
        name: "Add Circle",
        icon: AddCircleToPathIcon,
        component: {
            panel: LineDistance,
        }
    },
    {
        id: 6,
        active: true,
        current: false,
        kind: SprotPathPremitiveKind.POLAR_TO,
        name: "Add Line to Point",
        icon: AddPoint,
        component: {
            panel: LineTo,
        }
    },
];