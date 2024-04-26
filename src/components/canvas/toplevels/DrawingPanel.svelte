<script lang="ts">
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { onMount } from "svelte";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import { getAppViewController } from "$lib/stores";
  
  export let tool: SprotCanvasTool;
  let appState: SprotAppViewController | null = null;

  onMount(() => {
    getAppViewController(app => appState = app);
  });

  const onInflate = () => {
    if(appState && tool) {
        tool.inflate = appState;
    }
  }
  const onConstraints = () => {
    if(appState && tool) {
        tool.constraints = appState;
    }
  }

</script>

{#if tool}
<!-- <div class="sprot-drawing_panel px-2 text-sprotText rounded-sm z-10 border border-sprotPrimary bg-black text-[12px] opacity-65 hover:opacity-100">
    <div class="flex w-full h-8 items-center justify-between">
        <h3 class="font-semibold">Drawing: {tool.name}</h3>
    </div>

    <div class="py-2 flex justify-start items-center gap-[2px]">
        <button 
            class="h-6 w-6 flex items-center justify-center rounded-[1px] hover:bg-sprotPrimary { tool.constraints && 'bg-sprotPrimary'}"
            title={"Constriant / lock geometry"} 
            on:click={onConstraints}>
            <Constraints color={"white"} size={16} />
        </button>  
        <button 
            class="h-6 w-6 flex items-center justify-center rounded-[1px] hover:bg-sprotPrimary { tool.inflate && 'bg-sprotPrimary'}"
            title={"Inflate "+ tool.name} 
            on:click={onInflate}>
            <Inflate color={"white"} size={16} />
        </button>  
    </div>
</div> -->
{/if}