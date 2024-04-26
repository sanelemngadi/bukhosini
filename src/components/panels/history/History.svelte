<script lang="ts">
    import { getActionDocument, getAppViewController } from "$lib/stores";
    import type { SprotAppViewController, SprotClientHistory, SprotDocumentState } from "$wasm/sprot_app";
    import { onMount } from "svelte";
    import HistoryItem from "./HistoryItem.svelte";
    import { None } from "$lib/utils";
    // let document: SprotDocumentState | null;
    let history: SprotClientHistory[] = [];
    let currentIndex: number = -1;
    let appState: SprotAppViewController | null = null;
  
    onMount(() => { 
        getAppViewController(app => {
            history = app.get_client_history();
            appState = app;
        })

        getActionDocument(doc=>{
            history = [];

            if(appState) {
                history = appState.get_client_history();
            }
        })
    })

    const onMouseEnter = (index: number) => {
        currentIndex = index;
    }
</script>
  
<h2>History</h2>
<h2>last 100 History items</h2>
  
<div class="overflow-auto" style="max-height: calc(100vh - 120px);">
    <ul on:mouseleave={() => currentIndex = -1}>
        {#each history as hist, index (hist.id)}
            <HistoryItem history={hist} on:mouseenter={() => onMouseEnter(index)} active={index <= currentIndex}/>
        {/each}
    </ul>

    <!-- <div class="sprot">
        <button>Buildings</button>
    </div> -->
</div>

<div class="{currentIndex + 1 <= 0 ? "opacity-0" : ""} px-2 h-8 text-center">Double Click to Undo{currentIndex + 1 <= 1 ? ` ${currentIndex + 1} Action` : ` ${currentIndex + 1} Actions`}</div>