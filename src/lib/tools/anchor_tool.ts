import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { SnapVertex } from "$components/icons/snapping";
import type { ComponentType } from "svelte";
import { IAnchorAdd, IAnchorMove, IAnchorRemove } from "$components/icons/presets";

export class SprotAnchorTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Anchor";
        const id = SprotActions.ToolAnchor;
        const kind = SprotToolKind.SelectionTool;
        const icon = SnapVertex;
        const shortkey = "S";
        super(name, id, kind, icon, shortkey);

        this.toolSet = SprotToolSet.SprotAnchorTool;

        this.active = true;
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return IAnchorMove;
            case 2:
                return IAnchorAdd;
            case 3:
                return IAnchorRemove;
        
            default:
                return this.icon;
        }
    }
}
