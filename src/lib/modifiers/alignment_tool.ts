import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { Align } from "$components/icons";
import { SprotCanvasTool } from "$lib/tools/base";
import AlignmentToolTrait from "$components/canvas/tools/AlignmentToolTrait.svelte";
import type { ComponentType } from "svelte";
import { BottomVertical, CenterHorizontal, CenterVertical, LeftHorizontal, RightHorizontal, TopVertical } from "$components/icons/alignment";

export class SprotAlignmentTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;


    constructor() {
        const name = "Alignment";
        const id = SprotActions.ToolAlign;
        const kind = SprotToolKind.ModifierTool;
        const icon = Align;
        const shortkey = "A";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotAlignmentTool;
        this.toolsPanel = [ AlignmentToolTrait ];
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return LeftHorizontal;
            case 2:
                return CenterHorizontal;
            case 3:
                return RightHorizontal;
            case 4:
                return TopVertical;
            case 5:
                return CenterVertical;
            case 6:
                return BottomVertical;
        
            default:
                return this.icon;
        }
    }
}
