import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Ruler } from "$components/icons";
import { IMeasureAngle, IMeasureDirection, IMeasureDistance, IMeasureTraverse } from "$components/icons/presets";
import type { ComponentType } from "svelte";

export class SprotMeasureTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "measure";
        const id = SprotActions.ToolMeasure;
        const kind = SprotToolKind.StandardTool;
        const icon = Ruler;
        const shortkey = "M";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotMeasureTool;
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return IMeasureTraverse;
            case 2:
                return IMeasureDistance;
            case 3:
                return IMeasureDirection;
            case 4:
                return IMeasureAngle;
        
            default:
                return this.icon;
        }
    }
}
