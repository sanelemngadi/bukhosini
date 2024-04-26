<script lang="ts">
  import { ISprotMenubarItemKind, SprotToolbar } from "$lib/menus/toolbar";
  import { onMount } from "svelte";
  
    import Toolbar from "./Toolbar.svelte";
    import { CopyIcon, CutIcon, ExportDfxIcon, ExportDwgIcon, ExportPdfIcon, ExportShpIcon, NewFileIcon, OpenFileIcon, PasteIcon, PrintIcon, RedoIcon, SaveIcon, UndoIcon } from "$components/icons/toolbars";
    import SnappingModes from "./SnappingModes.svelte";
    import ToggleOperations from "./ToggleOperations.svelte";
    import BitmapButton from "$components/general/BitmapButton.svelte";
  import Seperator from "./Seperator.svelte";
  import ToolPresets from "./ToolPresets.svelte";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { getTargetTool } from "$lib/stores";

    let toolbar: SprotToolbar = new SprotToolbar();
    let container: HTMLElement;
    let targetTool: SprotCanvasTool;

    const init = () => {
      getTargetTool(tool => targetTool = tool);

      toolbar = new SprotToolbar();
      toolbar.addTool("New", NewFileIcon);
      toolbar.addTool("Open", OpenFileIcon);
      toolbar.addTool("Save", SaveIcon);
      toolbar.addTool("Print", PrintIcon);
      toolbar.addSeperator();
      toolbar.addTool("Copy", CopyIcon);
      toolbar.addTool("Cut", CutIcon);
      toolbar.addTool("Paste", PasteIcon);
      toolbar.addSeperator();
      toolbar.addTool("Undo", UndoIcon);
      toolbar.addTool("Redo", RedoIcon);
      toolbar.addSeperator();
      toolbar.addTool("Export PDF", ExportPdfIcon);
      toolbar.addTool("Export DFX", ExportDfxIcon);
      toolbar.addTool("Export DWG", ExportDwgIcon);
      toolbar.addTool("Export SHP", ExportShpIcon);
      toolbar.addSeperator();
      toolbar.addControl("Snapping", SnappingModes);
      toolbar.addSeperator();
      toolbar.addControl("toggling", ToggleOperations);


      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      }
    }

    onMount(init);

    const onResize = async () => {
      if(container && toolbar) {
        let sz = { w: container.offsetWidth, h: container.offsetHeight };
        toolbar = toolbar.onResize(sz.w);
      }
    }
  </script>


  <div class="flex w-full gap-1 justify-between h-10 border border-sprotBg1 bg-sprotBg text-sprotText text-[12px] pointer-events-auto">
    <!-- <div class="flex items-center">
      <div class="w-1"></div>
      <p class="text-sprotBgLight60">Sprot</p>
      <Seperator />
      
      {#if targetTool}
        <ToolPresets tool={targetTool} />
      {/if}

      <Seperator vertical={false} />
    </div> -->


    <div class="sprot-canvas-tools w-full" bind:this={container}>
      <Toolbar pill={false}>
        {#each toolbar.getToolbarItems() as tool (tool.id) }
          {#if tool.fit}
            {#if tool.kind === ISprotMenubarItemKind.Button}
              <BitmapButton className="h-7 w-8">
                <svelte:component this={tool.icon} color="white" size={16}  />
              </BitmapButton>
              {:else}
              <svelte:component this={tool.icon}  />
            {/if}
          {/if}
        {/each}
      </Toolbar>
    </div>
  </div>