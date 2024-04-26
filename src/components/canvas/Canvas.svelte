<script lang="ts">
  import { onMount } from "svelte";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { SprotManageCanvasCursor } from "$lib/cursor";
  import GridNorth from "$components/general/GridNorth.svelte";
  import Tabs from "$components/general/Tabs.svelte";
  import Statusbar from "$components/general/statusbar/Statusbar.svelte";

    let container: HTMLDivElement;

    let canvas: HTMLCanvasElement;
    // let staticCanvas: HTMLCanvasElement;
    let cursor: SprotManageCanvasCursor;

    let targetTool: SprotCanvasTool | null;
    // let modifierTool: SprotCanvasModifierTool | null;

    let horizontalRulersCanvas: HTMLCanvasElement;
    let verticalRulersCanvas: HTMLCanvasElement;

    // let canv: SprotCanvas;
    // let appState: SprotAppViewController | null = null;

    // const onResize = async () => {
    //     const scale = window.devicePixelRatio;

    //     // con*9

    //     // console.log("on resize: ", container?.clientWidth, container);
        
        
    //     if(!container || !canvas || !staticCanvas || !canv || !appState) {
    //         return;
    //     }

    //     setTimeout(() => {
    //         if(appState) {
    //             canv = canv.Resize(appState, container.clientWidth, container.clientHeight);
    //         }

    //         // console.count("time");
            
    //     }, 200);

    //     if (appState) {            
    //         appState.on_resize(screen.availWidth, screen.availHeight, scale);
    //     }
    // }

    const init = () => {
        onResize();
        
        // getTargetTool(tool => {
        //     targetTool = tool;

        //     if(canv) {
        //         canv = canv.setActionTool(tool);
        //     }
        // });

        // getCurrentSelection(selection => {
        //     if(targetTool) {
        //         // targetTool.setSelection(selection);
        //         if(canv) {
        //             canv = canv.addSelection(selection);
        //         }
        //     }
        // })
        
        
        // getActionModifierTool(tool => {
        //     tool.Some(tl => {
        //         modifierTool = tl;

        //         if(canv) {
        //             canv = canv.setActionModifierTool(tl);
        //         }
        //     })
        //     .None(() => {
        //         modifierTool = null;

        //         if(canv) {
        //             canv = canv.setActionModifierTool(null);
        //         }
        //     });
        // });

        window.addEventListener("resize", onResize);
        // container.addEventListener("resize", onResize);
        
        // getAppViewController(app => {
        //     appState = app;
        //     // onResize();
        //     canv = new SprotCanvas(canvas, staticCanvas, horizontalRulersCanvas, verticalRulersCanvas, app);
        // });
        
        cursor = new SprotManageCanvasCursor(canvas);
        
        return () => {
            window.removeEventListener("resize", onResize);
        }
    };

    onMount(init);

    const onResize = () => {
        if(!container) {return; }
        let scale = window.devicePixelRatio;
        // console.log("resized width: ", container.offsetWidth);

        const width = container.offsetWidth;
        const height = container.offsetHeight - 20;
        let size = 16.0;


        if(horizontalRulersCanvas) {
            horizontalRulersCanvas.width = width * scale;
            horizontalRulersCanvas.height = size * scale;
        }

        if(verticalRulersCanvas) {
            verticalRulersCanvas.width = scale * size;
            verticalRulersCanvas.height = height * scale;
        }
    }

</script>

<div class="sprot-canvas overflow-hidden flex flex-col flex-1 w-full bg-sprotPrimaryll border-td border-sprotBgLight60">
    <Tabs />
    <div class="overflow-hidden flex-1 relative bg-" bind:this={container}>
        <div class="sprot-rulers h-[16px] absolute top-0 left-[0px] w-full pointer-events-auto">
            <span class="flex items-center absolute bg-sprotBg px-2 h-3 text-[10px] opacity-95 right-0 top-1/2 -translate-y-1/2 text-sprotText">milimetres</span>
            <canvas id="sprot-horizontal-rulers"
                class="h-[16px] bg-sprotBg1 border-t-0 border border-sprotBgLight60 w-full cursor-n-resize"
                bind:this={horizontalRulersCanvas}
                width="100" height="10">
            </canvas>
        </div>
        <div class="sprot-rulers absolute w-[16px] top-[0px] left-0 h-full pointer-events-auto">
            <canvas id="sprot-vertical-rulers"
                class="w-[16px] bg-sprotBg1 border border-sprotBgLight60 h-full cursor-ew-resize"
                bind:this={verticalRulersCanvas}
                width="10" height="100">
            </canvas>
        </div>
        <div class="sprot-rulers absolute top-0 left-0 bg-sprotBg1 border border-t-0 border-sprotBgLight60 h-[16px] w-[16px] pointer-events-auto">
        </div>

        <div class="w-full absolute top-0 right-0 h-full flex items-start justify-end pointer-events-none overflow-hidden border-t-0 border border-sprotBgLight60"> 
           <div class="h-full flex flex-col">
              {#if targetTool && targetTool.panelComponent && targetTool.active}
                <div class="w-[240px] overflow-hidden m-6 sprot-pointer-events" >
                  <svelte:component this={targetTool.panelComponent} tool={targetTool} />
                </div>
              {/if}
  
              <div class="self-end relative bottom-0 right-3 mt-auto">
                <GridNorth />
              </div>
           </div>
        </div>
    </div>
    <Statusbar />
</div>