<script lang="ts">
  import { getAppViewController, getTargetTool } from "$lib/stores";
  import { onMount } from "svelte";
  import { type SprotAppViewController } from "$wasm/sprot_app";
  import type { SprotCanvasTool } from "$lib/tools/base";
  // import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
  import { SprotMainCanvas } from "$lib/canvases/main";

  let container: HTMLElement;
  let canvas: HTMLCanvasElement;
  let staticCanvas: HTMLCanvasElement;

  let renderer: SprotMainCanvas;
  let appState: SprotAppViewController | null = null;

  let targetTool: SprotCanvasTool | null;

  let mouse_entered: boolean = false;

  const init = () => {
    getAppViewController((app) => {
      appState = app;

      renderer = new SprotMainCanvas(canvas, appState);
    });

    getTargetTool((tool) => {
      targetTool = tool;

      if (renderer) {
        renderer = renderer.setActionTool(tool);
      }
    });

    window.addEventListener("resize", onResize);

    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
      if (renderer) {
        renderer = renderer.unbind();
      }
    };
  };

  onMount(init);

  const onResize = () => {
    if (!container) {
      return;
    }
    const scale = window.devicePixelRatio;

    const width = window.innerWidth;
    const height = window.innerHeight;

    if (appState) {
      appState.on_resize(screen.availWidth, screen.availHeight, scale);
    }

    if (staticCanvas) {
      resizeCanvas(staticCanvas, width, height);
    }

    if (canvas) {
      resizeCanvas(canvas, width, height);
    }
  };

  const resizeCanvas = (cnvs: HTMLCanvasElement, w: number, h: number) => {
    const scale = window.devicePixelRatio;

    cnvs.width = w * scale;
    cnvs.height = h * scale;

    cnvs.style.width = w + "px";
    cnvs.style.height = h + "px";
  };
</script>

<div class="sprot-canvas" bind:this={container}>
  <div
    class="sprot-static-canvas w-full h-full pointer-events-none bg-sprotBgLight20"
  >
    <canvas
      id="sprot-static-canvas"
      class="bg-sprotBgLight20"
      width="600"
      height="400"
      bind:this={staticCanvas}
    ></canvas>
  </div>

  <div class="absolute top-0 left-0 h-full pointer-events-auto">
    <canvas
      id="sprot-canvas"
      class="bg-sprotBgLight20 {mouse_entered && 'mouse-entered'}"
      width="600"
      height="400"
      bind:this={canvas}
      on:dragover={() => console.log("drop over canvas")}
    >
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
  }
</style>
