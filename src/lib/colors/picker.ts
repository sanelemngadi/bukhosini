import { None, Some, SomeFromUnknown, type SprotOption } from "$lib/utils";

interface SprotPoint {
    x: number, 
    y: number,
}

interface SprotSize {
    w: number, 
    h: number,
}

interface Color {
    r: number,
    g: number, 
    b: number,
}

const DEFAULT_POINT = {
    x: 0,
    y: 0
}

export class SprotColorPicker {
    private _ctx: SprotOption<CanvasRenderingContext2D>;
    private _mouse_position: SprotPoint;
    private _mouse_start: SprotPoint;
    private _dragging: boolean;
    private _color: Color;

    constructor(private _canvas: HTMLCanvasElement) {
        this._ctx = SomeFromUnknown(_canvas.getContext("2d"));
        this._mouse_position = {...DEFAULT_POINT};
        this._mouse_start = {...DEFAULT_POINT};
        this._dragging = false;
        this._color = {r: 255, g: 0, b: 0};

        this.bind();
    }

    private bind = () => {
        this._canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
        this._canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
        document.addEventListener("mouseup", this.onMouseUp.bind(this));
    }

    private onMouseDown = (e: MouseEvent) => {}
    private onMouseMove = (e: MouseEvent) => {}
    private onMouseUp = (e: MouseEvent) => {}

    refresh = () => {
        this._ctx.Some(ctx => {
            this.paint(ctx);
        })
    }

    private paint = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle="black";
        let sz: SprotSize = {
            w: this._canvas.width, h: this._canvas.height
        } 

        ctx.clearRect(0, 0, sz.w, sz.h);

        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, sz.w, sz.h);
        
        let gradient = ctx.createLinearGradient(0, 0, sz.w, 0);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");

        const {r, g, b} = this._color;
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 1)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, sz.w, sz.h);

        gradient = ctx.createLinearGradient(0, 0, 0, sz.h);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, sz.w, sz.h);
    }

    setSpectrum(rgb: Color) {
        this._color = rgb;
        this.refresh();
    }
}