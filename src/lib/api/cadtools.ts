import { CopyParallelPanel, ExtendPanel } from "$components/canvas/toplevels";
import { ICompleteSquare } from "$components/icons";
import { CopyParallel, CopyToMouse, Extend, Meet, Trim } from "$components/icons/modifiers";
import { SprotCompleteSquareTool, SprotCopyTool, SprotExtendTool, SprotIntersectTool, SprotMeetTool } from "$lib/modifiers";
import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
import { SprotTrimTool } from "$lib/modifiers/trim_tool";
import { SprotActions, SprotToolKind, type SprotTool } from "$lib/types";

// export const cadTools: SprotTool[] = [ // each tool have presets as well

//   { 
//     name: "Copy To Mouse",  // you duplicate the current entity parallel
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolCopyToMouse, 
//     icon: CopyToMouse, 
//     kind: SprotToolKind.ModifierTool,
//     // panelComponent: CopyParallelPanel,
//   },
//   {
//     name: "Copy Parallel",  // you duplicate the current entity parallel
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolCopyParalell, 
//     icon: CopyParallel, 
//     kind: SprotToolKind.ModifierTool,
//     // panelComponent: CopyParallelPanel,
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
//     // panelComponent: ExtendPanel,
//   },
//   { 
//     name: "Meet", // here you join the ends of two lines
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolCompleteSquare, 
//     icon: Meet, 
//     kind: SprotToolKind.ModifierTool,// tools must have help
//   },
//   { 
//     name: "Complete Square", // here you join the ends of two lines
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolMeet, 
//     icon: ICompleteSquare, 
//     kind: SprotToolKind.ModifierTool,// tools must have help
//   },
// ]


export const cadTools:SprotCanvasModifierTool[] = [
  new SprotCopyTool(),
  new SprotTrimTool(),
  new SprotIntersectTool(),
  new SprotExtendTool(),
  new SprotMeetTool(),
  new SprotCompleteSquareTool(),
]
