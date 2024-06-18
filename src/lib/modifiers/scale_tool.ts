import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotToolSet } from "$wasm/sprot_app";
import {  Scale } from "$components/icons/modifiers";
import { SprotCanvasTool } from "$lib/tools/base";

export class SprotScaleTool extends SprotCanvasTool {
    public toolSet: SprotToolSet;

    constructor() {
        const name = "Scale";
        const id = SprotActions.ToolScale;
        const kind = SprotToolKind.ModifierTool;
        const icon = Scale;
        const shortkey = "Z";
        super(name, id, kind, icon, shortkey);
        
        this.toolSet = SprotToolSet.SprotScaleTool;
    }
}
