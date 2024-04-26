<script lang="ts">
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import { alignments } from "$lib/api";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { onMount } from "svelte";

  export let tool: SprotCanvasTool | null = null;

  onMount(() => {
    tool = null;
  });

</script>


<div class="text-left p-1 shadow-md">
    <h2 class="pb-1">Alignment</h2>
    <div class="p-1 px-3">
        <h2>Horizontal</h2>
        <div class="py-2 flex justify-start items-center gap-1">
            {#each alignments as alignment (alignment.id) }
                {#if alignment.kind === "horizontal"}
                    <BitmapButton >
                        <svelte:component this={alignment.icon} color="white" size={12} />
                    </BitmapButton>  
                {/if}                  
            {/each}
        </div>
    </div>
    <div class="p-1 px-3">
        <h2>Vertical</h2>
        <div class="py-2 flex justify-start items-center gap-1">
            {#each alignments as alignment (alignment.id) }
                {#if alignment.kind === "vertical"}
                    <BitmapButton >
                        <svelte:component this={alignment.icon} color="white" size={12} />
                    </BitmapButton>  
                {/if}                  
            {/each}
        </div>
    </div>
    <div class="p-1 px-3">
        <h2>Distribution</h2>
        <div class="py-2 flex justify-start items-center gap-1">
            {#each alignments as alignment (alignment.id) }
                {#if alignment.kind === "distribution"}
                    <BitmapButton >
                        <svelte:component this={alignment.icon} color="white" size={12} />
                    </BitmapButton>  
                {/if}                  
            {/each}
        </div>
    </div>
    
    <!-- <div class="py-2 grid gap-1 grid-cols-3">
        <BitmapButton class="border border-sprotPrimary rounded-sm flex items-center justify-center px-6 h-5 hover:bg-sprotPrimary">Copy</BitmapButton>
        <BitmapButton class="border border-sprotPrimary rounded-sm flex items-center justify-center px-6 h-5 hover:bg-sprotPrimary">Reset</BitmapButton>
        <BitmapButton 
          class="border border-sprotBg bg-sprotPrimary rounded-sm flex items-center justify-center px-6 h-5 hover:border-sprotPrimary hover:bg-sprotBgLight20"
          >Align</BitmapButton>
    </div> -->

</div>