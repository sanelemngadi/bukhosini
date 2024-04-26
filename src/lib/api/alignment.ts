import { BottomVertical, CenterHorizontal, CenterVertical, 
    DistributeHorizontal, DistributeVertical, LeftHorizontal, 
    RightHorizontal, TopVertical } from "$components/icons/alignment";
import { SprotActions, type SprotListButton } from "$lib/types";

export type SprotAlignments = SprotListButton & {
    kind: "horizontal" | "vertical" | "distribution"
} ;

export const alignments: SprotAlignments[] = [
    {
        id: SprotActions.AlignLeft,
        name: "Left",
        active: false, 
        icon: LeftHorizontal,
        kind: "horizontal"
    },
    {
        id: SprotActions.AlignCenterHorizontal,
        name: "Center Horizontal",
        active: false,
        icon: CenterHorizontal,
        kind: "horizontal"
    },
    {
        id: SprotActions.AlignCenterVertical,
        name: "Center Vertical",
        active: false,
        icon: CenterVertical,
        kind: "vertical"
    },
    {
        id: SprotActions.AlignRight,
        name: "Right",
        active: false,
        icon: RightHorizontal,
        kind: "horizontal"
    },
    {
        id: SprotActions.AlignTop,
        name: "Top",
        active: false,
        icon: TopVertical,
        kind: "vertical"
    },
    {
        id: SprotActions.AlignBottom,
        name: "Bottom",
        active: false,
        icon: BottomVertical,
        kind: "vertical"
    },
    {
        id: SprotActions.AlignDistributeHorizontal,
        name: "Distribute Horizontal",
        active: false,
        icon: DistributeHorizontal,
        kind: "distribution"
    },
    {
        id: SprotActions.AlignDistributeVertical,
        name: "Distribute Vertical",
        active: false,
        icon: DistributeVertical,
        kind: "distribution"
    },
]