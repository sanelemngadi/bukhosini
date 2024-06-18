import { ESprotKeyState, SprotPoint, type SprotAppViewController } from "$wasm/sprot_app";
import { SprotManageCanvasCursor } from "../cursor";
import { SprotClientKeyboard } from "../events/keyboard";
import type { SprotCanvasTool } from "../tools/base";

export class SprotMainCanvas {
    // private _cursor: SprotManageCanvasCursor;
    private _targetTool: SprotCanvasTool | null;
    private _keydown: boolean;
    private _mouseover: boolean;

    constructor(
        private _canvas: HTMLCanvasElement, 
        private _appState: SprotAppViewController) {

        // this._cursor = new SprotManageCanvasCursor(_canvas);
        this._targetTool = null;
        this._keydown = false;
        this._mouseover = false;

        this.bind();
    }

    bind() {
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));

        this._canvas.addEventListener("mousedown", this.#onMouseDown.bind(this));
        this._canvas.addEventListener("mousemove", this.#onMouseMove.bind(this));
        this._canvas.addEventListener("mouseup", this.#onMouseUp.bind(this));
        this._canvas.addEventListener("mouseenter", this.#onMouseEnter.bind(this));
        this._canvas.addEventListener("mouseleave", this.#onMouseLeave.bind(this));
        this._canvas.addEventListener("contextmenu", this.#onContext.bind(this));
        this._canvas.addEventListener("wheel", this.onWheel.bind(this));
    }

    unbind(): SprotMainCanvas {
        window.removeEventListener("keydown", this.onKeyDown.bind(this));
        window.removeEventListener("keyup", this.onKeyUp.bind(this));

        this._canvas.removeEventListener("mousedown", this.#onMouseDown.bind(this));
        this._canvas.removeEventListener("mousemove", this.#onMouseMove.bind(this));
        this._canvas.removeEventListener("mouseup", this.#onMouseUp.bind(this));
        this._canvas.removeEventListener("mouseenter", this.#onMouseEnter.bind(this));
        this._canvas.removeEventListener("mouseleave", this.#onMouseLeave.bind(this));
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
        
    #onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        // let itemCursor = this._cursor.getCursor();
        if(this._targetTool && this._appState) {
            let pt = new SprotPoint(clientX, clientY);
            this._targetTool.onMouseMove(this._appState, pt);
        }  
    }

    #onMouseDown = (e: MouseEvent) => {
        // let itemCursor = this._cursor.getCursor();
        if(this._targetTool && this._appState) {
            this._targetTool.onMouseDown(this._appState, e.button);
        }
    }

    #onMouseUp = (e: MouseEvent) => {
        // let itemCursor = this._cursor.getCursor();

        if(this._targetTool && this._appState) {
            this._targetTool.onMouseUp(this._appState, e.button);
        }
    }

    #onMouseLeave = () => {
        this._mouseover = false;
    }

    #onMouseEnter = () => {
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
            if(this._appState) {
                this._appState.on_keyboard(SprotClientKeyboard.keyevent(e), ESprotKeyState.Down);// true for keydown
            }
        } 
        
        this._keydown = true;
    }
    
    private onKeyUp = (e: KeyboardEvent) => {
        this._keydown = false;
        if(this._appState) {
            this._appState.on_keyboard(SprotClientKeyboard.keyevent(e), ESprotKeyState.Up);
        }
    }

    private onWheel = (e: WheelEvent) => {
        let delta = (e.deltaY) * -0.01;
        let pt = new SprotPoint(e.clientX, e.clientY);

        if(this._appState) {
            // console.log(delta);
            
            this._appState.on_wheel(pt, delta);
        }  
    }

}