import { CopyParallelPanel, ExtendPanel, MovePanel, RotatePanel } from "$components/canvas/toplevels";
import ScalePanel from "$components/canvas/toplevels/ScalePanel.svelte";
import { CopyParallel, CopyToMouse, Extend, Meet, Move, Rotate, Scale, Trim } from "$components/icons/modifiers";
import { SprotAlignmentTool, SprotArrangmentTool, SprotCADTool, SprotCompleteSquareTool, SprotExtendTool, SprotIntersectTool, SprotMeetTool, SprotMoveTool, SprotRotateTool, SprotScaleTool, SprotTransformationTool } from "$lib/modifiers";
import { SprotCanvasModifierTool } from "$lib/modifiers/base";
import { SprotCopyTool } from "$lib/modifiers/copy_tool";
import { SprotTrimTool } from "$lib/modifiers/trim_tool";
import { SprotActions, SprotToolKind, type SprotTool } from "$lib/types";

  
export const modifierTools: SprotCanvasModifierTool[] = [ // each tool have presets as well
  new SprotMoveTool(),
  // new SprotTransformationTool(),
  // new SprotArrangmentTool(),
  // new SprotAlignmentTool(),
  // new SprotCADTool(),
  new SprotRotateTool(),
  new SprotScaleTool(),
  new SprotCopyTool(),
  new SprotTrimTool(),
  new SprotIntersectTool(),
  new SprotMeetTool(),
  new SprotExtendTool(),
  new SprotCompleteSquareTool(),
]

// export const modifierTools: SprotTool[] = [ // each tool have presets as well

//   { 
//     name: "Copy Parallel",  // you duplicate the current entity parallel
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolCopyParalell, 
//     icon: CopyParallel, 
//     kind: SprotToolKind.ModifierTool,
//     panelComponent: CopyParallelPanel,
//   },
//   { 
//     name: "Trim", // you trim the lines that are joined together
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolTrim, 
//     icon: Trim, 
//     kind: SprotToolKind.ModifierTool,
//   },
//   { 
//     name: "Extend", // you extend one line with an give distance in a along the direction of the line
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolExtend, 
//     icon: Extend, 
//     kind: SprotToolKind.ModifierTool,
//     panelComponent: ExtendPanel,
//   },
//   { 
//     name: "Meet", // here you join the ends of two lines
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolMeet, 
//     icon: Meet, 
//     kind: SprotToolKind.ModifierTool,// tools must have help
//   },
// ]


// const isTrimmeable = (tool: SprotTool): boolean => {
//   return tool.id === SprotActions.ToolLine; // dont use tool but use entities
// }


// the modifier tool will hide the selection tool then do its thing when done then the selection can
// come back if its still the action tool

// when you done with modifier tool you have to click done to commit, the right click and escape should not work
// to commit changes