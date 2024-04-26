import type { SprotTSSelection } from "$lib/types";
import { ESprotKeyState, SprotEntity, SprotPoint, SprotSelectionWrapper, type SprotAppViewController } from "$wasm/sprot_app";
import { SprotManageCanvasCursor } from "../cursor";
import { SprotClientKeyboard } from "../events/keyboard";
import { getElementScreenCoordinates } from "../helper/point";
import type { SprotCanvasModifierTool } from "../modifiers/base";
import { clearModifierTools } from "../stores";
import type { SprotCanvasTool } from "../tools/base";
import type { SelectionOption } from "../utils";

interface Point {
    x: number,
    y: number,
}

interface Line {
    a: Point,
    b: Point
}

export class SprotMainCanvas {
    private _mouse_position: Point;
    private _mouse_start: Point;
    // private _lines: Line[] = [];
    private _pathStarted: boolean;
    private _cursor: SprotManageCanvasCursor;
    private _targetTool: SprotCanvasTool | null;
    private _modifierTool: SprotCanvasModifierTool | null;
    private _keydown: boolean;
    private _mouseover: boolean;

    constructor(
        private _canvas: HTMLCanvasElement, 
        private _appState: SprotAppViewController) {
        this._mouse_position = {x: 0, y: 0};
        this._mouse_start = {x: 0, y: 0};
        this._pathStarted = false;

        this._cursor = new SprotManageCanvasCursor(_canvas);
        this._targetTool = null;
        this._modifierTool = null;
        this._keydown = false;
        this._mouseover = false;

        this.bind();

    }

    bind(): SprotMainCanvas {
        // window.addEventListener("resize", onResize);
        
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));


        /**
         * 
         * on:mousedown={onMouseDown}
                on:mouseup={onMouseUp}
                on:mousemove={onMouseMove} 
                on:mouseleave={onMouseLeave}
                on:mouseenter={onMouseEnter}   
                on:contextmenu|preventDefault={() => {}}
                on:wheel={onWheel}
                on:dragover={() => console.log("drop over canvas")}>
         */

        this._canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
        this._canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
        this._canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
        this._canvas.addEventListener("mouseenter", this.onMouseEnter.bind(this));
        this._canvas.addEventListener("mouseleave", this.onMouseLeave.bind(this));
        this._canvas.addEventListener("contextmenu", this.#onContext.bind(this));
        this._canvas.addEventListener("wheel", this.onWheel.bind(this));
        return this;
    }

    unbind(): SprotMainCanvas {
        // window.removeEventListener("resize", this.onResize.b/);
        window.removeEventListener("keydown", this.onKeyDown.bind(this));
        window.removeEventListener("keyup", this.onKeyUp.bind(this));

        this._canvas.removeEventListener("mousedown", this.onMouseDown.bind(this));
        this._canvas.removeEventListener("mousemove", this.onMouseMove.bind(this));
        this._canvas.removeEventListener("mouseup", this.onMouseUp.bind(this));
        this._canvas.removeEventListener("mouseenter", this.onMouseEnter.bind(this));
        this._canvas.removeEventListener("mouseleave", this.onMouseLeave.bind(this));
        this._canvas.removeEventListener("contextmenu", this.#onContext.bind(this));
        this._canvas.removeEventListener("wheel", this.onWheel.bind(this));
        return this;
    }

    #onContext = (e: any) =>  {
        e.preventDefault();
    }

    setAppController(appState: SprotAppViewController): SprotMainCanvas {
        this._appState = appState;
        return this;
    }

    setActionTool(tool: SprotCanvasTool): SprotMainCanvas {
        this._targetTool = tool;
        return this;
    }

    setActionModifierTool(tool: SprotCanvasModifierTool | null): SprotMainCanvas {
        this._modifierTool = tool;
        return this;
    }
        
    onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const offset = getElementScreenCoordinates(this._canvas);
        let x = (clientX  - offset.x)* devicePixelRatio; 
        let y = (clientY - offset.y) * devicePixelRatio;
        // let x = (clientX  - parentDiv.offsetLeft)* devicePixelRatio; 
        // let y = (clientY - parentDiv.offsetTop) * devicePixelRatio;
        this._mouse_position = { x, y };

        if (this._cursor) {
            let itemCursor = this._cursor.getCursor();

            if(this._targetTool && this._appState) {
                let pt = new SprotPoint(this._mouse_position.x, this._mouse_position.y);
                if(this._modifierTool) {
                    itemCursor = this._modifierTool.onMouseMove(this._appState, pt);
                } else {
                    itemCursor = this._targetTool.onMouseMove(this._appState, pt);
                }
            }       

            this._cursor.cursor(itemCursor);
        }
    }

    private onMouseDown = (e: MouseEvent) => {
        if(this._cursor) {
            let itemCursor = this._cursor.getCursor();

            if(this._targetTool && this._appState) {
                if(this._modifierTool) {
                    if(e.button === 2) {
                        itemCursor = this._modifierTool.onMouseDown(this._appState, e.button); // one last time then exit
                        clearModifierTools();
                    } else {
                        itemCursor = this._modifierTool.onMouseDown(this._appState, e.button); // one last time then exit
                    }
                } else {
                    itemCursor = this._targetTool.onMouseDown(this._appState, e.button);
                }
            }

            this._cursor.cursor(itemCursor);
        }
    }

    private onMouseUp = (e: MouseEvent) => {
        if (this._cursor) {
            let itemCursor = this._cursor.getCursor();

            if(this._targetTool && this._appState) {
                if(this._modifierTool) { // we shouldnt reach this stage but just in canvas lol
                    if(e.button === 2) {
                        clearModifierTools();
                    } 
                    else {
                        itemCursor = this._modifierTool.onMouseUp(this._appState, e.button);
                    }
                } else {
                    itemCursor = this._targetTool.onMouseUp(this._appState, e.button);
                }
            }

            this._cursor.cursor(itemCursor);
        }
    }

    private onMouseLeave = () => {
        this._mouseover = false;
    }

    private onMouseEnter = () => {
        this._mouseover = true;
    }

    private onKeyDown = (e: KeyboardEvent) => {
        // key event is fired global with window, but I only wants them if
        // the canvas is focused or the mouse is within the canvas
        if(!this._mouseover) {
            return;
        }

        // keydown events fired forever as long as key is down
        // but in this case we want on one event so that we dont conteously set 
        // friend tool on rust because that has a nagative impact in performance 
        // and it alse produces unexpected results when the mouse leave and enter
        // the canvas again we lose the view
        if(!this._keydown) {
            // console.log("down: key: ", e.key, " code: ", e.code, " keycode: ", e.keyCode);

            if(this._appState) {
                this._appState.on_keyboard(SprotClientKeyboard.keyevent(e), ESprotKeyState.Down);// true for keydown
            }
        
            // if (e.code.trim().toLowerCase() === "space" && appState) {
                // let pt = new SprotPoint(mousePosition.x, mousePosition.y);
                // appState.on_space_down(pt);
                
            // }
        } 
        
        this._keydown = true;
    }
    
    private onKeyUp = (e: KeyboardEvent) => {
        this._keydown = false;
        if(this._appState) {
            this._appState.on_keyboard(SprotClientKeyboard.keyevent(e), ESprotKeyState.Up);
        }
        
        // if (e.code.trim().toLowerCase() === "space" && appState) {
            // appState.on_space_down();
        // }
    }

    private onWheel = (e: WheelEvent) => {
        let delta = (e.deltaY) * 0.01;

        if(this._appState) {
            this._appState.on_wheel(delta);
        }  
    }

}