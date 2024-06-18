<script lang="ts">
  import ExportDfxIcon from "$components/icons/toolbars/ExportDFXIcon.svelte";
  import ExportDwgIcon from "$components/icons/toolbars/ExportDWGIcon.svelte";
  import ExportPdfIcon from "$components/icons/toolbars/ExportPDFIcon.svelte";
  import ExportShpIcon from "$components/icons/toolbars/ExportSHPIcon.svelte";
  import { setActivePanel, getPanels } from "$lib/stores";
  import { onMount } from "svelte";
  import GridCanvasTool from "./GridCanvasTool.svelte";
  import { PrintIcon } from "$components/icons/toolbars";
  import type { ISprotPanel } from "$lib/types";
  import { alignments, arrangmemts } from "$lib/api";

  export let disabledAll: boolean = false;

  let panels: ISprotPanel[] = [];

  const init = () => {
    getPanels((els) => (panels = els));
  };

  onMount(init);

  const onActivePanel = (event: CustomEvent<number>) => {
    setActivePanel(event.detail);
  };
</script>

<div
  class="flex h-full bg-sprotBgLight20 text-sprotText pointer-events-auto p-1 border-r border-sprotBg1"
>
  <!-- <GridCanvasTool name="Panels" tools={panels} on:selection={onActivePanel} /> -->
  <GridCanvasTool
    disabled={disabledAll}
    name="Layout"
    tools={[
      {
        active: false,
        id: 0,
        name: "Define Print Bounds",
        icon: ExportPdfIcon,
      },
      { active: false, id: 1, name: "Add Block layout", icon: ExportPdfIcon },
      { active: false, id: 2, name: "Add Diagram Block", icon: ExportPdfIcon },
    ]}
  />
  <GridCanvasTool
    disabled={disabledAll}
    name="Place"
    tools={[
      { active: false, id: 0, name: "Scalebar", icon: ExportPdfIcon },
      { active: false, id: 1, name: "North Arrow", icon: ExportPdfIcon },
      { active: false, id: 2, name: "Legend", icon: ExportPdfIcon },
      { active: false, id: 3, name: "Image", icon: ExportPdfIcon },
    ]}
  />
  <div class="min-w-11 flex flex-col h-full group border border-transparent">
    <GridCanvasTool
      disabled={disabledAll}
      featured
      name="Print"
      tools={[
        { active: false, id: 0, name: "Selection", icon: PrintIcon },
        { active: false, id: 1, name: "General CAD", icon: PrintIcon },
        { active: false, id: 2, name: "All Survey Boards", icon: PrintIcon },
        { active: false, id: 3, name: "Layout", icon: PrintIcon },
      ]}
    />
    <!-- <GridCanvasTool featured name="Alignment" tools={alignments} /> -->
    <GridCanvasTool
      featured
      name="Arrangments"
      tools={arrangmemts}
      disabled={disabledAll}
    />
  </div>

  <!-- <div class="min-w-9 flex flex-col h-full group border border-transparent">
          <div class="border flex border-transparent hover:border-sprotBg1 flex-1"> 
              <div class="flex flex-1 items-center justify-center hover:bg-sprotBg">
                  <ExportDfxIcon size={16} />
              </div>
          </div>
          <div class="border flex border-transparent hover:border-sprotBg1 flex-1"> 
              <div class="flex flex-1 items-center justify-center hover:bg-sprotBg">
                  <ExportDwgIcon size={16} />
              </div>
          </div>
          <div class="border flex border-transparent hover:border-sprotBg1 flex-1"> 
              <div class="flex flex-1 items-center justify-center hover:bg-sprotBg">
                  <ExportShpIcon size={16} />
              </div>
          </div>
  
      </div> -->
</div>
