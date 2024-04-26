<script lang="ts">
    import { transformationTools } from "$lib/api/transformations";
    import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
    import { getAppViewController, getCurrentSelection, setTargetModifierTool } from "$lib/stores";
    import type { SprotCanvasTool } from "$lib/tools/base";
    import type { SprotActions } from "$lib/types";
    import { None, Some, type SprotOption } from "$lib/utils";
    import type { SprotAppViewController, SprotEntity } from "$wasm/sprot_app";
    import { onMount } from "svelte";
    // export let tool: SprotCanvasTool | null = null;
    // export let onAddPane: SprotOption<(panel: SprotCanvasModifierTool) => void> = None;
    let appState: SprotAppViewController | null = null;

    onMount(() => {
      getAppViewController(app => appState = app);
    })

    const onSelectionModifier = (tool: SprotCanvasModifierTool) => {
      // onAddPane.Some(setPane => setPane(tul));
      // console.log("tool: ", tul);

      if(appState) {
        // setTargetModifierTool(appState, Some(tool), selection);
      }
      
    }
</script>
  
<h2>Transformations</h2>
<div class="pt-2 flex justify-start items-center gap-1 border-t border-sprotBgLight60">
    {#each transformationTools as transformation (transformation.id) }
        <button 
            class="h-6 w-6 flex items-center justify-center rounded-sm hover:bg-sprotPrimary"
            on:click={() => onSelectionModifier(transformation)}>
            <svelte:component this={transformation.icon} color={"white"} size={14} />
        </button>                
    {/each}
</div>