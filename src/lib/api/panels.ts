// import History as HistoryIcon from "$components/icons/History.svelte";
    import { History as HistoryIcon, Line } from "$components/icons";
    import { Rotate } from "$components/icons/modifiers";
    import ColorPanelIcon from "$components/icons/panels/ColorPanelIcon.svelte";
    import ContoursPanelIcon from "$components/icons/panels/ContoursPanelIcon.svelte";
    import DocumentationIcon from "$components/icons/panels/DocumentationIcon.svelte";
    import FontsPanelIcon from "$components/icons/panels/FontsPanelIcon.svelte";
    import LayersPanelIcon from "$components/icons/panels/LayersPanelIcon.svelte";
    import PatternsPanelIcon from "$components/icons/panels/PatternsPanelIcon.svelte";
    import PropertiesPanelIcon from "$components/icons/panels/PropertiesPanelIcon.svelte";
    import SurfacesPanelIcon from "$components/icons/panels/SurfacesPanelIcon.svelte";
    import TemplatesPanelIcon from "$components/icons/panels/TemplatesPanelIcon.svelte";
    import ToolboxPanelIcon from "$components/icons/panels/ToolboxPanelIcon.svelte";
    import { PathToolIcon } from "$components/icons/tools";
    import { 
        Contours, Documentation, FixSurface, Fonts, 
        History, Layers, Patterns, Properties, 
        Swatches, Templates, Toolset 
    } from "$components/panels";
    import DefinePath from "$components/panels/path/DefinePath.svelte";
    import Transform from "$components/panels/transformations/Transform.svelte";
    import { SprotActions, type ISprotPanel } from "$lib/types";


export const panels: ISprotPanel[] = [
    { 
        id: SprotActions.PanelProperties, 
        name: "Properties", 
        active: false,
        selected: true,
        component: Properties,
        icon: PropertiesPanelIcon, 
    }, // document here
    // { 
    //     id: SprotActions.PanelLayers, 
    //     name: "Layers", 
    //     active: false,
    //     selected: true,
    //     component: Layers,
    //     icon: LayersPanelIcon,
    // },
    { 
        id: SprotActions.PanelFixSurfaces, 
        name: "Fix Surfaces", 
        active: false,
        selected: true,
        component: FixSurface, 
        icon: SurfacesPanelIcon,
    },
    // { 
    //     id: SprotActions.PanelHistory, 
    //     name: "History", 
    //     active: false,
    //     selected: true,
    //     component: History,
    //     icon: HistoryIcon, 
    // },
    // { 
    //     id: SprotActions.PanelTransformations, 
    //     name: "Transformations", 
    //     active: false,
    //     selected: true,
    //     component: Transform,
    //     icon: Rotate, 
    // },
    { 
        id: SprotActions.PanelPath, 
        name: "Path", 
        active: false,
        selected: true,
        component: DefinePath,
        icon: PathToolIcon, 
    },
    { 
        id: SprotActions.PanelDocumentation, 
        name: "Documentation", 
        active: false,
        selected: true,
        component: Documentation, 
        icon: DocumentationIcon,
    }, 
    { 
        id: SprotActions.PanelToolset, 
        name: "Tool Options", 
        active: false,
        selected: true,
        component: Toolset, 
        icon: ToolboxPanelIcon,
    },
    { 
                id: SprotActions.PanelPatterns, 
                name: "Patterns", 
                active: false,
                selected: true,
                component: Patterns, 
                icon: PatternsPanelIcon,
    }, 
    // { 
    //     id: SprotActions.PanelPrint, 
    //     name: "Print", 
    //     active: false,
    //     selected: true,
    // },
    { 
        id: SprotActions.PanelTemplates, 
        name: "Templates", 
        active: false,
        selected: true,
        component: Templates, 
        icon: TemplatesPanelIcon,
    },
    // { 
    //     id: SprotActions.PanelPresets, 
    //     name: "Presets", 
    //     active: false,
    //     selected: true,
    //     component: Presets, 
    //     icon: Line
    // },
    { 
        id: SprotActions.PanelSwatches, 
        name: "Color Settings", 
        active: false,
        selected: true,
        component: Swatches,
        icon: ColorPanelIcon,
    },
    { 
        id: SprotActions.PanelFonts, 
        name: "Fonts", 
        active: false,
        selected: true,
        component: Fonts,
        icon: FontsPanelIcon,
    },
    // { 
    //     id: SprotActions.PanelDocumentSetup, 
    //     name: "Document Setup", 
    //     active: false,
    //     selected: true,
    // },
    { 
        id: SprotActions.PanelContours, 
        name: "Contours", 
        active: false,
        selected: true,
        component: Contours,
        icon: ContoursPanelIcon,
    },
]


/**
 * panels Settings
 // provide a drag and drop interface from panels to the canvas;
 // For text write text from the panel and allow the user to whether drag the text to position
 // or define position

more panels:
1: Step and repeat
    - here we define the offset distance vertical and horizontally and apply for a the current selection
    - so the settings:
        Offset - distance and direction (Up, Down, Left and Right)
        number of coppies
        
        space between objects - this option distribute the space between newly created objects
        up or down for vertical and left or right for horizontal


2: Alignment and Distribution
3: Search
4: Find and replace
5: Coordinates (XY) -
    this panel is used to view the coordinates of the current selection

6: Transform
    this panel will allow you to make transformations (scale, rotate, move) for
    the current selection;

7: CAD Panel - (show images as to how the operation works)
    this panel does the trims, cuts, meet, etc (add Weld for meeting shapes
        (leave original source object)
        (leave original target object) - these options are to say create
        coppies do not trim the object or source
    - select object CAD for lines or shape builder

8: Text - for editing text

packages\excalidraw\renderer\renderElement.ts

 */