<script lang="ts">
  import { type SprotToolGroup } from "$lib/types";
  import { onMount } from "svelte";
  import type { SprotAppViewController, SprotToolSet } from "$wasm/sprot_app";
  import { getAppViewController, getCanvasTools } from "$lib/stores";
  import GridSideTool from "./GridSideTool.svelte";

  let appState: SprotAppViewController | null = null;
  export let disabledAll: boolean = false;
  let tools: SprotToolGroup[] = [];

  const init = () => {
    getCanvasTools((tls) => (tools = tls));

    getAppViewController((app) => {
      appState = app;
      setSelection(1);
    });
  };

  onMount(init);

  const onSelection = (event: CustomEvent<number>) => {
    setSelection(event.detail);
  };

  const setSelection = (id: SprotToolSet) => {
    if (appState) {
      appState.set_action_tool(id);
    }
  };
</script>

<div class="flex items-center bg-sprotBg pointer-events-auto h-full">
  {#each tools as tool (tool.name)}
    <GridSideTool
      tools={tool.tools.map((tl) => {
        return {
          active: tl.active,
          icon: tl.icon,
          name: tl.name,
          id: tl.toolSet,
        };
      })}
      on:selection={(e) => onSelection(e)}
      disabled={disabledAll}
    />
  {/each}
</div>
