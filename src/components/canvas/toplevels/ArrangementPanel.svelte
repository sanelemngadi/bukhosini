<script lang="ts">
  import { arrangmemts } from "$lib/api";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { onMount } from "svelte";
  export let tool: SprotCanvasTool | null = null;

  onMount(() => {
    tool = null;
  });
</script>

<h2>Arrangment tools</h2>

<div class="pt-2 flex justify-start items-center gap-1 border-t border-sprotBgLight60">
    {#each arrangmemts as arrangmemt (arrangmemt.id) }
        <button 
            class="h-6 w-6 flex items-center justify-center rounded-sm hover:bg-sprotPrimary">
            <svelte:component this={arrangmemt.icon} color={"white"} size={14} />
        </button>                
    {/each}
</div>