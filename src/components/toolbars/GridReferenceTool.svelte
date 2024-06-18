<script lang="ts">
  import RfpToolIcon from "$components/icons/tools/RFPToolIcon.svelte";
  import { onMount } from "svelte";
  import GridCanvasTool from "./GridCanvasTool.svelte";
  import DullButton from "$components/general/DullButton.svelte";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import { getAppViewController } from "$lib/stores";
  import type { SprotListButton } from "$lib/types";
  import { alignments, arrangmemts } from "$lib/api";

  export let disabledAll: boolean = false;

  interface SprotRFP {
    id: number;
    active: boolean;
  }

  let referenceKinds: SprotListButton[] = [
    { active: true, id: 1, name: "Reference Point", icon: RfpToolIcon },
    { active: false, id: 2, name: "Point name position", icon: RfpToolIcon },
  ];

  let referencePoints: SprotRFP[] = [];
  let appState: SprotAppViewController | null = null;

  const init = () => {
    getAppViewController((app) => (appState = app));

    for (let index = 1; index <= 9; index++) {
      referencePoints = [...referencePoints, { id: index, active: false }];
    }
  };

  onMount(init);

  const onRefenceKind = (id: number) => {
    if (id >= referenceKinds.length || id < 0) {
      return;
    }

    referenceKinds = referenceKinds.map((rf) => {
      rf.active = rf.id === id;
      return rf;
    });
  };

  const onSetActive = (id: number) => {
    referencePoints = referencePoints.map((rfp) => {
      if (rfp.id === id) {
        rfp.active = !rfp.active;

        if (appState) {
          let state = appState.get_draw_state();
          appState.set_draw_state(state.set_rfp(rfp.active ? id : 9)); // 9 is for custom rfp
        }
      } else {
        rfp.active = false;
      }
      return rfp;
    });
  };
</script>

<div
  class="flex gap-1 h-full bg-sprotBgLight20 text-sprotText pointer-events-auto p-1 border-rl border-sprotBg1"
>
  <GridCanvasTool
    disabled={disabledAll}
    name="RFP"
    tools={referenceKinds}
    on:selection={(e) => onRefenceKind(e.detail)}
  />

  <div class=" flex h-full gap-1 items-center">
    <div
      class="grid grid-cols-3 grid-rows-3 gap-[2px] items-center min-w-14 min-h-14 max-w-14 max-h-14 border flex-1 {disabledAll
        ? 'border-sprotBg'
        : 'border-sprotPrimary25 hover:border-sprotPrimary'}"
    >
      {#each referencePoints as rfp (rfp.id)}
        <DullButton
          className="sprot-center group h-full"
          on:click={() => {
            if (!disabledAll) {
              onSetActive(rfp.id);
            }
          }}
        >
          <span
            class="inline-flex min-w-1 min-h-1 max-w-1 max-h-1 rounded-lg {rfp.active &&
              'bg-sprotPrimary scale-[3]'} {disabledAll
              ? 'bg-sprotBg'
              : 'bg-sprotPrimary group-hover:bg-sprotPrimary group-hover:scale-[2.5] transition-all duration-200'}"
          ></span>
        </DullButton>
      {/each}
    </div>

    <!-- <div class="min-w-11 flex flex-col h-full group border border-transparent">
      <GridCanvasTool featured name="Alignment" tools={alignments} />
      <GridCanvasTool featured name="Arrangments" tools={arrangmemts} />
    </div> -->
  </div>
</div>
