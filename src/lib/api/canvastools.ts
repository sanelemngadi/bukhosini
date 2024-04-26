import { 
  SprotDimensionsTool,
  SprotEllipseTool, SprotLineTool, SprotMeasureTool, SprotNavigateTool, SprotPanTool, 
  SprotPolygonTool, 
  SprotPropertyPickerTool, SprotRectTool, SprotSelectionTool, SprotTextTool,
  SprotZoomTool } from "$lib/tools";
import { SprotArcTool } from "$lib/tools/arc_tool";
import { SprotMessageTool } from "$lib/tools/message_tool";
import { SprotPenTool } from "$lib/tools/pen_tool";
import { SprotPencilTool } from "$lib/tools/pencil_tool";
import { type SprotToolGroup } from "$lib/types";

  
export const canvasTools: SprotToolGroup[] = [ // each tool have presets as well
    {
      name: "selections",
      tools: [new SprotSelectionTool(), new SprotPropertyPickerTool()],
    },
    {
      name: "Pens",
      tools: [new SprotPenTool(), new SprotPencilTool()],
    },
    {
      name: "shapes",
      tools: [ 
        new SprotRectTool(), new SprotLineTool(), new SprotArcTool,
        new SprotEllipseTool(), new SprotPolygonTool() 
      ],
    },
    {
      name: "typography",
      tools: [ new SprotTextTool, new SprotMessageTool() ],
    },
    {
      name: "ruler",
      tools: [new SprotMeasureTool(), new SprotDimensionsTool()],
    },
    {
      name: "explore",
      tools: [new SprotPanTool(), new SprotZoomTool(), new SprotNavigateTool() ],
    },
  ]
// export const canvasTools: SprotToolGroup[] = [ // each tool have presets as well
//     {
//       name: "selections",
//       tools: [
//         { 
//           name: "Selection", 
//           active: false, 
//           shortkey: "(S)", 
//           id: SprotActions.ToolSelection, 
//           icon: Selection, 
//           kind: SprotToolKind.SelectionTool,
//           panelComponent: SelectionPanel,
//           onMouseDown(e) {
            
//           },
//         },
//         { 
//           name: "Erasor", 
//           active: false, 
//           shortkey: "(E)", 
//           id: SprotActions.ToolErasor, 
//           icon: Erasor, 
//           kind: SprotToolKind.SelectionTool,
//           onMouseDown(e) {
            
//           }, 
//         },
//         { 
//           name: "Property Picker"
//           , active: false,
//            shortkey: "(P)", 
//            id: SprotActions.ToolPropertyPicker, 
//            icon: PropsPicker, 
//            kind: SprotToolKind.SelectionTool ,
//            onMouseDown(e) {
             
//            },
//           },
//       ],
//     },
//     {
//       name: "shapes",
//       tools: [
//         { 
//           name: "Rectangle", 
//           active: false, 
//           shortkey: "(R)", 
//           id: SprotActions.ToolRectangle, 
//           icon: Rect, 
//           kind: SprotToolKind.DrawingTool,
//           panelComponent: DrawingPanel,
//           onMouseDown(e) {
            
//           },
//         },
//         { 
//           name: "Line", 
//           active: false, 
//           shortkey: "(L)", 
//           id: SprotActions.ToolLine, 
//           icon: Line, 
//           kind: SprotToolKind.DrawingTool,
//           panelComponent: DrawingPanel,
//           onMouseDown(e) {
            
//           },
//         },
//         { 
//           name: "Ellispe", 
//           active: false, 
//           shortkey: "(E)", 
//           id: SprotActions.ToolEllipse, 
//           icon: Ellipse, 
//           kind: SprotToolKind.DrawingTool,
//           panelComponent: DrawingPanel,
//           onMouseDown(e) {
            
//           },
//         },
//       ],
//     },
//     {
//       name: "typography",
//       tools: [
//         { 
//           name: "Text", 
//           active: false, 
//           shortkey: "(H)", 
//           id: SprotActions.ToolText, 
//           icon: Typography, 
//           kind: SprotToolKind.TextTool ,
//           panelComponent: DrawingText,
//           onMouseDown(e) {
            
//           },
//         }, // we only have text (vert or horizontal text is going to be presets)
//         { 
//           name: "Message", 
//           active: false, 
//           shortkey: "(M)", 
//           id: SprotActions.ToolLeaveMessage, 
//           icon: CanvasMessage, 
//           kind: SprotToolKind.TextTool,
//           onMouseDown(e) {
            
//           }, 
//         },
//       ],
//     },
//     {
//       name: "ruler",
//       tools: { 
//         name: "measure", 
//         active: false, 
//         shortkey: "(M)", 
//         id: SprotActions.ToolMeasure, 
//         icon: Ruler, 
//         kind: SprotToolKind.StandardTool ,
//         panelComponent: MeasurePanel,
//         onMouseDown(e) {
          
//         },
//         presets: [
//           { name: "Distance", },
//           { name: "Area", },
//           { name: "Volume", },
//           { name: "Perimeter", },
//         ]
//       }
//     },
//     {
//       name: "explore",
//       tools: [
//         { 
//           name: "pan", 
//           active: false, 
//           shortkey: "(H)", 
//           id: SprotActions.ToolPan, 
//           icon: Hand, 
//           kind: SprotToolKind.StandardTool,
//           onMouseDown(e) {
//             console.log("entity: ", e);
//           }, 
//         }, // we only have text (vert or horizontal text is going to be presets)
//         { 
//           name: "scale", 
//           active: false, 
//           shortkey: "(M)", 
//           id: SprotActions.ToolScale, 
//           icon: Zoom, 
//           kind: SprotToolKind.StandardTool,
//           onMouseDown(e) {
            
//           }, 
//         },
//         { 
//           name: "navigate", 
//           active: false, 
//           shortkey: "(M)", 
//           id: SprotActions.ToolNavigate, 
//           icon: Selection, 
//           kind: SprotToolKind.StandardTool,
//           onMouseDown(e) {
            
//           }, 
//         },
//       ],
//     },
//   ]