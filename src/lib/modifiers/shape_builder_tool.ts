import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "$lib/tools/base";
import type { ComponentType } from "svelte";
import { IShapingExclude, IShapingIntersect, IShapingTrim, IShapingUnion } from "$components/icons/presets";

export class SprotShapeBuilderTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;


    constructor() {
        const name = "Shape Builder";
        const id = SprotActions.ToolShapeBulder;
        const kind = SprotToolKind.ModifierTool;
        const icon = IShapingUnion;
        const shortkey = "P";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotShapeBuilderTool;
        // this.toolsPanel = [ AlignmentToolTrait ];
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return IShapingUnion;
            case 2:
                return IShapingTrim;
            case 3:
                return IShapingIntersect;
            case 4:
                return IShapingExclude;
        
            default:
                return this.icon;
        }

    }
}
