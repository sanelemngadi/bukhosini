import { SprotClientCursor, mouseInteraction } from "$lib/cursor";
import type { SprotActions, SprotToolKind } from "$lib/types";
import { None,Some, SomeFromUnknown, SprotOption } from "$lib/utils";
import { SprotCanvasMessages, SprotPoint, 
    SprotSelectionWrapper, 
    SprotToolInterface, SprotToolSet, type SprotAppViewController } from "$wasm/sprot_app";
import type { ComponentType } from "svelte";

export abstract class SprotCanvasTool {
    public active: boolean;
    public panelComponent: ComponentType | null;
    public toolsPanel: ComponentType | null;
    // public selection: SprotSelectionWrapper;
    public toolInterface: SprotOption<SprotToolInterface>;
    public abstract toolSet: SprotToolSet;
    private _inflate: boolean;
    private _constraints: boolean;
    private _predicatePreset: SprotOption<(tool: SprotToolInterface) => void>;

    constructor(
        public name: string, 
        public id: SprotActions, 
        public kind: SprotToolKind,
        public icon: ComponentType, 
        public shortkey: string | null = null) {
            this.active = false;
            this.panelComponent = null;
            this.toolsPanel = null;
            // this.presets = [];
            // this.selection = SprotSelectionWrapper.empty();

        this.toolInterface = None;
        this._predicatePreset = None;
        this._inflate = false;
        this._constraints = false;
    }

    init(app: SprotAppViewController): boolean {
        let preset = SomeFromUnknown(app.set_action_tool(this.toolSet));
        let initialized: boolean = false;

        preset.Some(prst => {
            this.toolInterface = Some(prst);
            initialized = true;
            // console.log(prst.get_presets().map(inter => inter.get_name()));

            this._predicatePreset.Some(predicate => {
                predicate(prst);
                // console.log("there is a predicated");                
            });
        })
        .None(() => {
            this.toolInterface = None;
            initialized = false;
        });

        return initialized;
    }

    set inflate(app: SprotAppViewController) { 
        this._inflate = !this._inflate;
        app.on_event(SprotCanvasMessages.Infate); 
    }

    get inflate(): boolean { return this._inflate; }

    set constraints(app: SprotAppViewController) { 
        this._constraints = !this._constraints; 
        app.on_event(SprotCanvasMessages.Infate); 
    }
    get constraints(): boolean { return this._constraints; }

    setActionPreset(app: SprotAppViewController, id: number) {
        app.set_action_preset(this.toolSet, id);

        // console.log("toolset:/ ", this.toolSet, " preset: ", id);
        
    }

    onSetTool(predicate: (tool: SprotToolInterface) => void) {
        this._predicatePreset = Some(predicate);
        // console.log("some predicate");
        
    }

    // abstract onInit(app: SprotAppViewController, tool: SprotToolSet): SprotOption<SprotToolInterface>; // was the tool initialized?

    setInterface(inter: SprotToolInterface) {
        this.toolInterface = Some(inter);
    }

    //data: any // this is the data inside the tool, for example in selection tool this is a selection
    // in rect tool this is rect, in line tool this is the tool inside the tool.
    onMouseDown(app: SprotAppViewController, button: number ): SprotClientCursor {
        let message: SprotCanvasMessages = SprotCanvasMessages.MouseLeftDown;

        switch (button) {
            case 0:
                message = SprotCanvasMessages.MouseLeftDown;                
                break;
            case 1:
                message = SprotCanvasMessages.MouseMiddleDown;
                break;
            case 2:
                message = SprotCanvasMessages.MouseRightDown;
                break;
        
            default:
                break;
        }

        // this.selection = app.on_event(message) || null;
        app.on_event(message);

        return mouseInteraction(app.mouse_interaction());
    }

    onMouseUp(app: SprotAppViewController, button: number): SprotClientCursor {
        let message: SprotCanvasMessages = SprotCanvasMessages.MouseLeftUp;

        switch (button) {
            case 0:
                message = SprotCanvasMessages.MouseLeftUp;                
                break;
            case 1:
                message = SprotCanvasMessages.MouseMiddleUp;
                break;
            case 2:
                message = SprotCanvasMessages.MouseRightUp;
                break;
        
            default:
                break;
        }

        app.on_event(message);
        // this.selection = app.on_event(message) || null;

        return mouseInteraction(app.mouse_interaction());
    }

    onMouseMove(app: SprotAppViewController, point: SprotPoint): SprotClientCursor {
        app.on_event(SprotCanvasMessages.MouseMove, point);

        return mouseInteraction(app.mouse_interaction());
    }


    onWheel(app: SprotAppViewController, delta: number): SprotClientCursor {
        app.on_wheel(delta);

        return mouseInteraction(app.mouse_interaction());
    }    
}