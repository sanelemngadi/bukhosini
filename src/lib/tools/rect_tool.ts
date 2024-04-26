import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { Rect } from "$components/icons";
import { DrawingPanel } from "$components/canvas/toplevels";

interface SprotTSRectProps {
    expand_from_center: boolean,

    inflate: {
        fixed_ratio: string | "1:1",
        fixed_width: number,
        fixed_height: number,
        fixed_size: number,
    },

    roundedRect: number | null, // give radius

    guides: {
        diagonalLines: boolean,
        quadrantLines: boolean,
        boundingBox: boolean, // when drawing a line, or circle
    }
}

export class SprotRectTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "rectangle";
        const id = SprotActions.ToolRectangle;
        const kind = SprotToolKind.DrawingTool;
        const icon = Rect;
        const shortkey = "R";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = DrawingPanel ;
        this.toolSet = SprotToolSet.SprotRectTool;
    }
}
