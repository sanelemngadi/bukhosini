<script lang="ts">
  import { DropdownOutline, MoreOptions } from "$components/icons";
  import {
    closePanels,
    getPanels,
    setActionColor,
    setActivePanel,
  } from "$lib/stores";
  import { onMount, onDestroy } from "svelte";
  import { fly, slide, scale } from "svelte/transition";
  import type { ISprotPanel, SprotTSColor } from "$lib/types";
  // import { panels } from "$lib/api";
  import Close from "$components/icons/Close.svelte";
  import BitmapButton from "$components/general/BitmapButton.svelte";

  let open: boolean = false;
  let panelsDiv: HTMLDivElement;
  let activePanel: ISprotPanel | null = null;
  let panels: ISprotPanel[] = [];

  let colors: SprotTSColor[] = [];
  // let panelsPinned: boolean = false;

  const init = () => {
    getPanels((panel) => {
      panels = panel;
      activePanel = panels.find((p) => p.active && p.selected) || null;
    });

    // console.log("panels mounted");

    for (let i = 0; i < 20; i++) {
      const r = Math.random() * 255;
      const g = Math.random() * 255;
      const b = Math.random() * 255;

      const color = { id: i, r, g, b, alpha: 255 };
      colors = [...colors, color];
    }

    window.addEventListener("mousedown", onMouseDown);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      // console.log("detroyed 12");
    };
  };

  onMount(init);

  onDestroy(() => {
    activePanel = null;

    // console.log("detroyed 1");
  });

  $: {
    // console.log("open: ", open);
    if (!open) {
      activePanel = null;
    }
  }

  const onMouseDown = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
  };

  const onSetActivePanel = (active: ISprotPanel) => {
    setActivePanel(active.id);
  };

  const onClosePanels = () => {
    closePanels();
  };

  const onSetActionColor = (color: SprotTSColor) => {
    setActionColor(color);
  };
</script>

<!-- {#if open}     -->
<div class="flex h-full border border-sprotBg1 pointer-events-auto">
  {#if activePanel}
    <div
      bind:this={panelsDiv}
      class="sprot-panels flex flex-col h-full overflow-hidden p-1"
    >
      <!-- transition:scale -->
      <div
        class="flex items-center justify-between h-6 border-b border-sprotBg1 bg-sprotBg1"
      >
        <h2 class="text-center px-4 font-bold">
          {activePanel ? activePanel.name : "Panels"}
        </h2>
        <div class="flex-1 h-2"></div>
        <div class="w-10 flex items-center justify-center">
          <BitmapButton
            className="ml-auto w-4 h-4 flex items-center relative justify-center text-sprotText"
            on:click={onClosePanels}
          >
            <Close size={8} />
          </BitmapButton>
        </div>
      </div>

      <div class="overflow-hidden flex-1 bg-sprotBg">
        <svelte:component this={activePanel.component} />
      </div>
    </div>
  {/if}

  <div
    class="h-full overflow-hidden w-7 border-x items-center justify-center border-black bg-sprotBg"
  >
    <!-- <div
      class="w-5 h-5 flex mx-auto overflow-hidden items-center justify-center text-sprotText border-b border-sprotBg1"
    >
      <span class="w-full h-6 flex items-center justify-center">
        <Close color="white" size={8} />
      </span>
    </div> -->
    <div class="overflow-hidden flex-1 items-center flex flex-col bg-sprotBg">
      {#each panels as panel, index (index)}
        {#if panel.selected}
          <div
            class="w-full h-6 border-b border-sprotBg1 group flex items-center text-[8px] justify-center text-sprotText hover:rounded-[0px] transition-all duration-100 bg-sprotBgLight20"
          >
            <BitmapButton
              className="z-10 inline-flex w-full h-6 items-center justify-center {panel.active &&
                ' bg-sprotBg1'}"
              on:click={() => onSetActivePanel(panel)}
            >
              {#if panel.icon}
                <svelte:component this={panel.icon} color="white" size={12} />
              {:else}
                {panel.name.slice(0, 2)}
              {/if}
            </BitmapButton>
          </div>
        {/if}
      {/each}
    </div>
    <BitmapButton
      className="w-6 h-6 mt-8 mx-auto border border-sprotBgLight20 flex items-center justify-center text-sprotText"
    >
      <MoreOptions color="white" size={9} />
    </BitmapButton>
  </div>

  <div
    class="h-full items-center w-6 gap-2 flex-col border-b-0 bg-sprotBgLight20 relative opacity-0 hidden"
  >
    <div
      class="w-full min-h-6 h-6 flex items-center justify-center border-b border-sprotBg1 relative text-sprotText"
    >
      <span class="w-4 h-4 flex items-center justify-center -rotate-90">
        <DropdownOutline color="white" size={12} />
      </span>
      <span
        class="w-4 h-4 absolute top-1/2 -translate-y-1/2 right-[6px] flex items-center justify-center -rotate-90"
      >
        <DropdownOutline color="white" size={12} />
      </span>
    </div>

    <div
      class="w-4 h-4 border flex items-center justify-center text-sprotText"
      style="background-color: rgb({25}, {142}, {36});"
    >
      <span class="w-4 h-4 border flex items-center justify-center rotate-180">
        <DropdownOutline color="white" size={16} />
      </span>
    </div>
    <div
      class="h-full flex-1 items-center w-6 border border-sprotBg1 border-l-0 flex flex-col border-b-0"
    >
      {#each colors as color, index (index)}
        <button
          class="w-4 h-4 group hover:rounded-[2px] outline-2 hover:outline-sprotText outline outline-transparent rounded-none hover:z-10"
          on:click={() => onSetActionColor(color)}
          draggable="true"
          on:dragstart={(e) => {
            e.preventDefault();
            console.log("drag start");
          }}
          on:drag={() => console.log("on drag")}
          on:dragend={() => console.log("drag end")}
        >
          <div
            class="w-full h-full flex items-center text-[8px] justify-center text-sprotText"
            style="background-color: rgb({color.r}, {color.g}, {color.b});"
            draggable="true"
          >
            <span
              class="z-10 opacity-0 group-hover:opacity-100 inline-flex w-2 items-center justify-center"
              >{index}</span
            >
          </div>
        </button>
        <div class="w-full border-b border-sprotBg1"></div>
      {/each}
    </div>
    <div
      class="w-4 h-4 border border-sprotBgLight20 flex items-center justify-center text-sprotText"
      style="background-color: rgb({32}, {34}, {36});"
    >
      <DropdownOutline color="gray" size={16} />
    </div>
    <div
      class="sprot-overlay w-full h-full absolute top-0 left-0 bg-sprotBg opacity-30 pointer-events-none"
    ></div>
  </div>
</div>

<!-- {/if} -->

<style lang="postcss">
  .sprot-panels {
    @apply w-64 text-sprotText font-normal pointer-events-auto border-r border-sprotBgLight20 bg-sprotBgLight20 transition-all border-b-0;
  }

  /* .sprot-unpinned {
        @apply absolute top-1 h-fit border border-sprotText;
    } */
</style>
