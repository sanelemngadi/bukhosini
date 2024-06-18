<script lang="ts">
  import { onMount } from "svelte";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { SprotManageCanvasCursor } from "$lib/cursor";
  import GridNorth from "$components/general/GridNorth.svelte";
  import Tabs from "$components/general/Tabs.svelte";
  import Close from "$components/icons/Close.svelte";
  import { slide } from "svelte/transition";
  // import InputsToolTraits from "./tools/InputsToolTraits.svelte";
  import { getElementScreenCoordinates } from "$lib/helper/point";
  import type { SprotClientDocument } from "$lib/application/document";
  import { getActionDocument, getState } from "$lib/stores";
  import Statusbar from "$components/general/statusbar/Statusbar.svelte";

  // import {} from "src-tauri"

  let container: HTMLDivElement;

  let canvas: HTMLCanvasElement;
  let cursor: SprotManageCanvasCursor;

  let targetTool: SprotCanvasTool | null;

  let horizontalRulersCanvas: HTMLCanvasElement | null = null;
  let verticalRulersCanvas: HTMLCanvasElement | null = null;

  let showDocumentSetup = false;

  let mouse_coords: { x: number; y: number } = { x: 0.0, y: 0.0 };

  let actionDocument: SprotClientDocument | null;
  let showRulers = false;

  const init = () => {
    onResize();

    getActionDocument((doc) => (actionDocument = doc));

    getState((state) => (showRulers = state.showRulers));

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", (e) => {
      if (container) {
        let point = getElementScreenCoordinates(container);
        const min_x = Math.max(0.0, e.clientX + 50 - point.x);
        mouse_coords.x = Math.min(min_x, container.offsetWidth - 100);

        const min_y = Math.max(0.0, e.clientY - 20 - point.y);
        mouse_coords.y = Math.min(min_y, container.offsetHeight - 50);
      }
    });

    cursor = new SprotManageCanvasCursor(canvas);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  };

  onMount(init);

  const onResize = () => {
    if (!container) {
      return;
    }
    let scale = window.devicePixelRatio;

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    let size = 16.0;

    if (horizontalRulersCanvas) {
      horizontalRulersCanvas.width = width * scale;
      horizontalRulersCanvas.height = size * scale;
      horizontalRulersCanvas.style.width = width + "px";
      horizontalRulersCanvas.style.height = size + "px";
    }

    if (verticalRulersCanvas) {
      verticalRulersCanvas.width = scale * size;
      verticalRulersCanvas.height = height * scale;
      verticalRulersCanvas.style.width = size + "px";
      verticalRulersCanvas.style.height = height + "px";
    }
  };

  const onDocumentSetup = () => {
    showDocumentSetup = !showDocumentSetup;
  };
</script>

<div class="sprot-canvas overflow-hidden flex flex-col flex-1 w-fulll">
  <Tabs on:documentsetup={onDocumentSetup} />
  {#if showDocumentSetup}
    <div
      class="bg-sprotBgLight20 text-sprotText flex justify-between p-3 border-t-sprotBg1 overflow-auto pointer-events-auto"
      transition:slide={{ axis: "y" }}
    >
      <div>
        <p>Document Setup</p>
        <p>Rename location</p>
        <p>Save as</p>
        <p>Size</p>
        <p>Bleed</p>
        <p>coordinate system</p>
        <p>Drawin Scale</p>
        <p>Cartezian System (Surveyor, GIS, Advanced)</p>
      </div>
      <div
        class="w-5 h-5 rounded-xl borderk border-x-sprotLightBorder sprot-center"
      >
        <Close size={8} />
      </div>
    </div>
  {/if}
  <div class="overflow-hidden flex-1 relative" bind:this={container}>
    {#if showRulers}
      <div
        class="sprot-rulers h-[16px] absolute top-0 left-0 w-full pointer-events-auto sprot-opacity z-10"
      >
        <span
          class="flex items-center absolute bg-sprotBg px-2 h-3 text-[10px] opacity-95 right-0 top-1/2 -translate-y-1/2 text-sprotText"
          >milimetres</span
        >
        <canvas
          id="sprot-horizontal-rulers"
          class="h-[16px] bg-sprotBg border-t-0 border border-sprotBgLight60 w-full cursor-n-resize"
          bind:this={horizontalRulersCanvas}
          width="100"
          height="10"
        >
        </canvas>
      </div>
      <div
        class="sprot-rulers absolute w-[16px] top-[16px] left-0 h-full pointer-events-auto sprot-opacity"
      >
        <canvas
          id="sprot-vertical-rulers"
          class="w-[16px] bg-sprotBg border border-l-0 border-sprotBgLight60 h-full cursor-ew-resize"
          bind:this={verticalRulersCanvas}
          width="10"
          height="100"
        >
        </canvas>
      </div>
      <div
        class="sprot-rulers absolute z-10 top-0 left-0 bg-sprotBgLight20 border border-black h-[16px] w-[16px] pointer-events-auto sprot-opacity"
      ></div>
    {/if}

    <div
      class="w-full absolute top-0 right-0 h-full flex items-start justify-end pointer-events-none overflow-hidden"
    >
      <!-- <InputsToolTraits {mouse_coords} /> -->
      <div class="relative bottom-0 right-3 mt-auto">
        <GridNorth />
      </div>
      <!-- <div
        class="border bg-sprotPrimary w-full h-full absolute top-0 left-0 z-30"
      ></div> -->
      {#if actionDocument && actionDocument.getComponent()}
        <svelte:component this={actionDocument.getComponent()} />
      {/if}
    </div>
  </div>
  <Statusbar />
</div>

<style lang="postcss">
  .sprot-opacity {
    @apply opacity-100;
  }
</style>
