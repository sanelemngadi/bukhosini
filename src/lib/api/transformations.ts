import { CopyParallelPanel, ExtendPanel } from "$components/canvas/toplevels";
import { ICompleteSquare } from "$components/icons";
import { CopyParallel, Extend, Meet, Move, Rotate, Scale, Trim } from "$components/icons/modifiers";
import { SprotMoveTool, SprotRotateTool, SprotScaleTool } from "$lib/modifiers";
import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
import { SprotActions, SprotToolKind, type SprotTool } from "$lib/types";

// export const transformationTools: SprotTool[] = [ // each tool have presets as well

//   { 
//     name: "Move",  // you duplicate the current entity parallel
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolMove , 
//     icon: Move, 
//     kind: SprotToolKind.ModifierTool,
//     // panelComponent: CopyParallelPanel,
//   },
//   { 
//     name: "Scale", // you trim the lines that are joined together
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolScale, 
//     icon: Scale, 
//     kind: SprotToolKind.ModifierTool,
//   },
//   { 
//     name: "Rotate", // you extend one line with an give distance in a along the direction of the line
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolRotate, 
//     icon: Rotate, 
//     kind: SprotToolKind.ModifierTool,
//     // panelComponent: ExtendPanel,
//   },
// ]


export const transformationTools:SprotCanvasModifierTool[] = [
    new SprotMoveTool(),
    new SprotScaleTool(),
    new SprotRotateTool(),
]