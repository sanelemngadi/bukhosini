<script lang="ts">
  import { Eye } from "$components/icons";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import {
    type SprotAppViewController,
    type SprotLayer,
  } from "$wasm/sprot_app";
  import { onMount } from "svelte";
  import GridCanvasTool from "./GridCanvasTool.svelte";
  import {
    getActionDocument,
    getActionPreset,
    getAppViewController,
    getTargetTool,
  } from "$lib/stores";
  import type { SprotListButton } from "$lib/types";
  import Selection from "$components/icons/Selection.svelte";
  import { constraints } from "$lib/api";
  import type { SprotDrawContraint } from "$lib/api/drawingprops";
  import ColorPanelIcon from "$components/icons/panels/ColorPanelIcon.svelte";

  let targetTool: SprotCanvasTool | null = null;
  let presets: SprotListButton[] = [];
  let appState: SprotAppViewController | null = null;
  let active: boolean = false;
  let drawingConstraints: SprotDrawContraint[] = [];

  let actionLayer: SprotLayer | null = null;

  let actionPreset = 0;

  let toggleOperations: SprotListButton[] = [
    { active: false, id: 0, name: "Behavioral Guides", icon: Eye },
    { active: false, id: 1, name: "Creational Guides", icon: Eye },
    { active: false, id: 2, name: "Outline Mode", icon: Eye },
    { active: false, id: 3, name: "Selection Bounding Box", icon: Eye },
    { active: false, id: 4, name: "Black and White Mode", icon: Eye },
  ];

  let elementStyles: SprotListButton[] = [
    { active: false, id: 0, name: "Custom Background", icon: ColorPanelIcon },
    { active: false, id: 1, name: "Custom Outline", icon: ColorPanelIcon },
    { active: false, id: 2, name: "Custom Opacity", icon: ColorPanelIcon },
  ];

  onMount(() => {
    getAppViewController((app) => {
      appState = app;
    });

    drawingConstraints = constraints;

    getTargetTool((tool) => {
      targetTool = tool;
      console.log("target tool: ", tool);
    });

    // getActionPreset((pre) => {
    //   if (appState && targetTool) {
    //     targetTool.setActionPreset(appState, pre);
    //   }
    // });

    // getActionDocument((docume) => {
    //   actionLayer =
    //     docume
    //       .getDocument()
    //       ?.get_doc_layers()
    //       .find((layer) => layer.current_target) || null;
    //   // docume.Some((document) => {
    //   //   actionLayer =
    //   //     document.get_doc_layers().find((layer) => layer.current_target) ||
    //   //     null;
    //   // });
    // });
  });

  // const onSetActiveToolPreset = (event: CustomEvent<number>) => {
  //   const id = event.detail;
  //   // console.log(" preset id: ", id);

  //   if (!appState) {
  //     return;
  //   }

  //   presets = presets.map((pr) => {
  //     pr.active = pr.id === id;

  //     if (targetTool && appState && pr.id === id) {
  //       targetTool.setActionPreset(appState, id);
  //     }
  //     return pr;
  //   });
  // };

  // const onActionConstraints = (id: number) => {
  //   drawingConstraints = drawingConstraints.map((item) => {
  //     item.active = item.id == id;

  //     if (item.active && appState) {
  //       let state = appState.get_draw_state();
  //       state = item.onChange(state);
  //       appState.set_draw_state(state);
  //     }

  //     return item;
  //   });
  // };

  $: if (targetTool) {
    targetTool.toolInterface.Some((prests) => {
      presets = prests.get_presets().map((pr) => {
        const list: SprotListButton = {
          name: pr.get_name(),
          id: pr.id,
          icon: targetTool?.icon || Selection,
          active: pr.active,
        };

        return list;
      });
    });
  }
</script>

<div class="flex gap-1 h-full bg-sprotBgLight20 pointer-events-auto p-1">
  {#if targetTool}
    {#if presets.length > 0}
      <GridCanvasTool
        className="min-w-20"
        maxWidth={7}
        name={"Preset"}
        bordered
        tools={presets}
      />
    {:else}
      <GridCanvasTool
        maxWidth={7}
        name="Preset"
        bordered
        defaultTool={{
          active: false,
          id: 0,
          icon: targetTool.icon, // add none icon
          name: "No Preset",
        }}
      />
    {/if}
  {:else}
    <GridCanvasTool
      maxWidth={7}
      name="No Tool"
      bordered
      defaultTool={{ active: false, id: 0, icon: Selection, name: "No Tool" }}
    />
  {/if}

  <div class="min-w-11 flex flex-col h-full group border border-transparent">
    <GridCanvasTool featured name="Styles" tools={elementStyles} />
    <GridCanvasTool
      interfaceIcon={Eye}
      featured
      name="Arrangments"
      tools={toggleOperations}
    />
  </div>
</div>
