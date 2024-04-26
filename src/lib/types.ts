import type { SprotEntity } from "$wasm/sprot_app";
import type { ComponentProps, ComponentType, SvelteComponent } from "svelte";
import type { SprotCanvasTool } from "./tools/base";
import type { SprotMenu } from "./menus/menus";
import type { SprotOption } from "./utils";

export interface SprotToolPreset {
    id: number,
    active: boolean,
    name: string,
}

export interface SprotTool {
    name: string,
    id: SprotActions,
    kind: SprotToolKind,
    active: boolean,
    shortkey: string,
    icon: ComponentType, // display on tools
    panelComponent?: ComponentType,
    presets?: SprotToolPreset[],
    //data: any // this is the data inside the tool, for example in selection tool this is a selection
    // in rect tool this is rect, in line tool this is the tool inside the tool.
    // onMouseDown(e: SprotEntity | null): void,
    selection?: boolean,
}

export type SprotToolSetting = Pick<SprotTool, "name" | "id" | "icon">;

export enum SprotActions {
    // arranging elements
    SendBack,
    SendBackward,
    SendFront,
    SendForward,

    // align group of elements - if a single item is selected
    // the alignment is only done against survey board
    AlignLeft,
    AlignRight,
    AlignTop,
    AlignBottom,
    AlignCenterHorizontal,
    AlignCenterVertical,
    AlignDistributeVertical,
    AlignDistributeHorizontal,

    // togging element state
    ToggleImage,
    ToggleElevation,
    ToggleName,
    ToggleCode,
    ToggleLocation,
    ToggleCAD,
    ToggleLockGeometry,
    ToggleInflate,

    // snapping
    SnapPoint,
    SnapLockLine,
    SnapVertex,
    SnapPerpendicular,
    SnapGrid,
    SnapAngle,
    SnapIntersection,

    // selection of canvas tools
    ToolSelection,
    ToolLine,
    ToolDimensions,
    ToolRectangle,
    ToolEllipse,
    ToolPen,
    ToolErasor,
    ToolPropertyPicker,
    ToolText,
    ToolLeaveMessage,
    ToolPan,
    ToolPolygon,
    ToolScale,
    ToolNavigate,
    ToolMeasure,
    ToolArrange,
    ToolAlign,
    ToolPencil,
    ToolArc,

    // selection of modifier tools
    ToolTrim,
    ToolCut,
    ToolIntersect,
    ToolMeet,
    ToolRotate,
    ToolExtend,
    ToolMove,
    ToolCopyParalell,
    ToolCopyToMouse,
    ToolCompleteSquare,
    ToolRemoveSelection,


    // selection presets
    SelectionPresetAll,

    // document actions
    Save,
    SaveAll,
    Open,
    New,
    ZoomIn,
    ZoomOut,
    Pan,
    OpanPanels,
    OutlineMode,

    PanelSwatches,
    PanelFonts,
    PanelProperties,
    PanelPatterns,
    PanelHistory,
    PanelLayers,
    PanelDocument,
    PanelDocumentation,
    PanelToolset,
    PanelFixSurfaces,
    PanelPrint,
    PanelTemplates,
    PanelDocumentSetup,
    PanelPresets,
    PanelContours,
    PanelTransformations,
    PanelPath,

    // Property Attributes
    AttributeTransformations,
    AttributeMargins,
    AttributeSurveyBoard,
    AttributeBackground,
    AttributeHatch,
    AttributeOutLine,

    TransformationScale,
    TransformationMove,
    TransformationRotate,

    MarginTop,
    MarginRight,
    MarginBottom,
    MarginLeft,

}

export enum SprotToolKind {
    DrawingTool, // takes nothing to draw
    ModifierTool, // needs selection to draw
    SelectionTool, // creates selection
    TextTool, // creates text such as message tool and text tool
    StandardTool, // does not require selection, like measure tool, scale, navigate, and pan tools
}
  

export interface SettingTools {
    name: string,
    type: "radio" | "check" | "button",
    active: boolean,
    icon: ComponentType,
    body: ComponentType,
    tools: SprotToolSetting[]
  }

export interface SprotToolGroup {
    name: string,
    tools: SprotCanvasTool | SprotCanvasTool[]
}


export interface SprotHelp {
    name: string, // name of action
    shortHelp: string | "Read?", // if there is no short help put ready?
    longHelp: string | "Love S.P.R.O.T?", // this is the documentation
    animation?: string, // this is going to be a GIF that explains this item
}

export interface Action {
    name: string,
    help: SprotHelp,
    id: number,
    accelerator?: string,
    addToHistory?: boolean,
}


export enum SprotCanvasTopLevels {
    DrawingPanel,
    ModifierPanel,
}


// tools data expected
interface TextToolData {
    // text: 
}

export interface SprotTSPoint {
    x: number, 
    y: number,
}

export interface SprotTSSize {
    w: number,
    h: number,
}

export interface SprotTSRect {
    pt: SprotTSPoint,
    sz: SprotTSSize,
}

export enum SprotMenuItemKind {
    SprotMenuButton,
    SprotMenuSeperator,
    SprotMenuSubmenu,
}

export enum SprotMenuItemState {
    SprotMenuIdle,
    SprotMenuHovered,
    SprotMenuDisabled,
    SprotMenuPressed,
}

export interface SprotMenuItem {
    id: number,
    name: string,
    // submenu: boolean,
    state: SprotMenuItemState,
    kind: SprotMenuItemKind,
    shortkey?: string,
    shortHelp: string,
    longHelp?: string,
    icon?: ComponentType,
    submenu?: SprotMenu,
    active: boolean,
}


export interface SprotMenubarItem {
    active: boolean,
    id: number,
    name: string,
    altKey: string,
    menu: SprotMenu,
}

export interface SprotListButton {
    id: SprotActions,
    name: string,
    icon: ComponentType,
    active: boolean,
}


export interface ISprotPanel {
    id: SprotActions,
    name: string,
    active: boolean,
    selected: boolean,
    component: ComponentType,
    icon?: ComponentType, // remove optional in future
}

export interface ISprotAccordionListItem {
    name: string,
    active: boolean,
    kind: SprotActions,
    listItem: ComponentType,
    listeItemProps: ComponentProps<SvelteComponent>;
}

export interface ISprotPropertyAttribute {
    id: number,
    name: string,
    active: boolean,
    maxListItems: number,
    attributes: ISprotAccordionListItem[],
    moreOptionsPane?: ComponentType,
}

export interface ISprotTopLevelProps {
    titleBar: SprotOption<string>,
    element: HTMLElement,
    position: "LEFT" | "TOP" | "BOTTOM" | "RIGHT"
}

export interface SprotTSColor {
    id: number,
    r: number,
    g: number, 
    b: number,
    alpha: number,
}

export interface SprotTSSelection {
    entities: SprotEntity[],
    is_none: boolean,
    is_single: boolean,
    is_group: boolean,  
    label: string,  
    rect: SprotTSRect,
}

export const NO_SELECTION: SprotTSSelection = {
    entities: [],
    is_group: false,
    is_none: true,
    is_single: false,
    label: "No Selection",
    rect: { pt: {x: 0, y: 0}, sz: {w: 0, h: 0}},
}