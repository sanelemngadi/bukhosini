<script lang="ts">
    import { MoreOptions, Panels } from "$components/icons";
    import { onMount } from "svelte";
    import Seperator from "./Seperator.svelte";
  
    import type { SprotCanvasTool } from "$lib/tools/base";
    import { getAppViewController, getCanvasTools, getTargetTool, setActionTool } from "$lib/stores";
    import ToolItem from "./tools/ToolItem.svelte";
    import type { SprotToolGroup } from "$lib/types";
    import type { SprotAppViewController } from "$wasm/sprot_app";
  
    let targetTool: SprotCanvasTool | null = null;
    let groupTools: SprotToolGroup[] = [];
    let appState: SprotAppViewController | null = null;
    let toolsActive: boolean = true;
  
    onMount(() => {
      getTargetTool(tool => targetTool = tool);
      getAppViewController(vm => appState = vm);
  
      getCanvasTools(tools => { 
        groupTools = tools; 
      }); 
    });

  const onSelection = (id: number) => {
    
    if(appState) {
        setActionTool(appState, id);
      }
  }
  
    const onPanels = () => { }

    const onToggleActivateTools = () => {
      toolsActive = !toolsActive;
    }
</script>

<div class="flex flex-col justify-between w-[30.4px] items-center py-1 rounded-sm bg-sprotBg border border-r-0 border-sprotBgLight60">
  <div class="tools {toolsActive ? "border-sprotBgLight60ll" : "border-transparent"} h-full rounded-sm sprot-pointer-events">
      <div class="flex flex-col items-center gap-2 h-full">
        {#if toolsActive}
          <div 
            class="flex flex-col gap-2 h-full">
            <Seperator vertical />
            <div class="sprot-toolsContiner flex items-center gap-2 flex-col">
                {#each groupTools as tool (tool.name) }
                  <ToolItem 
                    tools={tool.tools} 
                    on:selection={({ detail }) => onSelection(detail.value) } />
                {/each}
            </div>
            <div class="h-full flex-1"></div>
            <Seperator vertical />
            <button class="mt-auto w-6 h-6 mx-1 flex items-center border border-sprotPrimary justify-center hover:bg-sprotPrimary rounded-sm">
              <MoreOptions color="white" size={10} /> 
            </button>
            <button 
              class="w-6 h-6 mx-1 flex items-center border border-sprotPrimary justify-center hover:bg-sprotPrimary rounded-sm" 
              on:click={onPanels}>
              <Panels color="white" size={10} /> 
            </button>
          </div>
        {/if}

    </div>
  </div>
</div>