import { None, Some, SomeFromUnknown, type SprotOption } from "$lib/utils";

interface SprotPoint {
    x: number, 
    y: number,
}

interface SprotSize {
    w: number, 
    h: number,
}

const DEFAULT_POINT = {
    x: 0,
    y: 0
}

export class SprotColorSpectrum {
    private _ctx: SprotOption<CanvasRenderingContext2D>;
    private _mouse_position: SprotPoint;
    private _mouse_start: SprotPoint;
    private _dragging: boolean;

    constructor(private _canvas: HTMLCanvasElement) {
        this._ctx = SomeFromUnknown(_canvas.getContext("2d"));
        this._mouse_position = {...DEFAULT_POINT};
        this._mouse_start = {...DEFAULT_POINT};
        this._dragging = false;

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
        
        let gradient = ctx.createLinearGradient(0, 0, sz.w, 0);
        gradient.addColorStop(0, "rgb(255, 0, 0)");
        gradient.addColorStop(0.15, "rgb(255, 255, 0)");
        gradient.addColorStop(0.33, "rgb(0, 255, 0)");
        gradient.addColorStop(0.49, "rgb(0, 255, 255)");
        gradient.addColorStop(0.64, "rgb(0, 0, 255)");
        gradient.addColorStop(0.84, "rgb(255, 0, 255)");
        gradient.addColorStop(1, "rgb(255, 0, 0)");
        // gradient.addColorStop(0, "rgb(255, 0, 0)");
        // gradient.addColorStop(0.15, "rgb(255, 0, 255)");
        // gradient.addColorStop(0.33, "rgb(0, 0, 255)");
        // gradient.addColorStop(0.49, "rgb(0, 255, 255)");
        // gradient.addColorStop(0.64, "rgb(0, 255, 0)");
        // gradient.addColorStop(0.84, "rgb(255, 255, 0)");
        // gradient.addColorStop(1.0, "rgb(255, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, sz.w, sz.h);
    }

    getColorSpectrum(position: SprotPoint): {r: number, g: number, b: number} {
        let ctx: CanvasRenderingContext2D | null = null;
        this._ctx.Some(ct => {
            ctx = ct;
        });

        if(ctx) {
            let imgData = (ctx as CanvasRenderingContext2D).getImageData(position.x, position.y, 1, 1);
            return {r: imgData.data[0], g:imgData.data[1], b: imgData.data[2]};
        }
        
        return {r: 255, g: 0, b: 0};      
    }
}