<script lang="ts">
    import { DropdownOutline, MoreOptions } from "$components/icons";
    import { closePanels, getPanels, setActionColor, setActivePanel } from "$lib/stores";
    import { onMount, onDestroy } from "svelte";
    import { fly } from "svelte/transition";
    import type { ISprotPanel, SprotTSColor } from "$lib/types";
    // import { panels } from "$lib/api";
    import Close from "$components/icons/Close.svelte";
    import BitmapButton from "$components/general/BitmapButton.svelte";

    let open: boolean = false;
    let panelsDiv: HTMLDivElement;
    let activePanel: ISprotPanel | null = null;
    let panels: ISprotPanel[] = [];
    // let activePanel: ISprotPanel | null = null;
    
    // interface Color {
    //     id: number,
    //     r: number,
    //     g: number,
    //     b: number,
    // };

    let colors: SprotTSColor[] = [];
    // let panelsPinned: boolean = false;

    const init = () => {
        getPanels(panel => { 
            panels = panel; 
            activePanel = panels.find(p => p.active && p.selected) || null;
        });
    
        // console.log("panels mounted");
    
        for(let i = 0; i < 20; i++) {
            const r = Math.random() * 255;
            const g = Math.random() * 255;
            const b = Math.random() * 255;
    
            const color = { id: i, r, g, b, alpha: 255};
            colors = [...colors, color];
        }
        
    
        window.addEventListener("mousedown", onMouseDown);
    
        return () => {
            window.removeEventListener("mousedown", onMouseDown);
            // console.log("detroyed 12");
        }

    }

    onMount(init);

    onDestroy(() => {
        activePanel = null;

        // console.log("detroyed 1");
        
    });


    $: {
        // console.log("open: ", open);
        if(!open) {
            activePanel = null;
        }
        
    }
    

    const onMouseDown = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;

        // if(!panelsPinned && target && panelsDiv && open) {

        //     // if the panels are open
        //     // if the openned panel is not pinned
        //     // if the is a mouse click target and that target is not the descendent of
        //     // the panelsDiv, the close the panels

        //     if(!panelsDiv.contains(target)) {
        //         closePanels();
        //     }
        // }
    }

    const onSetActivePanel = (active: ISprotPanel) => {
        // activePanel = active;
        setActivePanel(active.id);
    }

    const onClosePanels = () => {
        closePanels();
    }

    // const onCloseClicked = () => {
    //     closePanels();
    // }

    const onSetActionColor = (color: SprotTSColor) => {
        setActionColor(color);
    }
</script>

<!-- {#if open}     -->
<div class="flex h-full border border-sprotBgLight60 pointer-events-auto">
    {#if activePanel}
    <div 
        bind:this={panelsDiv}
        class="sprot-panels flex flex-col h-full overflow-hidden sprot-pinned" 
        transition:fly={ { duration: 250, delay: 0, x: 200 }} >
        <div class="flex items-center justify-between h-6 border-b border-sprotBgLight60">
            <h2 class="text-center px-4 font-bold">{activePanel ? activePanel.name : "Panels"}</h2>
            <div class="flex-1 h-2 bg-sprotTextl">

            </div>
            <div class="w-10 flex items-center justify-center">
                <BitmapButton 
                    className="ml-auto w-4 h-4 flex items-center relative justify-center text-sprotText"
                    on:click={onClosePanels}>
                    <span class="w-4 h-4 flex items-center justify-center -rotate-90">
                        <DropdownOutline color="white" size={16} />
                    </span>
                    <span class="w-4 h-4 absolute right-1 top-0 flex items-center justify-center -rotate-90">
                        <DropdownOutline color="white" size={16} />
                    </span>
                </BitmapButton>
            </div>
        </div>
        
            <div class="overflow-hidden flex-1">
            <svelte:component this={activePanel.component} />
        </div>
    </div>
    {/if}

    <div class="h-full overflow-hidden w-7 border-r items-center justify-center border-sprotBgLight60 bg-sprotBg">
        <div class="w-5 h-5 flex mx-auto overflow-hidden items-center justify-center text-sprotText border-b border-sprotBgLight60">
            <span class="w-full h-6 flex items-center justify-center">
                <Close color="white" size={10} />
            </span>
        </div>
        <div class="h-fullk overflow-hidden flex-1 items-center w-7 py-1 gap-1 border-r border-sprotBgLight60 border-l-0 flex flex-col border-b-0 bg-sprotBg">
            {#each panels as panel, index (index) }
                {#if panel.selected}
                <div class="w-5 h-5 border-p group flex items-center text-[8px] justify-center text-sprotText hover:rounded-[0px] transition-all duration-100">
                    <BitmapButton 
                        className="bg-sprotBgss z-10 inline-flex w-5 h-5 items-center border-none justify-center {panel.active && "border bg-sprotPrimary hover:bg-sprotPrimary"}"
                        on:click={() => onSetActivePanel(panel)}>
                        {#if panel.icon}
                            <svelte:component this={panel.icon} color="white" size={12} />
                        {:else}
                            {panel.name.slice(0, 2)}
                        {/if}
                    </BitmapButton>
                </div>
                {/if}
            {/each}
        </div>
        <BitmapButton className="w-6 h-6 mt-8 mx-auto border border-sprotBgLight20 flex items-center justify-center text-sprotText">
            <MoreOptions color="white" size={9} />
        </BitmapButton>
    </div>

    <div class="h-full items-center w-6 gap-2 flex flex-col border-b-0 bg-sprotBg relative">
        <div class="w-full min-h-6 h-6 flex items-center justify-center border-b border-sprotBgLight60 relative text-sprotText">
            <span class="w-4 h-4 flex items-center justify-center -rotate-90">
                <DropdownOutline color="white" size={12} />
            </span>
            <span class="w-4 h-4 absolute top-1/2 -translate-y-1/2 right-[6px] flex items-center justify-center -rotate-90">
                <DropdownOutline color="white" size={12} />
            </span>
        </div>
        <div class="w-4 h-4 border flex items-center justify-center text-sprotText" style="background-color: rgb({25}, {142}, {36});">
            <span class="w-4 h-4 border flex items-center justify-center rotate-180">
                <DropdownOutline color="white" size={16} />
            </span>
        </div>
        <div 
            class="h-full flex-1 items-center w-6 border border-sprotBgLight60 border-l-0 flex flex-col border-b-0 bg-sprotBg">
            {#each colors as color, index (index) }
                <button 
                    class="w-4 h-4 group hover:rounded-[2px] outline-2 hover:outline-sprotText outline outline-transparent rounded-none hover:z-10" 
                    on:click={() => onSetActionColor(color)}
                    draggable="true"
                    on:dragstart={(e) => {
                        e.preventDefault();
                        console.log("drag start");
                    }}
                    on:drag={() => console.log("on drag")}
                    on:dragend={() => console.log("drag end")}>
                    <div 
                        class="w-full h-full flex items-center text-[8px] justify-center text-sprotText "
                        style="background-color: rgb({color.r}, {color.g}, {color.b});"
                        draggable="true">
                        <span class="bg-sprotBgss z-10 opacity-0 group-hover:opacity-100 inline-flex w-2 items-center justify-center">{index}</span>
                    </div>
                </button>
                <div class="w-full border-b border-sprotBgLight60"></div>
            {/each}
        </div>
        <div class="w-4 h-4 border border-sprotBgLight20 flex items-center justify-center text-sprotText" style="background-color: rgb({32}, {34}, {36});">
            <DropdownOutline color="gray" size={16} />
        </div>
        <div class="sprot-overlay w-full h-full absolute top-0 left-0 bg-sprotBg opacity-30 pointer-events-none"></div>
    </div>
</div>
<!-- {/if} -->

<style lang="postcss">
    .sprot-panels {
        @apply w-60 text-sprotText font-normal pointer-events-auto border-r border-sprotBgLight60 p-0 bg-sprotBg transition-all border-b-0;
    }

    /* .sprot-unpinned {
        @apply absolute top-1 h-fit border border-sprotText;
    } */
</style>

