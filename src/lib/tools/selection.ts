import { SprotActions, SprotToolKind } from "$lib/types";
import { SprotAppViewController, SprotSelectionWrapper, SprotToolSet, type SprotEntity } from "$wasm/sprot_app";
import { SprotCanvasTool } from "./base";
import { None, type SprotOption } from "$lib/utils";
import { Selection } from "$components/icons";
import { SelectionPanel } from "$components/canvas/toplevels";
import { type SprotClientCursor } from "$lib/cursor";
import SelectionOperations from "$components/canvas/toplevels/SelectionOperation.svelte";

interface Predicate {
    id: number,
    predicate: (entity: SprotSelectionWrapper) => void
}

export class SprotSelectionTool extends SprotCanvasTool {
    private _entity: SprotOption<SprotEntity[]>;
    private _callbacks: Predicate[];
    private _predicateIdCounter: number;
    public toolSet: SprotToolSet;

    constructor() {
        const name = "selection";
        const id = SprotActions.ToolSelection;
        const kind = SprotToolKind.SelectionTool;
        const icon = Selection;
        const shortkey = "S";
        super(name, id, kind, icon, shortkey);
        
        this.panelComponent = SelectionPanel ;
        this.toolsPanel = SelectionOperations;
        this.toolSet = SprotToolSet.SprotSelectionTool;
        
        this._entity = None;
        this._callbacks = [];
        this._predicateIdCounter = 1;

        this.active = true;
    }

    onMouseDown = (app: SprotAppViewController, button: number): SprotClientCursor => {
        let interaction = super.onMouseDown(app, button);

        return interaction;
    }

    onSelection = (predicate: (entity: SprotSelectionWrapper) => void) => {
        const event: Predicate = {
            id: this._predicateIdCounter++,
            predicate
        }

        this._callbacks.push(event);
    }

    onMouseUp(app: SprotAppViewController, button: number): SprotClientCursor {
        const interaction = super.onMouseUp(app, button);

        return interaction;
    }
}
