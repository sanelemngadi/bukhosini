<script lang="ts">
  import SurveyBoards from "$components/general/statusbar/SurveyBoards.svelte";
    import { CanvasMessage, Selection, ZoomToNormal } from "$components/icons";
  import Minus from "$components/icons/Minus.svelte";
  import Plus from "$components/icons/Plus.svelte";
  import Seperator from "$components/toolbars/Seperator.svelte";
    import { getAppViewController, getTargetTool } from "$lib/stores";
    import { getStatus } from "$lib/stores/status";
  import type { SprotAppViewController } from "$wasm/sprot_app";
    import { onMount } from "svelte";
  import Scaling from "./Scaling.svelte";

    let statusText: string = "Ready";

    let targetTool: string;
    let appState: SprotAppViewController | null = null;
    let container: HTMLElement;
    let mouse_entered = false;

    let mouseCoordinates: { x: number, y: number } = { x: 0.0, y: 0.0}

    onMount(() => {
        getStatus(status => statusText = status);
        getTargetTool(tool => { targetTool = tool.name; });

        getAppViewController(app => appState = app);

        container.addEventListener("mouseenter", () => {
            mouse_entered = true;
            console.log("enter container");
            
        });

        container.addEventListener("mouseleave", () => {
            mouse_entered = false;
            console.log("leave container");
            
        });

        
        window.addEventListener("mousemove",onMouseMove);
        return () => {
          window.addEventListener("mousemove",onMouseMove);
        }
    })

    const onMouseMove = () => {
      if (appState) {
          const {x, y} = appState.get_mouse_coordinates();

          mouseCoordinates = {x, y};
      }
    }

    const onZoomToNormal = () => {
      if(appState) {
        appState.zoom_to_normal();
      }
    }

</script>



<div class="sprot-statusbar sprot-text overflow-hidden pointer-events-auto text-[12px] w-full h-[24px] bg-sprotBg flex items-center gap-2 text-sprotText text-sm pr-1 border-x border-b border-sprotBgLight60" bind:this={container}>
    <button class="h-[18px] w-[18px] whitespace-nowrap min-w-[16px] hover:bg-sprotPrimary" on:click={onZoomToNormal} title="zoom to normal">
      <ZoomToNormal size={18} color="white" />
    </button>

    <SurveyBoards />
    <Seperator />
    <Scaling />

    <Seperator />


    <span class="text-[11px]">Coordinates</span>
    <div 
      class="sprot-coords">
      <span class="flex w-14">{mouseCoordinates.y.toFixed(3)}</span>
      <span>,</span>
      <span class="flex w-20">{mouseCoordinates.x.toFixed(3)}</span>
    </div>
    <Seperator />

    <span class="sprot-coords">
      {targetTool ? targetTool.charAt(0).toUpperCase() + targetTool.slice(1) + " Tool": ""}
    </span>
    <span class="sprot-coords">
      Buildings
    </span>
    <span class="sprot-coords">
      20 Duplicates
    </span>
    
    <Seperator />
    <span class="flex w-4"></span>
    <button class="inline-flex gap-2 items-center justify-center">
      <span class="inline-flex w-4 h-4 bg-sprotPrimary rounded-[50%] items-center justify-center">
        <CanvasMessage color="white" size={16} />
      </span>
      <span class="w-12 text-start inline-block">(10)</span>
    </button>

    <Seperator />

    <div class="w-full {mouse_entered && "sprot-request-attention"}">
        <p class="sprot-text">{statusText}</p>
    </div>
    <!-- <button class="flex items-center justify-center whitespace-nowrap shrink-0 h-[18px] w-[24px] bg-black">
      <Selection size={16} color="white" />
    </button> -->
  </div>

  <style lang="postcss">
    .sprot-text {
        @apply text-sprotText text-[12px] font-normal;
    }

    .sprot-coords {
      @apply inline-flex w-48 px-2 gap-1  items-center justify-center h-[18px] text-[10px] bg-sprotBg text-sprotText border border-sprotBgLight60 whitespace-nowrap;
    }
  </style>