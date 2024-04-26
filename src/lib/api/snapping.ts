import { Ellipse, Line } from "$components/icons";
import { SnapIntersection, SnapPerpendicular, SnapVertex } from "$components/icons/snapping";
import { SprotActions, type SprotListButton } from "$lib/types";
import { SprotSnappingModes } from "$wasm/sprot_app";

export type SprotSnapping = Pick<SprotListButton, "active" | "icon" | "id" | "name"> & {
    snap: SprotSnappingModes,
}

export const snappingModes: SprotSnapping[] = [
    // {
    //     id: SprotActions.SnapAngle,
    //     name: "Snap to angle",
    //     active: false,
    //     icon: SnapAngle,
    //     snap: SprotSnappingModes.SnapToAngle,
    // },
    // {
    //     id: SprotActions.SnapGrid,
    //     name: "Snap to grid",
    //     active: false,
    //     icon: SnapGrid,
    //     snap: SprotSnappingModes.SnapToFix,
    // },
    {
        id: SprotActions.SnapIntersection,
        name: "Snap to intersection",
        active: false,
        icon: SnapIntersection,
        snap: SprotSnappingModes.SnapToFix,
    },
    {
        id: SprotActions.SnapPerpendicular,
        name: "Snap to perpendicular",
        active: false,
        icon: SnapPerpendicular,
        snap: SprotSnappingModes.SnapToPerpendicular,
    },
    {
        id: SprotActions.SnapVertex,
        name: "Snap to  vertex",
        active: false,
        icon: SnapVertex,
        snap: SprotSnappingModes.SnapToVertex
    },
    {
        id: SprotActions.SnapPoint,
        name: "Snap to fix point",
        active: false,
        icon: Ellipse,
        snap: SprotSnappingModes.SnapToFix,
    },
    {
        id: SprotActions.SnapLockLine,
        name: "Snap to lock to line",
        active: false,
        icon: Line,
        snap: SprotSnappingModes.SnapToLockToLine,
    },
]
