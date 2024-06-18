import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { ICompleteSquare } from "$components/icons";
import { SprotCanvasTool } from "$lib/tools/base";
import type { ComponentType } from "svelte";
import { ToggleCad } from "$components/icons/toggling";
import { Extend, Meet, Trim } from "$components/icons/modifiers";
import { SnapIntersection } from "$components/icons/snapping";

export class SprotLineBuilderTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;


    constructor() {
        const name = "Line Builder";
        const id = SprotActions.ToolLineBulder;
        const kind = SprotToolKind.ModifierTool;
        const icon = ToggleCad;
        const shortkey = "P";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotLineBuilderTool;
        // this.toolsPanel = [ AlignmentToolTrait ];
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return Trim;
            case 2:
                return Extend;
            case 3:
                return SnapIntersection;
            case 4:
                return Meet;
            case 5:
                return ICompleteSquare;
        
            default:
                return this.icon;
        }

    }
}
