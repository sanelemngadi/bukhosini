import { SprotCursor } from "$wasm/sprot_app";


import { SprotClient  } from "../../src-wasm/src/sprot";
// import { togglePanels } from "./stores/panels-state";

export class SprotClientApplication extends SprotClient {
    constructor(name: string, age: number) {
        super();
    }
}

const cc: unknown = `default`;
// const cc: unknown = `url(${selectionCursor})`;

export enum SprotClientCursor {
    SprotCursorSelect = cc as SprotClientCursor,
    SprotCursorResizeHorizontal = "ew-resize",
    SprotCursorResizeVertical = "ns-resize",
    SprotCursorGrab = "grab",
    SprotCursorGrabbing = "grabbing",
    SprotCursorCrosshair = "crosshair",
    SprotCursorHand = "pointer",
    SprotCursorMove = "all-scroll",
    SprotCursorResizeEastWest = "ew-resize",
    SprotCursorResizeNESW = "nesw-resize",
    SprotCursorResizeNWSE = "nwse-resize",
    SprotCursorResizeNorthSouth = "ns-resize",
}


export const mouseInteraction = (cursor: SprotCursor): SprotClientCursor => {
    switch (cursor) {
        case SprotCursor.SprotCursorSelect:
            return SprotClientCursor.SprotCursorSelect;
        case SprotCursor.SprotCursorResizeHorizontal:
            return SprotClientCursor.SprotCursorResizeHorizontal;
        case SprotCursor.SprotCursorResizeVertical:
            return SprotClientCursor.SprotCursorResizeVertical;
        case SprotCursor.SprotCursorGrab:
            return SprotClientCursor.SprotCursorGrab;
        case SprotCursor.SprotCursorGrabbing:
            return SprotClientCursor.SprotCursorGrabbing;
        case SprotCursor.SprotCursorCrosshair:
            return SprotClientCursor.SprotCursorCrosshair;
        case SprotCursor.SprotCursorHand:
            return SprotClientCursor.SprotCursorHand;

        case SprotCursor.SprotCursorMove:
            return SprotClientCursor.SprotCursorMove;
        case SprotCursor.SprotCursorResizeEastWest:
            return SprotClientCursor.SprotCursorResizeEastWest;
        case SprotCursor.SprotCursorResizeNESW:
            return SprotClientCursor.SprotCursorResizeNESW;
        case SprotCursor.SprotCursorResizeNWSE:
            return SprotClientCursor.SprotCursorResizeNWSE;
        case SprotCursor.SprotCursorResizeNorthSouth:
            return SprotClientCursor.SprotCursorResizeNorthSouth;
    
        default:
            const overlap: never = cursor;
            return SprotClientCursor.SprotCursorSelect;
    }
}


export class SprotManageCanvasCursor {
    private _cursor: SprotClientCursor;

    constructor (private _canvas: HTMLElement) {
        this._cursor = SprotClientCursor.SprotCursorSelect;
    }

    cursor(cursor: SprotClientCursor) {
        if(cursor !== this._cursor) {
            this._cursor = cursor;
            this._canvas.style.cursor = cursor as string;
            
        }
    }

    getCursor(): SprotClientCursor {
        return this._cursor;
    }
}