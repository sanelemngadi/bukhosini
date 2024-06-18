// import { SprotActions, SprotToolKind } from "$lib/types";
// import { SprotToolSet } from "$wasm/sprot_app";
// import { SprotCanvasTool } from "$lib/tools/base";
// import { FilletToolIcon } from "$components/icons/tools";
// import type { ComponentType } from "svelte";
// import { IChamperFillet } from "$components/icons/presets";

// export class SprotFilletTool extends SprotCanvasTool {
//     public toolSet: SprotToolSet;

//     constructor() {
//         const name = "Fillet";
//         const id = SprotActions.ToolFillet;
//         const kind = SprotToolKind.ModifierTool;
//         const icon = FilletToolIcon;
//         const shortkey = "X";
//         super(name, id, kind, icon, shortkey);
//         this.toolSet = SprotToolSet.SprotFilletTool;
//     }

//     getIcon(preset_id: number): ComponentType {
//         switch (preset_id) {
//             case 2:
//                 return IChamperFillet;
        
//             default:
//                 return this.icon;
//         }
//     }
// }
