<script lang="ts">
  import {
    DropdownOutline,
    Eye,
    Inflate,
    MoreOptions,
    Outline,
    Proportional,
    Ruler,
    Snap,
  } from "$components/icons";
  import {
    SprotActions,
    type ISprotOptionsPanel,
    type SprotToolGroup,
  } from "$lib/types";
  import Close from "$components/icons/Close.svelte";
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import { CopyIcon } from "$components/icons/toolbars";
  import { SnapPerpendicular } from "$components/icons/snapping";
  import Setting from "$components/icons/Setting.svelte";
  import { onMount } from "svelte";
  // import { toggleOperations } from "$lib/api";
  import IExplode from "$components/icons/presets/IExplode.svelte";
  import type { SprotAppViewController, SprotToolSet } from "$wasm/sprot_app";
  import {
    getAppViewController,
    getCanvasTools,
    modifyState,
  } from "$lib/stores";
  import SnapAngle from "$components/icons/snapping/SnapAngle.svelte";
  import GridSideTool from "./GridSideTool.svelte";
  import OptionsPanelsNotebook from "$components/panels/OptionsPanelsNotebook.svelte";

  //   export let activePanel: ISprotOptionsPanel | null = null;
  let appState: SprotAppViewController | null = null;
  export let disabledAll: boolean = false;
  let tools: SprotToolGroup[] = [];

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

  //   let panels: ISprotOptionsPanel[] = [
  //     {
  //       active: false,
  //       icon: Setting,
  //       id: SprotActions.Save,
  //       isDropdown: false,
  //       name: "Settings",
  //       selected: true,
  //       onSelect: (app, self) => {},
  //     },
  //     {
  //       active: false,
  //       icon: CopyIcon,
  //       id: SprotActions.ToolCopyToMouse,
  //       isDropdown: false,
  //       name: "Copy Action",
  //       selected: true,
  //       onSelect: (app, self) => {
  //         const state = app.get_draw_state();
  //         state.copy(self.active);
  //         app.set_draw_state(state);
  //       },
  //     },
  //     {
  //       active: false,
  //       icon: SnapPerpendicular,
  //       id: SprotActions.SnapPerpendicular,
  //       isDropdown: false,
  //       name: "Orthogonal",
  //       selected: true,
  //       onSelect: (app, self) => {
  //         const state = app.get_draw_state();
  //         state.orthogonal(self.active);
  //         app.set_draw_state(state);
  //       },
  //     },
  //     {
  //       active: false,
  //       icon: SnapAngle,
  //       id: SprotActions.SnapGrid,
  //       isDropdown: true,
  //       name: "Polar Tracking",
  //       selected: true,
  //       onSelect: (app, self) => {
  //         // const state = app.get_draw_state();
  //         // state.orthogonal(self.active);
  //         // app.set_draw_state(state);
  //       },
  //     },
  //     {
  //       active: false,
  //       icon: Proportional,
  //       id: SprotActions.ToolPan,
  //       isDropdown: false,
  //       name: "Proportional",
  //       selected: true,
  //       onSelect: (app, self) => {
  //         const state = app.get_draw_state();
  //         state.proportional(self.active);
  //         app.set_draw_state(state);
  //       },
  //     },
  //     {
  //       active: false,
  //       icon: Inflate,
  //       id: SprotActions.ToolAnchor,
  //       isDropdown: false,
  //       name: "Inflate",
  //       selected: true,
  //       onSelect: (app, self) => {
  //         const state = app.get_draw_state();
  //         state.inflate(self.active);
  //         app.set_draw_state(state);
  //       },
  //     },
  //     {
  //       active: false,
  //       icon: Snap,
  //       id: SprotActions.SnapAngle,
  //       isDropdown: true,
  //       name: "Snap",
  //       selected: true,
  //       onSelect: (app, self) => {},
  //     },
  //     {
  //       active: false,
  //       icon: Eye,
  //       id: SprotActions.ToggleCAD,
  //       isDropdown: true,
  //       name: "Toggling",
  //       selected: true,
  //       onSelect: (app, self) => {},
  //     },
  //     {
  //       active: false,
  //       icon: Ruler,
  //       id: SprotActions.ToolCut,
  //       isDropdown: false,
  //       name: "Rulers",
  //       selected: true,
  //       onSelect: (app, self) => {
  //         const state = app.get_draw_state();
  //         state.rulers(self.active);
  //         app.set_draw_state(state);

  //         modifyState((st) => {
  //           st.showRulers = self.active;
  //           return st;
  //         });
  //       },
  //     },
  //     {
  //       active: false,
  //       icon: Outline,
  //       id: SprotActions.ToolComments,
  //       isDropdown: false,
  //       name: "Outline",
  //       selected: true,
  //       onSelect: (app, self) => {
  //         const state = app.get_draw_state();
  //         state.outline(self.active);
  //         app.set_draw_state(state);
  //       },
  //     },
  //     {
  //       active: false,
  //       icon: IExplode,
  //       id: SprotActions.ToolDistr,
  //       isDropdown: false,
  //       name: "Exploded",
  //       selected: true,
  //       onSelect: (app, self) => {
  //         const state = app.get_draw_state();
  //         state.explode(self.active);
  //         app.set_draw_state(state);
  //       },
  //     },
  //   ];

  //   onMount(() => {
  //     // getAppViewController((app) => (appState = app));
  //     // panels = [
  //     //   ...panels,
  //     //   ...toggleOperations.map((toggle) => {
  //     //     let item: ISprotOptionsPanel = {
  //     //       active: false,
  //     //       icon: toggle.icon,
  //     //       id: toggle.id,
  //     //       isDropdown: false,
  //     //       selected: true,
  //     //       name: toggle.name,
  //     //     };
  //     //     return item;
  //     //   }),
  //     // ];
  //   });

  //   const onSetActivePanel = (active: ISprotOptionsPanel) => {
  //     panels = panels.map((pn) => {
  //       if (active.id === pn.id && !active.isDropdown) {
  //         pn.active = !pn.active;
  //         if (appState) {
  //           active.onSelect(appState, pn);
  //         }
  //       }
  //       return pn;
  //     });
  //   };

  const onClosePanels = () => {};
</script>

<div class="flex h-full border border-sprotBg1 pointer-events-auto">
  <!-- {#if activePanel && activePanel.component}
    <div class="sprot-panels flex flex-col h-full overflow-hidden p-1">
      <div
        class="flex items-center justify-between h-6 border-b border-sprotBg1 bg-sprotBg"
      >
        <h2 class="text-center px-4 font-bold">
          {"Settings"}
        </h2>
        <div class="flex-1 h-2 bg-sprotTextl"></div>
        <div class="w-10 flex items-center justify-center">
          <BitmapButton
            className="ml-auto w-4 h-4 flex items-center relative justify-center text-sprotText"
            on:click={onClosePanels}
          >
            <Close size={8} />
          </BitmapButton>
        </div>
      </div>

      <div class="overflow-hidden flex-1 bg-sprotBg1">
        <svelte:component this={activePanel.component} />
      </div>
    </div>
  {/if} -->

  <div
    class="h-w overflow-hidden w-7 border-x items-center justify-center border-black bg-sprotBg"
  >
    <!-- <div
        class="w-5 h-5 flex mx-auto overflow-hidden items-center justify-center text-sprotText border-b border-sprotBg1"
      >
        <span class="w-full h-6 flex items-center justify-center">
          <Close color="white" size={8} />
        </span>
      </div> -->

    <div class="overflow-hidden flex-1 items-center flex-col bg-sprotBg">
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
          name={tool.name}
          activeGroup={tool.active}
          on:selection={(e) => onSelection(e, tool.id)}
          disabled={disabledAll}
        />
      {/each}
      <!-- {#each tools as tool, index (index)}
        {#if panel.selected}
          <div
            class="w-full h-6 border-b border-sprotBg1 group text-[8px] text-sprotText bg-sprotBgLight20"
          >
            <BitmapButton
              overflow={panel.isDropdown}
              className="z-10 inline-flex w-full h-6 items-center justify-center {panel.active &&
                'border-sprotPrimary bg-sprotPrimary hover:bg-sprotPrimary'}"
              on:click={() => onSetActivePanel(panel)}
            >
              <svelte:component this={panel.icon} color="white" size={12} />
            </BitmapButton>
          </div>
        {/if}
      {/each} -->
    </div>
    <BitmapButton
      className="w-6 h-6 mt-8 mx-auto border border-sprotBgLight20 flex items-center justify-center text-sprotText"
    >
      <MoreOptions color="white" size={9} />
    </BitmapButton>
  </div>

  <!-- <OptionsPanelsNotebook /> -->
</div>

<!-- <style lang="postcss">
  .sprot-panels {
    @apply w-64 text-sprotText font-normal pointer-events-auto border-r border-sprotBgLight20 bg-sprotBgLight20 transition-all border-b-0;
  }
</style> -->
