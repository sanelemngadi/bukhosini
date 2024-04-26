<script lang="ts">
  import RaisedButton from "$components/general/RaisedButton.svelte";
  import { PropsPicker } from "$components/icons";
import { SprotColorPicker } from "$lib/colors/picker";
  import { SprotColorSpectrum } from "$lib/colors/spectrum";
  import { getElementScreenCoordinates } from "$lib/helper/point";
  import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;
    let container: HTMLElement;
    let colorPicker: SprotColorPicker;
    
    let spectrumCanvas: HTMLCanvasElement;
    let spectrumContainer: HTMLElement;
    let spectrum: SprotColorSpectrum;
    let spectrumGripper: HTMLElement;

    let mousePosition = { x: 0, y: 0 };
    let mouseStart = { x: 0, y: 0 };
    let windowStart = { x: 0, y: 0 }
    let dragging = false;

    const init = () => {
        colorPicker = new SprotColorPicker(canvas);
        spectrum = new SprotColorSpectrum(spectrumCanvas);
        onResize();
        colorPicker.refresh();
        spectrum.refresh();

        container.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onDrag);
        window.addEventListener("mouseup", onDragEnd);
        return () => {
            container.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", onDragEnd);
        }
    }

    onMount(init);

    const onResize = () => {
        canvas.width = container.offsetWidth - 16;
        canvas.height = container.offsetHeight;

        spectrumCanvas.width = spectrumContainer.offsetWidth;
        spectrumCanvas.height = spectrumContainer.offsetHeight;
        
        if(colorPicker) {
            colorPicker.refresh();
        }

        if(spectrum) {
            spectrum.refresh();
        }
    }

    const onDragStart = (e: MouseEvent) => {
        const {x, y} = {x: e.clientX, y: e.clientY};
        mouseStart = {x, y};
        dragging = true;
        
    }

    const onDrag = (e: MouseEvent) => {
        const {x, y} = {x: e.clientX, y: e.clientY};

        if(dragging && spectrumGripper) {
            let left = container.offsetLeft;
            let top = container.offsetTop;
            let parent: HTMLElement | null = container;
            while (!left && parent) {
                left = parent.offsetLeft;
                top = parent.offsetTop;
                parent = parent.parentElement;
            }
            let xInit = Math.min(
                Math.max(x - left - spectrumContainer.offsetLeft - 4, 0),
                left*0 + spectrumCanvas.width - 8
            );

            // console.log("x: ", spectrum.getColorSpectrum({x: xInit, y: spectrumCanvas.offsetTop}));
            // console.log("top: ", x - left - spectrumContainer.offsetLeft - 4);

            console.log("spec can pos: ", spectrumCanvas.offsetLeft);
            console.log("spec can pos using helper: ", getElementScreenCoordinates(spectrumCanvas));
            

            colorPicker.setSpectrum(spectrum.getColorSpectrum({x: xInit, y: spectrumCanvas.offsetTop}));
            
            

            spectrumGripper.style.left = xInit + "px";
        }
    }

    const onDragEnd = (e: MouseEvent) => {
        dragging = false;
    }
</script>

<div class="p-2">
    <h2>Wheel Colors</h2>
</div>
<div class="h-28 relative px-2 mb-2" bind:this={container}>
    <canvas 
        id="sprot-color-picker" 
        class="border outline-none rounded-[4px] border-sprotLightBorder" 
        bind:this={canvas} width="200" height="100">
    </canvas>
    <div class="absolute left-2 top-0 h-3 w-3 rounded-xl bg-sprotPrimary border-[2px] border-sprotSuccess"></div>
</div>
<div class="p-2 borderm overflow-hidden">
    <div class="flex items-center gap-2">
        <div class="w-8 h-8 flex items-center justify-center">
            <RaisedButton className="w-8 h-8 flex items-center justify-center border rounded-sm">
                <PropsPicker color="white" size={14} />
            </RaisedButton>
        </div>

        <div class="flex-1 flex flex-col gap-2">
            <div class="h-3 borderb relative" bind:this={spectrumContainer}>
                <canvas id="spectrum" class="absolute rounded-[4px]" bind:this={spectrumCanvas}></canvas>
                <button 
                    on:mousedown={onDragStart}
                    bind:this={spectrumGripper}
                    class="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-2 bg-sprotPrimary border-[2px]"></button>
            </div>
            <div class="h-3 bordero relative">
                <div 
                    class="w-full h-full" 
                    style="position: relative; box-sizing: border-box; box-shadow: 0 0 0 1px var(--colors-border-1); border-radius: 4px; background: linear-gradient(to left, rgb(34, 17, 17) 0%, transparent 100%) 0% 0% no-repeat local, url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpJREFUeNpi3LFjBwM2oK2tjVWciYFEMKqBGMCCK7yvXr06Gkr00wAQYACiEgXLqZw3aAAAAABJRU5ErkJggg==&quot;) -1px -1px / 8px repeat local; cursor: crosshair;">
                    <div 
                        style="left: 177px; position: absolute; height: calc(100% - 2px); top: 1px; width: 6px; border-radius: 1px; box-shadow: 0 0 0 2px var(--colors-text-active),0 0 0 3px rgba(0,0,0,0.3),inset 0 0 0 1px rgba(0,0,0,0.3);">

                    </div>
                </div>
                <div class="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-2 bg-sprotPrimary border-[2px]"></div>
            </div>
        </div>
    </div>
</div>