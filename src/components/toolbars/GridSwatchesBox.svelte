<script lang="ts">
    import DullButton from "$components/general/DullButton.svelte";
    import { Align, Hand, Line, Snap, Typography, Zoom } from "$components/icons";
  import Constraints from "$components/icons/Constraints.svelte";
    import DropDown from "$components/icons/DropDown.svelte";
  import DropdownOutline from "$components/icons/DropdownOutline.svelte";
  import SendBack from "$components/icons/arranging/SendBack.svelte";
    import { Scale } from "$components/icons/modifiers";
  import ColorPanelIcon from "$components/icons/panels/ColorPanelIcon.svelte";
  import ToggleCad from "$components/icons/toggling/ToggleCAD.svelte";
    import { CutIcon } from "$components/icons/toolbars";
    import PenToolIcon from "$components/icons/tools/PenToolIcon.svelte";
  import Choice from "$components/ui/Choice.svelte";
  import type { SprotTSColor } from "$lib/types";
  import { onMount } from "svelte";


  let colors: SprotTSColor[] = [];
    // let panelsPinned: boolean = false;

    const init = () => {
    
        for(let i = 0; i < 18; i++) {
            const r = Math.random() * 255;
            const g = Math.random() * 255;
            const b = Math.random() * 255;
    
            const color = { id: i, r, g, b, alpha: 255};
            colors = [...colors, color];
        }
    }

    onMount(init);
  
  </script>
  <div class="flex gap-2 h-full bg-sprotBgLight20 text-sprotText pointer-events-auto p-1 border-r border-sprotBg1">  
      <div class="min-w-9 flex flex-col h-full group border border-transparent hover:border-sprotBg1">
          <div class="p-1  hover:bg-sprotBg">
              <DullButton className="w-full h-full flex items-center justify-center">
                  <ColorPanelIcon size={16} />
              </DullButton>
          </div>
          <div class="h-10 border-t border-transparent hover:bg-sprotBg group-hover:border-sprotBg1 flex-1 p-1">
              <p class="text-center">Swatches</p>
              <div class="flex w-full items-center justify-center">
                  <DropdownOutline size={12} />
              </div>
          </div>
      </div>
  
      <!-- <div class="min-w-9 flex flex-col h-full group border border-transparent hover:border-sprotBg1">
          <div class="p-1  hover:bg-sprotBg">
              <DullButton className="w-full h-full flex items-center justify-center">
                  <Hand size={16} />
              </DullButton>
          </div>
          <div class="h-10 border-t border-transparent hover:bg-sprotBg group-hover:border-sprotBg1 flex-1 p-1">
              <p class="text-center">Navigate</p>
              <div class="flex w-full items-center justify-center">
                  <DropdownOutline size={12} />
              </div>
          </div>
      </div> -->
      <div class="min-w-11 grid grid-rows-3 grid-cols-6 gap-1 h-full border border-transparent">

            <!-- <div class="h-5 w-5 border"></div> -->
            {#each colors as color, index (index) }
                <button 
                    class="w-4 h-4 group hover:rounded-[2px] outline-2 hover:outline-sprotText outline outline-transparent rounded-none hover:z-10" 
                    >
                    <div 
                        class="w-full h-full flex items-center text-[8px] justify-center text-sprotText "
                        style="background-color: rgb({color.r}, {color.g}, {color.b});"
                        draggable="true">
                        <span class="bg-sprotBgss z-10 opacity-0 group-hover:opacity-100 inline-flex w-2 items-center justify-center">{index}</span>
                    </div>
                </button>
            {/each}
            <!-- <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div> -->
            <!-- <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div>
            <div class="h-5 w-5 border"></div> -->
  
      </div>
  </div>