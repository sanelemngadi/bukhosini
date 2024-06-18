import { Ellipse, Line } from "$components/icons";
import { SnapIntersection, SnapPerpendicular, SnapVertex } from "$components/icons/snapping";
import { SprotActions, type SprotListButton } from "$lib/types";
import { SprotAppViewController, SprotSnappingModes } from "$wasm/sprot_app";

export type SprotSnapping = Pick<SprotListButton, "active" | "icon" | "id" | "name"> & {
    snap: SprotSnappingModes,
    onSelection: (app: SprotAppViewController) => void,
}

export const snappingModes: SprotSnapping[] = [
    {
        id: SprotActions.SnapIntersection,
        name: "Intersection",
        active: false,
        icon: SnapIntersection,
        snap: SprotSnappingModes.SnapToFix,
        onSelection: appState => {
            appState.set_snapping_mode(SprotSnappingModes.SnapToFix);
        }
    },
    {
        id: SprotActions.SnapPerpendicular,
        name: "Perpendicular",
        active: false,
        icon: SnapPerpendicular,
        snap: SprotSnappingModes.SnapToPerpendicular,
        onSelection: appState => {
            appState.set_snapping_mode(SprotSnappingModes.SnapToPerpendicular);
        }
    },
    {
        id: SprotActions.SnapVertex,
        name: " Vertex",
        active: false,
        icon: SnapVertex,
        snap: SprotSnappingModes.SnapToVertex,
        onSelection: appState => {
            appState.set_snapping_mode(SprotSnappingModes.SnapToVertex);
        }
    },
    {
        id: SprotActions.SnapPoint,
        name: "Fix point",
        active: false,
        icon: Ellipse,
        snap: SprotSnappingModes.SnapToFix,
        onSelection: appState => {
            appState.set_snapping_mode(SprotSnappingModes.SnapToFix);
        }
    },
    {
        id: SprotActions.SnapLockLine,
        name: "Lock to line",
        active: false,
        icon: Line,
        snap: SprotSnappingModes.SnapToLockToLine,
        onSelection: appState => {
            appState.set_snapping_mode(SprotSnappingModes.SnapToLockToLine);
        }
    },
]
