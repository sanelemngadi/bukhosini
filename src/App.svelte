<script lang="ts">
  import Canvas from "$components/canvas/Canvas.svelte";
  import { onMount } from "svelte";
  import {
    getActionDocument,
    getTargetTool,
    setAppViewController,
  } from "$lib/stores";
  import Menubar from "$components/menus/Menubar.svelte";
  import init, { start } from "$wasm/sprot_app";
  import { SprotClientViewController } from "$lib/application/viewcontroller";
  import Tools from "$components/toolbars/Tools.svelte";
  import { getCurrentSelection } from "$lib/stores/action-selection";
  import Toplevels from "$components/toplevel/Toplevels.svelte";
  import StaticToolbars from "$components/toolbars/StaticToolbars.svelte";
  import PanelsNotebook from "$components/panels/PanelsNotebook.svelte";
  import DrawingControl from "$components/canvas/DrawingControl.svelte";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import OptionsPanelsNotebook from "$components/panels/OptionsPanelsNotebook.svelte";
  import HorizontalTools from "$components/toolbars/HorizontalTools.svelte";
  import { Seperator } from "$components/toolbars";

  let container: HTMLElement;
  let tool: SprotCanvasTool | null = null;
  let showPanels: boolean = false;

  onMount(() => {
    init().then(() => {
      let client = new SprotClientViewController();
      const app = start(client);

      getCurrentSelection((selection) => {
        console.log("selection: ", selection);
      });

      setAppViewController(app);

      getTargetTool((tl) => (tool = tl));

      getActionDocument((document) => (showPanels = document.id != -1));

      // getState((state) => (showPanels = state.showPanels));
    });
  });
</script>

<div
  class="relative sprot-app overflow-hidden- sprot-container w-screen h-screen"
  bind:this={container}
>
  <DrawingControl />

  <div
    class="sprot-content flex flex-col w-full h-full absolute top-0 left-0 pointer-events-none"
  >
    <div class="flex flex-col bg-sprotBgLight20">
      <Menubar />
      <div class="flex flex-1 gap-1 border-bb border-sprotBg1">
        <div class="flex flex-col w-full">
          <div class="flex gap-2 items-center h-9">
            <HorizontalTools disabledAll={!showPanels} />
            <Seperator />
            <StaticToolbars disabledAll={!showPanels} />
            <Seperator />
            <Tools disabledAll={!showPanels} />
          </div>
          <!-- <Tabs /> -->
        </div>
      </div>
    </div>

    <div class="flex flex-col h-full">
      <div class="sprot-div-canvas flex flex-1 overflow-hidden w-full h-full">
        <div class="flex flex-col flex-1">
          <div class="flex flex-1 relative overflow-hidden">
            {#if showPanels}
              <OptionsPanelsNotebook />
            {/if}
            <Canvas />
            {#if showPanels}
              <PanelsNotebook />
            {/if}
          </div>
          <!-- <Statusbar /> -->
        </div>
      </div>
    </div>
  </div>

  <div
    id="toplevels"
    class="sprot-toplevels w-screen h-screen absolute top-0 left-0 bg-trasparent pointer-events-none"
  >
    <Toplevels />
  </div>
</div>
