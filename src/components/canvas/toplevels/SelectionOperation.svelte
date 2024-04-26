<script lang="ts">
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import DropDownBitmap from "$components/general/DropDownBitmap.svelte";
  import Seperator from "$components/toolbars/Seperator.svelte";
    import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
      import { getCurrentSelection, getSelectionOperations } from "$lib/stores";
      import { onMount } from "svelte";

      let selectionOperations: SprotCanvasModifierTool[] = [];
      let isSelectionEmpty: boolean = true;
      export let onSelection: ((setting: SprotCanvasModifierTool) => void) | null = null;

  
      onMount(() => {
          selectionOperations = getSelectionOperations();

        //   getCurrentSelection(selection => {
        //     selection
        //     .Empty(()=>{
        //         isSelectionEmpty = true;
        //     })
        //     .Single(single => {
        //         isSelectionEmpty = false;
        //     })
        //     .GroupAll(group => {
        //         isSelectionEmpty = false;
        //     })
        //   });

          window.addEventListener("mouseup", onDeactiveateAll);
          return () => {
            window.removeEventListener("mouseup", onDeactiveateAll);
          }
      });

      const onSetSelection = (item: SprotCanvasModifierTool) => {
        selectionOperations = selectionOperations.map(items => {
            items.active = item.id === items.id;
            return items;
        });

        if (onSelection) {
            onSelection(item);
        }
      }

      const onDeactiveateAll = () => {
        selectionOperations = selectionOperations.map(items => {
            items.active = false;
            return items;
        })
      }

  </script>
  
  
{#if !isSelectionEmpty}
<Seperator />
<div class="flex items-center text-sprotText rounded-sm borders border-sprotBgLight60s bg-blackl text-[12px] h-6">
    <div class="grid grid-cols-5 gap-[2px] items-center h-5">
        {#each selectionOperations as operation (operation.id) }
            <DropDownBitmap
                expanded={operation.active}
                pane={operation.panelComponent}>
                <BitmapButton
                    slot="bitmap"
                    title={operation.name + " Actions"}
                    active={operation.active} overflow={operation.panelComponent ? true : false}
                    on:click={() => onSetSelection(operation)}>
                    <svelte:component this={operation.icon} color="white" size={12} />
                </BitmapButton>
            </DropDownBitmap>
        {/each}
    </div>
</div>
{/if}
  
<!-- 251 -->