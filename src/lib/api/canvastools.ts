import { 
  SprotAlignmentTool, SprotArrangementTool, 
  SprotDistributionTool, SprotMoveTool, 
  SprotRotateTool, SprotScaleTool 
} from "$lib/modifiers";
import { SprotLineBuilderTool } from "$lib/modifiers/line_builder_tool";
import { SprotShapeBuilderTool } from "$lib/modifiers/shape_builder_tool";
import { 
  SprotDimensionsTool,
  SprotEllipseTool, SprotLineTool, SprotMeasureTool, SprotNavigateTool, SprotPanTool, 
  SprotPolygonTool, 
  SprotPropertyPickerTool, SprotRectTool, SprotSelectionTool, SprotTextTool,
  SprotZoomTool } from "$lib/tools";
import { SprotAnchorTool } from "$lib/tools/anchor_tool";
import { SprotArcTool } from "$lib/tools/arc_tool";
import { SprotCommentsTool } from "$lib/tools/comments_tool";
import { SprotMessageTool } from "$lib/tools/message_tool";
import { SprotPenTool } from "$lib/tools/pen_tool";
import { SprotPencilTool } from "$lib/tools/pencil_tool";
import { type SprotToolGroup } from "$lib/types";

  
export const canvasTools: SprotToolGroup[] = [ // each tool have presets as well
    {
      id: 0,
      name: "Pick",
      active: false,
      featured: false,
      tools: [new SprotSelectionTool(), new SprotPropertyPickerTool(), new SprotAnchorTool()],
    },
    {
      id: 2,
      name: "Draw",
      active: false,
      featured: false,
      tools: [ 
        new SprotRectTool(), 
        new SprotLineTool(), 
        new SprotArcTool,
        new SprotEllipseTool(), 
        new SprotPolygonTool() 
      ],
    },
    {
      id: 4,
      name: "Transform",
      active: false,
      featured: false,
      tools: [ new SprotMoveTool(), new SprotScaleTool(), new SprotRotateTool(), ]
    },
    {
      id: 5,
      name: "Modify",
      active: false,
      featured: false,
      tools: [ 
        new SprotLineBuilderTool(),
        new SprotShapeBuilderTool(),
        
        new SprotAlignmentTool(),
        new SprotArrangementTool(),
        new SprotDistributionTool(),
      ]
    },
    {
      id: 6,
      name: "Annotate",
      active: false,
      featured: false,
      tools: [ new SprotTextTool(), new SprotCommentsTool(), new SprotMessageTool(), new SprotDimensionsTool() ]
    },
    {
      id: 8,
      name: "Navigate",
      active: false,
      featured: false,
      tools: [new SprotPanTool(), new SprotZoomTool(), new SprotNavigateTool() ],
    },
    {
      id: 1,
      name: "Pens",
      active: false,
      featured: true,
      tools: [new SprotPenTool(), new SprotPencilTool()],
    },
    {
      id: 3,
      name: "Information",
      active: false,
      featured: true,
      tools: [ new SprotMeasureTool() ],
    },
  ]
