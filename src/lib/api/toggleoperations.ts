import { ToggleCad, ToggleCode, ToggleElevation, ToggleImage, ToggleLocation, ToggleName } from "$components/icons/toggling";
import { SprotActions, type SprotListButton } from "$lib/types";
import { SprotSnappingModes } from "$wasm/sprot_app";

// export type SprotSnapping = Pick<SprotListButton, "active" | "icon" | "id" | "name"> & {
//     snap: SprotSnappingModes,
// }

export const toggleOperations: SprotListButton[] = [
    {
        id: SprotActions.ToggleName,
        name: "Toggle name",
        active: false,
        icon: ToggleName,
        // snap: SprotSnappingModes.SnapToFix,
    },
    {
        id: SprotActions.ToggleCode,
        name: "Toggle Code",
        active: false,
        icon: ToggleCode,
        // snap: SprotSnappingModes.SnapToPerpendicular,
    },
    {
        id: SprotActions.ToggleElevation,
        name: "Toggle Elevation",
        active: false,
        icon: ToggleElevation,
        // snap: SprotSnappingModes.SnapToVertex
    },
    {
        id: SprotActions.ToggleLocation,
        name: "Toggle Location/Surface",
        active: false,
        icon: ToggleLocation,
        // snap: SprotSnappingModes.SnapToFix,
    },
    {
        id: SprotActions.ToggleImage,
        name: "Toggle Image",
        active: false,
        icon: ToggleImage,
        // snap: SprotSnappingModes.SnapToLockToLine,
    },
    {
        id: SprotActions.ToggleCAD,
        name: "Toggle CAD/Layer",
        active: false,
        icon: ToggleCad,
        // snap: SprotSnappingModes.SnapToLockToLine,
    },
    // {
    //     id: SprotActions.OutlineMode,
    //     name: "Toggle Outline Mode",
    //     active: false,
    //     icon: Outline,
    //     snap: SprotSnappingModes.SnapToLockToLine,
    // },
    // {
    //     id: SprotActions.ToggleLockGeometry,
    //     name: "Toggle Lock geometry",
    //     active: false,
    //     icon: Constraints,
    //     snap: SprotSnappingModes.SnapToLockToLine,
    // },
    // {
    //     id: SprotActions.ToggleInflate,
    //     name: "Toggle Lock geometry",
    //     active: false,
    //     icon: Inflate,
    //     snap: SprotSnappingModes.SnapToLockToLine,
    // },
]
