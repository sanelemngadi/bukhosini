import type { SprotActions, SprotListButton, SprotToolKind } from "$lib/types";
import { None,Some, SprotOption } from "$lib/utils";
import { SprotCanvasMessages, SprotPoint,
    SprotStatusbarState,
    SprotToolInterface, SprotToolSet, type SprotAppViewController } from "$wasm/sprot_app";
import type { ComponentType } from "svelte";

export abstract class SprotCanvasTool {
    public active: boolean;
    public toolsPanel: ComponentType[];
    public toolInterface: SprotOption<SprotToolInterface>;
    public abstract toolSet: SprotToolSet;
    public isBusy: boolean;
    // public busy: boolean;
    public statusState: SprotStatusbarState | null;
    public presets:SprotListButton[];

    constructor(
        public name: string, 
        public id: SprotActions, 
        public kind: SprotToolKind,
        public icon: ComponentType, 
        public shortkey: string | null = null) {
            this.active = false;
            this.toolsPanel = [];

            this.toolInterface = None;
            this.statusState = null;
            this.isBusy = false;

            this.presets = [];
        }

    init(presets: SprotToolInterface): boolean {
        this.toolInterface = Some(presets);
        
        this.presets = presets.get_presets().map(p => {
            const pp: SprotListButton = {
                active: p.active,
                id: p.id,
                name: p.get_name(),
                icon: this.getIcon(p.id),
            }
            return pp;
        });
        // console.log("pre: ", this.presets.map(pr => pr.name));

        return true;
    }

    getIcon(preset_id: number): ComponentType {
        return this.icon;
    }

    setActionPreset(app: SprotAppViewController, id: number): SprotCanvasTool {
        this.presets =  app.set_action_preset(this.toolSet, id).get_presets().map(pre => {
            const l: SprotListButton = { active: pre.active, icon: this.getIcon(pre.id), id: pre.id, name: pre.get_name() };
            return l;
        });

        return this;
    }

    // setInterface(inter: SprotToolInterface) {
    //     this.toolInterface = Some(inter);
    // }

    onMouseDown(app: SprotAppViewController, button: number ) {
        let message: SprotCanvasMessages = SprotCanvasMessages.MouseLeftDown;

        switch (button) {
            case 0:
                message = SprotCanvasMessages.MouseLeftDown;                
                break;
            case 1:
                console.log("middle mouse down");
                
                message = SprotCanvasMessages.MouseMiddleDown;
                break;
            case 2:
                message = SprotCanvasMessages.MouseRightDown;
                break;
        
            default:
                break;
        }

        app.on_event(message);
    }

    onMouseUp(app: SprotAppViewController, button: number) {
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
    }

    onMouseMove(app: SprotAppViewController, point: SprotPoint) {
        // use lodash to reduce the amount of calls occurring here
        app.on_event(SprotCanvasMessages.MouseMove, point);
        

        // console.log(this.statusState.get_label());
        
        // this.busy = app.is_busy();.
    }


    // onWheel(app: SprotAppViewController, delta: number) {
    //     // use lodash to reduce the amount of calls occurring here
    //     // do not use delta from mouse instead use static delta
    //     app.on_wheel(delta);
    // }    
}


/*
More tools: 

Locate Tool -line planet gis locate features - use to locate the features using attributes line labels etx
Convert tools - convert lines to polygon, polygon to lines, rect to lines, ellipse to rect, rect to ellipse
Survey board tool -> for adding moving, rotating and scaling a survey board
Crop tool = for clipping the entity


*/