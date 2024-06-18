import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Line } from "$components/icons";
import LineDrawToolTrait from "$components/canvas/tools/LineDrawToolTrait.svelte";
import type { ComponentType } from "svelte";
import { IContenousLine, ILineSegment, IPolyline } from "$components/icons/presets";

export class SprotLineTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "line";
        const id = SprotActions.ToolLine;
        const kind = SprotToolKind.DrawingTool;
        const icon = ILineSegment;
        const shortkey = "L";
        super(name, id, kind, icon, shortkey);
        
        this.toolSet = SprotToolSet.SprotLineTool;
        this.toolsPanel = [LineDrawToolTrait];
    }

    getIcon(preset_id: number): ComponentType {
        switch (preset_id) {
            case 1:
                return ILineSegment;
            case 2:
                return IContenousLine;
            case 3:
                return IPolyline;
        
            default:
                return this.icon;
        }
    }
}
