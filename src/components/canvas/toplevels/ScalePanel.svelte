<script lang="ts">
    import MoreOptions from "$components/icons/MoreOptions.svelte";
  import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
    import { getAppViewController, setTargetModifierTool } from "$lib/stores";
    import type { SprotCanvasTool } from "$lib/tools/base";
    import type { SprotActions } from "$lib/types";
    import { None, Some, type SprotOption } from "$lib/utils";
    import type { SprotAppViewController } from "$wasm/sprot_app";
    import { onMount, type ComponentType } from "svelte";
  // import type { SprotTool } from "$lib/types";
    export let tool: SprotCanvasModifierTool;

    let appState: SprotOption<SprotAppViewController> = None;
      export let onAddPane: SprotOption<(panel: ComponentType, id: SprotActions) => void> = None;

    onMount(() => {
      getAppViewController(app => appState = Some(app));

      onAddPane = None;
    });

    const onScale = () => {
      // setTargetModifierTool(null)
    }
  
  </script>


{#if tool}
<div class="sprot-drawing_panel px-2 text-sprotText rounded-sm z-10 border border-sprotPrimary bg-black text-[12px] opacity-65 hover:opacity-100">
    <div class="flex w-full h-8 items-center justify-between">
        <h3 class="font-semibold">Scale Entity</h3>
        <button class="w-5 h-5 flex items-center  border border-sprotPrimary justify-center hover:bg-sprotPrimary rounded-3xl">
          <MoreOptions color="white" size={8} /> 
      </button>
    </div>

    <div class="py-4">
       size and reference point
   </div>

    <div class="py-2 grid gap-1 grid-cols-3">
      <button class="border border-sprotPrimary rounded-sm flex items-center justify-center px-6 h-5 hover:bg-sprotPrimary">Copy</button>
      <button class="border border-sprotPrimary rounded-sm flex items-center justify-center px-6 h-5 hover:bg-sprotPrimary">Reset</button>
      <button 
        class="border border-sprotBg bg-sprotPrimary rounded-sm px-2 py-[2px] hover:border-sprotPrimary hover:bg-sprotBgLight20"
        on:click={onScale}>Scale</button>
    </div>
    
</div>
{/if}