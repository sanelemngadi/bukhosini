<script lang="ts">
    import { SprotMoveTool } from "$lib/modifiers";
    import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
    import { getAppViewController, setActionTool, setTargetModifierTool } from "$lib/stores";
    import { SprotActions } from "$lib/types";
    import { None, Some, type SprotOption } from "$lib/utils";
    import type { SprotAppViewController, SprotEntity } from "$wasm/sprot_app";
    import { onMount } from "svelte";
  // import type { SprotTool } from "$lib/types";
    export let tool: SprotCanvasModifierTool;
    export let onAddPane: SprotOption<(panel: SprotCanvasModifierTool) => void> = None;

    let appState: SprotOption<SprotAppViewController> = None;

    let entity: SprotEntity | null = null; 

    onMount(() => {
      getAppViewController(app => appState = Some(app));
      onAddPane = None;
    });

    const onMove = () => {
      // setTargetModifierTool(null)

      appState.Some(app => {
        setTargetModifierTool(app, None, []);
        setActionTool(app, SprotActions.ToolSelection);
      });
    }

    // 
  
  </script>


{#if tool}
<div class="sprot-drawing_panel px-2">
    <div class="flex w-full h-8 items-center justify-between">
        <h3 class="font-semibold">Move Entity</h3>
    </div>

    <div class="py-4 flex gap-4">
   </div>

   <div class="py-2 grid gap-1 grid-cols-3">
      <button class="btn btn-primary">Copy</button>
      <button class="btn">Reset</button>
      <button 
        class="btn border-sprotBg bg-sprotPrimary hover:border-sprotPrimary hover:bg-sprotBgLight20"
        on:click={onMove}>Move</button>
  </div>
    
</div>
{/if}

<style lang="postcss">
  .sprot-drawing_panel {
    @apply text-sprotText rounded-sm z-10 border border-sprotPrimary bg-black text-[12px] opacity-65 hover:opacity-100;
  }

  .btn {
    @apply border rounded-sm flex items-center justify-center px-6 h-5 
  }

  .btn-primary {
    @apply border-sprotPrimary hover:bg-sprotPrimary;
  }
</style>


