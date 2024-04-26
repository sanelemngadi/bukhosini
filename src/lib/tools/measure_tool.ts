import { SprotActions, SprotToolKind, type SprotTSPoint } from "$lib/types";
import { SprotAppViewController, SprotPoint, SprotToolSet } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { MeasurePanel } from "$components/canvas/toplevels";
import { Ruler } from "$components/icons";
import { None, Some, SomeFromUnknown, type SprotOption } from "$lib/utils";
import type { SprotClientCursor } from "$lib/cursor";

export class SprotMeasureTool extends SprotCanvasTool {
    private _mouse_start: SprotTSPoint;
    private _mouse_position: SprotTSPoint;
    private _predicate: SprotOption<() => void>;
    private _path_started: boolean;
    public toolSet: SprotToolSet;

    constructor() {
        const name = "measure";
        const id = SprotActions.ToolMeasure;
        const kind = SprotToolKind.StandardTool;
        const icon = Ruler;
        const shortkey = "M";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = MeasurePanel ;

        this._mouse_start = {x: 0, y: 0};
        this._mouse_position = {x: 0, y: 0};
        this._predicate = None;
        this._path_started = false;
        this.toolSet = SprotToolSet.SprotMeasureTool;
    }

    onMouseDown = (app: SprotAppViewController, button: number = 0): SprotClientCursor => {
        return super.onMouseDown(app, button);
    }

    onMouseMove(app: SprotAppViewController, point: SprotPoint): SprotClientCursor {
        return super.onMouseMove(app, point);

    }

    distance = (): number => {
        const dx = this._mouse_position.x - this._mouse_start.x;
        const dy = this._mouse_position.y - this._mouse_start.y;

        return Math.sqrt(dx* dx + dy*dy);
    }

    direction = (): number => {
        return 0;
    }

    onMesure = (predicate: () => void) => {
        this._predicate = Some(predicate);
    }
}
