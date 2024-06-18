import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { Rotate } from "$components/icons/modifiers";
import { SprotCanvasTool } from "$lib/tools/base";
import type { ComponentType } from "svelte";
import { IRotateMirror } from "$components/icons/presets";

export class SprotRotateTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Rotate";
        const id = SprotActions.ToolRotate;
        const kind = SprotToolKind.ModifierTool;
        const icon = Rotate;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);
        
        this.toolSet = SprotToolSet.SprotRotateTool;
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 2:
                return IRotateMirror;
        
            default:
                return this.icon;
        }
    }
}
