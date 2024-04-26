import { AlignmentPanel, ArrangementPanel, CadPanel, TransformationPanel } from "$components/canvas/toplevels";
import { Align, Arrange } from "$components/icons";
import { Move } from "$components/icons/modifiers";
import { ToggleCad } from "$components/icons/toggling";
import { SprotAlignmentTool, SprotArrangmentTool, SprotCADTool, SprotTransformationTool } from "$lib/modifiers";
import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
import { SprotRemoveSelectionTool } from "$lib/modifiers/remove_selection_tool";
import { SprotActions, SprotToolKind, type SprotTool } from "$lib/types";

// export const selectionOperations: SprotTool[] = [ // each tool have presets as well

//   { 
//     name: "Transformations",  // you duplicate the current entity parallel
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolMove , 
//     icon: Move, 
//     kind: SprotToolKind.StandardTool,
//     panelComponent: TransformationPanel,
//   },
//   { 
//     name: "Arrange", // you trim the lines that are joined together
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolArrange, 
//     icon: Arrange, 
//     kind: SprotToolKind.StandardTool,
//     panelComponent: ArrangementPanel
//   },
//   { 
//     name: "Align", // you extend one line with an give distance in a along the direction of the line
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolAlign, 
//     icon: Align, 
//     kind: SprotToolKind.StandardTool,
//     panelComponent: AlignmentPanel,
//   },
//   { 
//     name: "CAD", // you extend one line with an give distance in a along the direction of the line
//     active: false, 
//     shortkey: "(E)", 
//     id: SprotActions.ToolRotate, 
//     icon: ToggleCad, 
//     kind: SprotToolKind.StandardTool,
//     panelComponent: CadPanel,
//   },
// ]


export const selectionOperations: SprotCanvasModifierTool[] = [ // each tool have presets as well
  // new SprotMoveTool(),
  new SprotTransformationTool(),
  new SprotArrangmentTool(),
  new SprotAlignmentTool(),
  new SprotCADTool(),
  new SprotRemoveSelectionTool(),
  // new SprotRotateTool(),
  // new SprotScaleTool(),
  // new SprotCopyTool(),
  // new SprotTrimTool(),
  // new SprotIntersectTool(),
  // new SprotMeetTool(),
  // new SprotExtendTool(),
]

