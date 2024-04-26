<script lang="ts">
    import { cadTools } from "$lib/api/cadtools";
    import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
    import { getAppViewController, setTargetModifierTool } from "$lib/stores";
    import { Some } from "$lib/utils";
    import type { SprotAppViewController, SprotEntity } from "$wasm/sprot_app";
    import { onMount } from "svelte";
    let appState: SprotAppViewController | null = null;
    let selection: SprotEntity[] = [];

    onMount(() => {
      getAppViewController(app => appState = app);
    })

    const onSelectionModifier = (tool: SprotCanvasModifierTool) => {
      if(appState) {
        setTargetModifierTool(appState, Some(tool), selection);
      }
      
    }
  </script>

  <h2>CAD</h2>
  <div class="pt-2 flex justify-start items-center gap-1 border-t border-sprotBgLight60">
      {#each cadTools as cad (cad.id) }
          <button 
              class="h-6 w-6 flex items-center justify-center rounded-sm hover:bg-sprotPrimary"
              on:click={() => onSelectionModifier(cad)}>
              <svelte:component this={cad.icon} color={"white"} size={12} />
          </button>                
      {/each}
  </div>