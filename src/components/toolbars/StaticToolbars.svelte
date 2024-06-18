<script lang="ts">
  import { ISprotMenubarItemKind, SprotToolbar } from "$lib/menus/toolbar";
  import { onMount } from "svelte";

  import {
    CopyIcon,
    CutIcon,
    ExportPdfIcon,
    NewFileIcon,
    OpenFileIcon,
    PasteIcon,
    PrintIcon,
    RedoIcon,
    SaveIcon,
    UndoIcon,
  } from "$components/icons/toolbars";
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { getAppViewController, getTargetTool } from "$lib/stores";
  import ExportDfxIcon from "$components/icons/toolbars/ExportDFXIcon.svelte";
  import ExportDwgIcon from "$components/icons/toolbars/ExportDWGIcon.svelte";
  // import ExportPdfIcon from "$components/icons/toolbars/ExportPDFIcon.svelte";
  import ExportShpIcon from "$components/icons/toolbars/ExportSHPIcon.svelte";
  import Seperator from "./Seperator.svelte";
  import type { SprotAppViewController } from "$wasm/sprot_app";

  export let disabledAll: boolean = false;

  let toolbar: SprotToolbar = new SprotToolbar();
  let container: HTMLElement;
  let targetTool: SprotCanvasTool;
  let appState: SprotAppViewController | null = null;

  const init = () => {
    getTargetTool((tool) => (targetTool = tool));
    getAppViewController((app) => (appState = app));

    toolbar = new SprotToolbar();
    // toolbar.addTool("New", NewFileIcon);
    // toolbar.addTool("Open", OpenFileIcon);
    toolbar.addTool("Save", SaveIcon);
    // toolbar.addTool("Print", PrintIcon);
    // toolbar.addSeperator();
    // toolbar.addTool("Copy", CopyIcon);
    // toolbar.addTool("Cut", CutIcon);
    // toolbar.addTool("Paste", PasteIcon);
    // toolbar.addSeperator();
    toolbar.addTool("Undo", UndoIcon, () => {
      if (appState) {
        appState.undo_last_actions();
        console.log("undo");
      }
    });
    toolbar.addTool("Redo", RedoIcon);
    // toolbar.addSeperator();
    toolbar.addTool("dfx", ExportDfxIcon);
    toolbar.addTool("dwg", ExportDwgIcon);
    toolbar.addTool("shp", ExportShpIcon);
    toolbar.addTool("pdf", ExportPdfIcon);
    toolbar = toolbar.disabled(disabledAll);

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  };

  onMount(init);

  const onResize = async () => {
    if (container && toolbar) {
      let sz = { w: container.offsetWidth, h: container.offsetHeight };
      toolbar = toolbar.onResize(sz.w);
    }
  };

  /*
    
    Statics tools - 
      1. Explode
      2. Layering - Bring or Send back, front etc
      3. Alignment - top, left, etc or select point interactively

    
    
    */

  const onButtonClicked = (id: number) => {
    toolbar.onButtonClicked(id);
  };

  $: {
    toolbar = toolbar.disabled(disabledAll);

    console.log("toolbar disabled: ", disabledAll);
  }
</script>

<div
  class="flex gap-1 justify-between h-8 border-0 border-t-0 border-sprotBg bg-sprotBgLight20 pointer-events-auto"
>
  <div
    class="sprot-canvas-tools flex items-center w-full"
    bind:this={container}
  >
    <div class="flex items-center">
      {#each toolbar.getToolbarItems() as tool (tool.id)}
        {#if tool.fit}
          {#if tool.kind === ISprotMenubarItemKind.Button}
            <BitmapButton
              className="h-6 w-7"
              disabled={tool.disabled}
              on:click={() => onButtonClicked(tool.id)}
            >
              <svelte:component
                this={tool.icon}
                color="white"
                size={14}
                disabled={tool.disabled}
              />
            </BitmapButton>
          {:else if tool.kind === ISprotMenubarItemKind.Seperator}
            <Seperator />
          {:else}
            <svelte:component this={tool.icon} disabled={tool.disabled} />
          {/if}
        {/if}
      {/each}
    </div>
  </div>
</div>
