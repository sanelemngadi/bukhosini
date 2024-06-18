<script lang="ts">
  import { Eye, Panels, Ruler, Snap } from "$components/icons";
  import {
    alignments,
    arrangmemts,
    snappingModes,
    toggleOperations,
  } from "$lib/api";
  import GridCanvasTool from "./GridCanvasTool.svelte";
  import type { SprotListButton } from "$lib/types";
  import type { SprotSnapping } from "$lib/api/snapping";
  import { onMount } from "svelte";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import { getAppViewController } from "$lib/stores";

  let snappingMode: SprotSnapping[] = [];
  let appState: SprotAppViewController | null = null;

  const init = () => {
    snappingMode = snappingModes;

    getAppViewController((app) => (appState = app));
  };

  onMount(init);

  // let views: SprotListButton[] = [
  //   { active: false, id: 0, name: "Tabs", icon: Panels },
  //   { active: false, id: 1, name: "rulers", icon: Ruler },
  //   { active: false, id: 5, name: "Grids", icon: Panels },
  //   { active: false, id: 2, name: "Sidebar Swatches", icon: Panels },
  //   { active: false, id: 3, name: "Statusbar", icon: Panels },
  //   { active: false, id: 4, name: "Parallel Drawing", icon: Panels },
  // ];

  // const onSnappingMode = (event: CustomEvent<number>) => {
  //   const id = event.detail;
  //   snappingMode = snappingMode.map((mode) => {
  //     if (mode.id === id) {
  //       mode.active = true;

  //       if (appState) {
  //         mode.onSelection(appState);
  //       }
  //     } else {
  //       mode.active = false;
  //     }
  //     return mode;
  //   });
  // };
</script>

<div
  class="flex h-full bg-sprotBgLight20 text-sprotText pointer-events-auto p-1 border-r border-sprotBg1"
>
  <!-- <GridCanvasTool name="Views" tools={views} /> -->
  <!-- <GridCanvasTool
    name="Snap"
    interfaceIcon={Snap}
    tools={snappingMode}
    on:selection={onSnappingMode}
  /> -->

  <div class="min-w-11 flex flex-col h-full group border border-transparent">
    <!-- <GridCanvasTool
      interfaceIcon={Eye}
      featured
      name="Arrangments"
      tools={toggleOperations}
    /> -->
    <GridCanvasTool featured name="Alignment" tools={alignments} />
    <GridCanvasTool featured name="Arrangments" tools={arrangmemts} />
  </div>
</div>
