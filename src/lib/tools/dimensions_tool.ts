import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { DimensionsIcon } from "$components/icons";
import DimensionsToolTrait from "$components/canvas/tools/DimensionsToolTrait.svelte";
import type { ComponentType } from "svelte";
import { IDimensionsAngular, IDimensionsAuto, IDimensionsDirection, IDimensionsDistance, IDimensionsLinear, IDimensionsParallel } from "$components/icons/presets";

export class SprotDimensionsTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Dimentions";
        const id = SprotActions.ToolDimensions;
        const kind = SprotToolKind.StandardTool;
        const icon = DimensionsIcon;
        const shortkey = "D";
        super(name, id, kind, icon, shortkey);
        
        this.toolSet = SprotToolSet.SprotDimensionsTool;
        this.toolsPanel = [DimensionsToolTrait];

        /*
        Dimensions:
        1. Parallel Dimensions
        2. Vertical 
        3. Horizontal
        4. Angular
        5. Selection
        */
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return IDimensionsAuto;
            case 2:
                return IDimensionsParallel;
            case 3:
                return IDimensionsLinear;
            case 4:
                return IDimensionsAngular;
            case 5:
                return IDimensionsDirection;
            case 6:
                return IDimensionsDistance;
        
            default:
                return this.icon;
        }
    }
}
