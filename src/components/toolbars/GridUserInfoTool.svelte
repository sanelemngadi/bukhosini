<script lang="ts">
  import { Scale } from "$components/icons/modifiers";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import { onMount } from "svelte";
  import GridCanvasTool from "./GridCanvasTool.svelte";
  import { getAppViewController, getTargetTool } from "$lib/stores";

  export let disabledAll: boolean = false;

  let targetTool: SprotCanvasTool | null = null;
  let appState: SprotAppViewController | null = null;

  onMount(() => {
    getAppViewController((app) => (appState = app));

    getTargetTool((tool) => (targetTool = tool));
  });
</script>

<div
  class="flex gap-1 h-full bg-sprotBgLight20 text-sprotText pointer-events-auto p-1 border-xl border-sprotBg1"
>
  <GridCanvasTool
    maxWidth={16}
    disabled={disabledAll}
    name={"Sanele Mngadi"}
    tools={[{ active: true, icon: Scale, id: 1, name: "Sanele" }]}
  />
</div>
