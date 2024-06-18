import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Selection } from "$components/icons";
import SelectionToolTrait from "$components/canvas/tools/SelectionToolTrait.svelte";
import type { ComponentType } from "svelte";
import { I2PointRect, IFreehand } from "$components/icons/presets";
import { SnapVertex } from "$components/icons/snapping";

export class SprotSelectionTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "selection";
        const id = SprotActions.ToolSelection;
        const kind = SprotToolKind.SelectionTool;
        const icon = Selection;
        const shortkey = "S";
        super(name, id, kind, icon, shortkey);
        
        this.toolsPanel = [ SelectionToolTrait ];
        this.toolSet = SprotToolSet.SprotSelectionTool;
        this.active = true;
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return I2PointRect;
            case 2:
                return SnapVertex;
            case 3:
                return IFreehand;
        
            default:
                return this.icon;
        }
    }
}
