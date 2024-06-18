import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { Arrange, Selection } from "$components/icons";
import { SprotCanvasTool } from "$lib/tools/base";
import AlignmentToolTrait from "$components/canvas/tools/AlignmentToolTrait.svelte";
import type { ComponentType } from "svelte";
import { SendBack, SendBackward, SendForward, SendFront } from "$components/icons/arranging";

export class SprotArrangementTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;


    constructor() {
        const name = "Arrangement";
        const id = SprotActions.ToolArrange;
        const kind = SprotToolKind.ModifierTool;
        const icon = Arrange;
        const shortkey = "A";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotArrangementTool;
        this.toolsPanel = [ AlignmentToolTrait ];
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return Selection;
            case 2:
                return SendFront;
            case 3:
                return SendForward;
            case 4:
                return SendBackward;
            case 5:
                return SendBack;
        
            default:
                return this.icon;
        }
    }
}
