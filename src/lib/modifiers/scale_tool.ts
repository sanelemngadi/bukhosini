import { SprotActions, SprotToolKind } from "$lib/types";
import { 
    SprotAppViewController, SprotModifierToolSet, SprotSelectionWrapper
} from "$wasm/sprot_app";
import { ScalePanel } from "$components/canvas/toplevels";
// import { SprotCanvasTool } from "$lib/tools/base";
import { SprotCanvasModifierTool } from "./base";
import type { SprotOption } from "$lib/utils";
import {  Scale } from "$components/icons/modifiers";

export class SprotScaleTool extends SprotCanvasModifierTool {

    constructor() {
        const name = "Scale";
        const id = SprotActions.ToolScale;
        const kind = SprotToolKind.ModifierTool;
        const icon = Scale;
        const shortkey = "Z";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = ScalePanel ;
        this.presets = [];
    }

    
    init(app: SprotAppViewController): boolean { 
        app.set_modifier_tool(SprotModifierToolSet.SprotScaleTool);
        return false;
    }
}
