import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Rect } from "$components/icons";
// import { DrawingPanel } from "$components/canvas/toplevels";
import DrawingsConstraitsTrait from "$components/canvas/tools/DrawingsConstraitsTrait.svelte";
import type { ComponentType } from "svelte";
import { I2PointRect, I3PointRect } from "$components/icons/presets";

export class SprotRectTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Rectangle";
        const id = SprotActions.ToolRectangle;
        const kind = SprotToolKind.DrawingTool;
        const icon = Rect;
        const shortkey = "R";
        super(name, id, kind, icon, shortkey);
        
        // this.panelComponent = DrawingPanel ;
        this.toolSet = SprotToolSet.SprotRectTool;
        this.toolsPanel = [DrawingsConstraitsTrait];
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return I2PointRect;
            case 2:
                return I3PointRect;
        
            default:
                return this.icon;
        }
    }
}
