<script lang="ts">
  import { onMount } from "svelte";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import {
    getActionPreset,
    getAppViewController,
    getTargetTool,
  } from "$lib/stores";
  import ToolLayers from "./ToolLayers.svelte";
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import type { SprotListButton } from "$lib/types";

  export let disabledAll: boolean = false;

  let targetTool: SprotCanvasTool | null = null;
  let appState: SprotAppViewController | null = null;
  // let presets: SprotListButton[] = [];

  onMount(() => {
    getAppViewController((app) => (appState = app));
    getTargetTool((tool) => (targetTool = tool));
  });

  // getActionPreset((preset_id) => {
  //   if (targetTool) {
  //     if (targetTool.presets.find((p) => p.id == preset_id)) {
  //       presets = targetTool.presets.map((active) => {
  //         active.active = active.id === preset_id;
  //         return active;
  //       });
  //     }
  //   }
  // });

  const onSetActivePreset = (preset_id: number) => {
    if (targetTool && appState) {
      targetTool = targetTool.setActionPreset(appState, preset_id);
    }
  };

  // $: if (targetTool) {
  //   presets = targetTool.presets;
  // }
</script>

<div
  class="sprot-center w-full gap-1 h-7 bg-sprotBgLight20 pointer-events-auto"
>
  <div class="sprot-canvas-tools w-full">
    <div class="flex items-center gap-1">
      <ToolLayers disabled={disabledAll} />
      {#if targetTool}
        {#each targetTool.presets as preset (preset.id)}
          <BitmapButton
            active={preset.active}
            className="w-7 h-6"
            on:click={() => onSetActivePreset(preset.id)}
            disabled={disabledAll}
          >
            <svelte:component
              this={preset.icon}
              size={14}
              disabled={disabledAll}
            />
          </BitmapButton>
        {/each}
      {/if}
    </div>
  </div>
</div>
