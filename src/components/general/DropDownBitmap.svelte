<script lang="ts">
  import PopupMenuItem from "$components/toolbars/tools/PopupMenuItem.svelte";
  import type { ComponentType } from "svelte";

  export let expanded = false;
  export let pane: ComponentType | null = null;

</script>
<button 
    class="sprot-canvas-tool items-start relative group"
    on:mouseenter>
    <slot name="bitmap"/>
    
    {#if pane} 
        <div class="popup flex flex-col absolute top-5 left-0 min-w-52 {expanded && "sprot-active"}">
            <div class="h-1 bg-transparent"></div>
            <div class="bg-sprotBg border border-sprotBgLight60 p-[2px] rounded-sm z-20">
                <svelte:component this={pane} />
            </div>
        </div>
    {/if}
</button>

<style lang="postcss">
    .popup {
        /* @apply hidden opacity-0 pointer-events-none; */
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        /* transition: all 250ms 350ms ease-in-out; */
    }

    .popup.sprot-active {
        visibility: visible;
        opacity: 1;
        pointer-events: all;
        transition: visibility 200ms 200ms ease-in-out;
    }
</style>