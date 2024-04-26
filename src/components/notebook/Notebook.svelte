<script lang="ts">
    import type { ISprotNotebookPage } from "$lib/notebook";
    import { onMount } from "svelte";
    import NotebookTab from "./NotebookTab.svelte";
//   import { getCurrentSelection } from "$lib/stores";
//   import { SprotEntityKind } from "$wasm/hello_wasm";

    export let pages: ISprotNotebookPage[];
    export let onSelection: (id: number) => void;
    let tabs: { id: number, name: string, active: boolean }[];
    let activePage: ISprotNotebookPage | null = null;
    

    onMount(() => {
        
    });

    $:{
        if (pages.length > 0) {
            tabs = pages.map(page => {
                return { id: page.id, name: page.name, active: page.active }
            });

            activePage = pages.find(page => page.active) || pages[0];
        } else {
            activePage = null;
        }
    }
</script>

{#if activePage}

<div class="h-full flex flex-col">
    <div class="sprot-tabs flex items-center gap-1 h-8 border-b border-sprotBgLight60" style="padding: 8px 8px 8px;">
        {#each tabs as tab (tab.id) }
            <NotebookTab label={tab.name} active={tab.active} on:click={() => onSelection(tab.id)} />
        {/each}
    </div>
    
    <div class="overflow-hidden sprot-pages flex-1">
        <svelte:component this={activePage.panel}/>
    </div>
</div>
{/if}