import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Ellipse } from "$components/icons";
import DrawingsConstraitsTrait from "$components/canvas/tools/DrawingsConstraitsTrait.svelte";
import type { ComponentType } from "svelte";
import { I3PointEllipse } from "$components/icons/presets";

export class SprotEllipseTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "ellipse";
        const id = SprotActions.ToolEllipse;
        const kind = SprotToolKind.DrawingTool;
        const icon = Ellipse;
        const shortkey = "E";
        super(name, id, kind, icon, shortkey);

        this.toolsPanel = [DrawingsConstraitsTrait];
        this.toolSet = SprotToolSet.SprotEllipseTool;
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 2:
                return I3PointEllipse;
        
            default:
                return this.icon;
        }
    }
}
