import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { Move } from "$components/icons/modifiers";
import { SprotCanvasTool } from "$lib/tools/base";
import { IMoveBetweenPoints, IMoveHorizontalPoints, IMoveToPoint, IMoveVerticalPoints } from "$components/icons/presets";
import type { ComponentType } from "svelte";

export class SprotMoveTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Move";
        const id = SprotActions.ToolMove;
        const kind = SprotToolKind.ModifierTool;
        const icon = Move;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);
        this.toolSet = SprotToolSet.SprotMoveTool;
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return IMoveToPoint;
            case 2:
                return IMoveBetweenPoints;
            case 3:
                return IMoveHorizontalPoints;
            case 4:
                return IMoveVerticalPoints;
        
            default:
                return this.icon;
        }
    }
}
