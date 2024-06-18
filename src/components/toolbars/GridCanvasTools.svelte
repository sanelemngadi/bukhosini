<script lang="ts">
  //   import { canvasTools } from "$lib/api/canvastools";
  import type { SprotToolGroup } from "$lib/types";
  import { onMount } from "svelte";
  import GridCanvasTool from "./GridCanvasTool.svelte";
  import { getAppViewController, getCanvasTools } from "$lib/stores";
  import type { SprotAppViewController, SprotToolSet } from "$wasm/sprot_app";

  export let disabledAll: boolean = false;

  // if (disabledAll) {
  // }

  let tools: SprotToolGroup[] = [];
  let appState: SprotAppViewController | null = null;

  const init = () => {
    // tools = canvasTools;
    getCanvasTools((tls) => (tools = tls));

    getAppViewController((app) => {
      appState = app;
      setSelection(1, 1);
    });
  };

  onMount(init);

  const onSelection = (event: CustomEvent<number>, groupId: number) => {
    setSelection(event.detail, groupId);
  };

  const setSelection = (id: SprotToolSet, groupId: number) => {
    let found = false;

    if (appState) {
      appState.set_action_tool(id);
    }
  };
</script>

<div
  class="flex h-full bg-sprotBgLight20 text-sprotText pointer-events-auto p-1 border-r border-sprotBg1"
>
  {#each tools.filter((tool) => tool.featured === false) as tool (tool.name)}
    <GridCanvasTool
      tools={tool.tools.map((tl) => {
        return {
          active: tl.active,
          icon: tl.icon,
          name: tl.name,
          id: tl.toolSet,
        };
      })}
      name={tool.name}
      activeGroup={tool.active}
      on:selection={(e) => onSelection(e, tool.id)}
      disabled={disabledAll}
    />
  {/each}

  <div class="min-w-11 flex flex-col h-full group border border-transparent">
    {#each tools.filter((tool) => tool.featured) as tool (tool.id)}
      <GridCanvasTool
        tools={tool.tools.map((tl) => {
          return {
            active: tl.active,
            icon: tl.icon,
            name: tl.name,
            id: tl.toolSet,
          };
        })}
        name={tool.name}
        featured={true}
        activeGroup={tool.active}
        on:selection={(e) => onSelection(e, tool.id)}
        disabled={disabledAll}
      />
    {/each}
  </div>
</div>
