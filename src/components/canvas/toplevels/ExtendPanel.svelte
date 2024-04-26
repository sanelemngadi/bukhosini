<script lang="ts">
    import MoreOptions from "$components/icons/MoreOptions.svelte";
    import { getAppViewController } from "$lib/stores";
    import type { SprotCanvasTool } from "$lib/tools/base";
    import { None, Some, type SprotOption } from "$lib/utils";
    import type { SprotAppViewController } from "$wasm/sprot_app";
    import { onMount } from "svelte";
  // import type { SprotTool } from "$lib/types";
    export let tool: SprotCanvasTool;

    let appState: SprotOption<SprotAppViewController> = None;

    onMount(() => {
      getAppViewController(app => appState = Some(app));
    });

    const onExtend = () => {
      // setTargetModifierTool(null)
    }
  
  </script>


{#if tool}
<div class="sprot-drawing_panel px-2 text-sprotText rounded-sm z-10 border border-sprotPrimary bg-black text-[12px] opacity-65 hover:opacity-100">
    <div class="flex w-full h-8 items-center justify-between">
        <h3 class="font-semibold">Extend</h3>
        <button class="w-5 h-5 flex items-center  border border-sprotPrimary justify-center hover:bg-sprotPrimary rounded-3xl">
          <MoreOptions color="white" size={8} /> 
      </button>
    </div>

    <div class="py-4">
       distance and direction
   </div>

   <div class="py-2 grid gap-1 grid-cols-3">
      <button class="border border-sprotPrimary rounded-sm flex items-center justify-center px-6 h-5 hover:bg-sprotPrimary">Copy</button>
      <button class="border border-sprotPrimary rounded-sm flex items-center justify-center px-6 h-5 hover:bg-sprotPrimary">Reset</button>
      <button 
        class="border border-sprotBg bg-sprotPrimary rounded-sm flex items-center justify-center px-6 h-5 hover:border-sprotPrimary hover:bg-sprotBgLight20"
        on:click={onExtend}>Extend</button>
   </div>
    
</div>
{/if}