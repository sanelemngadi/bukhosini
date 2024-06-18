<script lang="ts">
    import DullButton from "$components/general/DullButton.svelte";
    import { getAppViewController, getPanels, setActivePanel } from "$lib/stores";
    import type { ISprotPanel, SprotListButton } from "$lib/types";
    import { onMount } from "svelte";
    import GridCanvasTool from "./GridCanvasTool.svelte";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import { alignments, arrangmemts, constraints } from "$lib/api";
  import { BottomSide, LeftSide, RightSide } from "$components/icons";

    let activePanel: ISprotPanel | null = null;
    let panels: ISprotPanel[] = [];
    // let appState: SprotAppViewController | null = null;
    let docPanels: SprotListButton[] = [
        {
            id: 0,
            active: false,
            name: "Dock left",
            icon: LeftSide,
        },
        {
            id: 1,
            active: true,
            name: "Dock Right",
            icon: RightSide,
        },
        {
            id: 2,
            active: false,
            name: "Bottom",
            icon: BottomSide,
        },
        {
            id: 3,
            active: false,
            name: "Float",
            icon: BottomSide,
        },
    ]

    const init = () => {
        getPanels(panel => { 
            panels = panel; 
            activePanel = panels.find(p => p.active && p.selected) || null;
        });

        // getAppViewController(app => appState = app);
    }

    onMount(init);

    const onSelection = (event: CustomEvent<number>) => {
        setActivePanel(event.detail);
    }
  
  </script>
  <div class="flex gap-2 h-full bg-sprotBgLight20 text-sprotText pointer-events-auto p-1 border-r border-sprotBg1">  
      <!-- <div class="min-w-9 flex flex-col h-full group border border-transparent hover:border-sprotBg1">
          <div class="p-1  hover:bg-sprotBg">
              <DullButton className="w-full h-full flex items-center justify-center">
                  <PropertiesPanelIcon size={16} />
              </DullButton>
          </div>
          <div class="h-10 border-t border-transparent hover:bg-sprotBg group-hover:border-sprotBg1 flex-1 p-1">
              <p class="text-center">Panels</p>
              <div class="flex w-full items-center justify-center">
                  <DropdownOutline size={12} />
              </div>
          </div>
      </div> -->
        <GridCanvasTool name="Panels" tools={panels} on:selection={onSelection} />
  

      <!-- <div class="min-w-11 grid grid-cols-4 gap-[2px] h-full group border border-transparent items-center">

            {#each panels.slice(0, 12) as panel (panel.id) }
                <div class="h-5 w-5 borderf px-1">
                    <DullButton className="hover:bg-sprotBg w-full h-full flex items-center justify-center">
                        <svelte:component this={panel.icon} size={16} />
                    </DullButton>
                </div>
            {/each}
  
      </div> -->

      <div class="min-w-11 flex flex-col h-full group border border-transparent">
        <GridCanvasTool featured name="Docking Panels" tools={docPanels} />
        <GridCanvasTool featured name="Alignment" tools={alignments} />
        <GridCanvasTool featured name="Arrangments" tools={arrangmemts} />
        
    </div>
  </div>