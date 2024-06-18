import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { Arrange, Selection } from "$components/icons";
import { SprotCanvasTool } from "$lib/tools/base";
import AlignmentToolTrait from "$components/canvas/tools/AlignmentToolTrait.svelte";
import type { ComponentType } from "svelte";
import { SendBack, SendBackward, SendForward, SendFront } from "$components/icons/arranging";
import { DistributeHorizontal, DistributeVertical } from "$components/icons/alignment";

export class SprotDistributionTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;


    constructor() {
        const name = "Distribution";
        const id = SprotActions.ToolDistribute;
        const kind = SprotToolKind.ModifierTool;
        const icon = Arrange;
        const shortkey = "A";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotDistributionTool;
        this.toolsPanel = [ AlignmentToolTrait ];
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return Selection;
            case 2:
                return DistributeHorizontal;
            case 3:
                return DistributeVertical;
        
            default:
                return this.icon;
        }
    }
}
