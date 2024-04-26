<script lang="ts">
    import MoreOptions from "$components/icons/MoreOptions.svelte";
    import { getAppViewController, setActionTool } from "$lib/stores";
  import { SprotMeasureTool } from "$lib/tools";
    import type { SprotCanvasTool } from "$lib/tools/base";
    import { SprotActions } from "$lib/types";
    export let tool: SprotCanvasTool;

    import {  SprotAppViewController } from "$wasm/sprot_app";
    import { onMount } from "svelte";

    let appState: SprotAppViewController | null = null;
    let distance: number = 0;

    onMount(() => {
      getAppViewController(app => appState = app);
      if(tool.id === SprotActions.ToolMeasure && tool instanceof SprotMeasureTool) {
        const ts: SprotMeasureTool = tool;
          tool.onMesure(() => {
            distance = ts.distance();
  
            console.log("e");
            
          })
      }
    })

    const onReset = () => {
    }

   const onClickDone = () => {
    if(appState) {
      setActionTool(appState, SprotActions.ToolSelection)
    }
   }
  
  </script>


{#if tool}
<div class="sprot-drawing_panel px-2 text-sprotText rounded-sm z-10 border border-sprotPrimary bg-black text-[12px] opacity-55 hover:opacity-100">
    <div class="flex w-full h-8 items-center justify-between">
        <h3 class="font-semibold">Measure Distance</h3>
        <button class="w-5 h-5 flex items-center  border border-sprotPrimary justify-center hover:bg-sprotPrimary rounded-3xl">
          <MoreOptions color="white" size={8} /> 
      </button>
    </div>

    <div class="py-4">
       distance: {distance.toFixed(3)}m
   </div>

   <div class="py-2 grid gap-1 grid-cols-3">
      <button 
        class="border flex items-center justify-center px-6 h-5 rounded-sm  border-sprotPrimary hover:bg-sprotPrimary"
        on:click={onReset}>Reset</button>
      <button 
        class="border flex items-center justify-center border-sprotBg bg-sprotPrimary h-5 rounded-sm px-6 py-[2px] hover:border-sprotPrimary hover:bg-sprotBgLight20"
        on:click={onClickDone}>Done</button>
      <button 
        class="border flex items-center justify-center border-sprotBg bg-sprotPrimary h-5 rounded-sm px-6 py-[2px] hover:border-sprotPrimary hover:bg-sprotBgLight20"
        on:click={onClickDone}>Print</button>
    </div>
</div>
{/if}