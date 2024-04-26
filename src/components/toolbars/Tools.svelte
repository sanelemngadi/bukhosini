<script lang="ts">
  import { onMount } from "svelte";
  import Seperator from "./Seperator.svelte";
  import ToolPresets from "./ToolPresets.svelte";

  // import Toolbar from "./Toolbar.svelte";
  // import ToolsContainer from "./tools/ToolsContainer.svelte";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { getTargetTool } from "$lib/stores";
  // import { togglePanels } from "$lib/stores/panels-state";
  import ToolLayers from "./ToolLayers.svelte";
  // import SnappingModes from "./SnappingModes.svelte";
  // import SelectionOperations from "$components/canvas/toplevels/SelectionOperations.svelte";
  // import ToggleOperations from "./ToggleOperations.svelte";
  // import button from "$components/general/RaisedButton.svelte";
  import ActionColor from "./ActionColor.svelte";
  import { Select } from "$components/ui";

  let targetTool: SprotCanvasTool | null = null;

  onMount(() => {
    getTargetTool(tool => targetTool = tool);
    
  });

  // const onPanels = () => { togglePanels(); }
</script>
<div class="flex w-full gap-1 justify-between h-7 borderl border-black bg-sprotBg text-sprotText text-[12px] pointer-events-auto">
  <div class="sprot-canvas-tools w-full">
    <div class="flex items-center" >
      <div class="w-1"></div>
      <p class="text-sprotBgLight60">Sprot</p>
      <Seperator />
      
      {#if targetTool}
        <ToolPresets tool={targetTool} />
      {/if}

      <!-- <Select /> -->

      <Seperator vertical={false} />
      <button class="max-h-5">
        Use layer
      </button>
      <div class="w-1"></div>
      <ToolLayers />
        <div class="w-1"></div>
        <ActionColor />
        <div class="w-1"></div>
        <button class="max-h-5">
          Outline
        </button>
        <div class="w-1"></div>

      {#if targetTool && targetTool.toolsPanel}
        <svelte:component this={targetTool.toolsPanel} />
      {/if}
      
      <Seperator />
    </div>
  </div>
</div>