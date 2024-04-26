<script lang="ts">
    import { getActionModifierTool, getAppViewController, getTargetTool, getCurrentSelection } from "$lib/stores";
    import { onMount } from "svelte";
    import { type SprotAppViewController } from "$wasm/sprot_app";
    import type { SprotCanvasTool } from "$lib/tools/base";
    import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
    import { SprotMainCanvas } from "$lib/canvases/main";

    let container: HTMLElement;
    let canvas: HTMLCanvasElement;
    let staticCanvas: HTMLCanvasElement;

    let renderer: SprotMainCanvas;
    let appState: SprotAppViewController | null = null;

    let targetTool: SprotCanvasTool | null;
    let modifierTool: SprotCanvasModifierTool | null;

    let mouse_entered: boolean = false;

    const init = () => {
        getAppViewController(app =>  {
            appState = app;

            renderer = new SprotMainCanvas(canvas, appState);
        });

        getActionModifierTool(tool => {
            tool.Some(tl => {
                modifierTool = tl;

                if(renderer) {
                    renderer = renderer.setActionModifierTool(tl);
                }
            })
            .None(() => {
                modifierTool = null;

                if(renderer) {
                    renderer = renderer.setActionModifierTool(null);
                }
            });
        });

        getTargetTool(tool => {
            targetTool = tool;

            if(renderer) {
                renderer = renderer.setActionTool(tool);
            }
        });

        // console.log("init width: ", container.offsetWidth);
        window.addEventListener("resize", onResize);
        // canvas.addEventListener("mouseenter", () => {
        //     mouse_entered = true;
        //     console.log("enter canvas");
            
        // });

        // canvas.addEventListener("mouseleave", () => {
        //     mouse_entered = false;
        //     console.log("leave canvas");
            
        // });

        onResize();

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }
    
    onMount(init);

    const onResize = () => {
        if(!container) {return; }
        console.log("resized width: ", container.offsetWidth);

        const width = window.innerWidth;
        const height = window.innerHeight;

        if(staticCanvas) {
            resizeCanvas(staticCanvas, width, height);
        }

        if(canvas) {
            resizeCanvas(canvas, width, height);
        }
    }

    const resizeCanvas = (cnvs: HTMLCanvasElement, w: number, h: number) => {
        const scale = window.devicePixelRatio;

        cnvs.width = w * scale;
        cnvs.height = h * scale;

        let ctx = cnvs.getContext("2d")!;
        // ctx.scale(scale, scale);

        cnvs.style.width = w + "px";
        cnvs.style.height = h + "px";

        if (appState) {
            appState.on_resize(screen.availWidth, screen.availHeight, scale);
        }
    }
  
  
  </script>
  
  <div class="sprot-canvas border" bind:this={container}>
        <div class="sprot-static-canvas w-full h-full border border-sprotPrimary pointer-events-none bg-sprotBgLight20" >
            <canvas 
                id="sprot-static-canvas" 
                class="border"
                style="background-color: #292929;"
                width="600"
                height="400" 
                bind:this={staticCanvas}></canvas>
                <!-- style="background-color: #292929;" -->
        </div>
    
        <div class="absolute top-0 left-0 h-full pointer-events-auto border">
            <canvas 
                id="sprot-canvas" 
                class="bg- border border-sprotDanger bg-black {mouse_entered && "mouse-entered"}"
                width="600"
                height="400"  
                bind:this={canvas}
                on:dragover={() => console.log("drop over canvas")}>
                <!-- style="background-color: #303134;" -->
            </canvas>
        </div>
  </div>
  <!-- 400 -->

  <style>
    .sprot-canvas {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        height: calc(100vh - 8px);
        width: calc(100vw - 7px);
        overflow: hidden;
    }
  </style>