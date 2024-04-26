<script lang="ts">
    import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
    import { getAppViewController, getSelectionOperations, setTargetModifierTool } from "$lib/stores";
    import type { SprotCanvasTool } from "$lib/tools/base";
    import { SprotActions } from "$lib/types";
    import { None, Some, SprotOption } from "$lib/utils";
    import { SprotEntityKind, type SprotEntity, SprotAppViewController } from "$wasm/sprot_app";
    import { onMount } from "svelte";
    
    export let tool: SprotCanvasTool;
    // let hidden = true; 
    let selectionOperations: SprotCanvasModifierTool[] = [];

    // let selection: SprotEntity[] = [];
    let isSelectionEmpty: boolean = true;


    // let currentPane: number = 0;
    
    let appState: SprotOption<SprotAppViewController> = None;

    onMount(() => {
        selectionOperations = getSelectionOperations();
        

        getAppViewController(app => appState = Some(app));

        window.addEventListener("mouseup", onShowSelection);

        return () => {
            window.removeEventListener("mouseup", onShowSelection);
        }
    })

    const onShowSelection = () => {
        // hidden = false;
        // tool.selection = true;
    }

</script>


{#if tool && tool.id === SprotActions.ToolSelection }
    <div class="sprot-drawing_panel {isSelectionEmpty ? "hidden" : "block"} px-4 py-2 text-sprotText rounded-sm z-10 border border-sprotBgLight60 bg-black text-[12px] opacity-100 hover:opacity-100">
  </div>
{/if}