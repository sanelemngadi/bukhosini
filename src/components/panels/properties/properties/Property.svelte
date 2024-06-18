<script lang="ts">
  import EditableInput from "$components/general/EditableInput.svelte";
  import PropertyAccordion from "$components/general/PropertyAccordion.svelte";
  import { DropdownOutline, Edit } from "$components/icons";
  import LayerIcon from "$components/icons/LayerIcon.svelte";
  //   import Plus from "$components/icons/Plus.svelte";
  import { SnapPerpendicular } from "$components/icons/snapping";
  import { onMount } from "svelte";
  import Document from "../document/Document.svelte";
  import { getCurrentSelection } from "$lib/stores";
  import BoundingBox from "$components/entity/BoundingBox.svelte";
  import {
    NO_SELECTION,
    type ISprotPropertyAttribute,
    type SprotTSSelection,
  } from "$lib/types";
  import { selectionAttributes } from "$lib/api";
  import PropertyLayers from "./PropertyLayers.svelte";
  //   let editMode: boolean = false;
  let selection: SprotTSSelection = NO_SELECTION;

  onMount(() => {
    getCurrentSelection((select) => (selection = select));
  });

  let propertyAttributes: ISprotPropertyAttribute[] = [];
</script>

{#if !selection.is_none}
  <div class="relative h-full overflow-hidden flex flex-col">
    <div class="">
      <div class="flex items-center justify-between px-2 pt-2">
        <h2 class="text-sprotBgLight60">Not current</h2>
        <button class="underline underline-offset-2 cursor-pointer"
          >Target</button
        >
      </div>

      <div class="px-2 pb-2">
        <!-- <div class="w-full h-8 rounded-[4px] border border-sprotLightBorder bg-black mt-2 px-2 flex items-center gap-2">
                <div class="bg-sprotBgLight20l rounded-[4px] w-6 h-6 flex items-center justify-center">
                    <LayerIcon color="white" />
                </div>
                <div 
                    class="bg-sprotBgLight20 rounded-[4px] w-32 h-6 px-2 flex items-center">
                    Buidlings
                </div>
                <button class="w-6 h-6 hover:bg-sprotBgLight60 flex items-center justify-center ml-auto rounded-[4px] active:bg-sprotBgLight20">
                    <DropdownOutline color="white" />
                </button>
            </div> -->
        <PropertyLayers />
      </div>
      <div class="border-b h-2 border-sprotBgLight60"></div>
    </div>

    <div class="borderm flex flex-col flex-1 pb-8 sprot-scroll">
      <div class="pl-2 pt-2">
        <BoundingBox />
      </div>
      <div class="border-b h-2 border-sprotBgLight60"></div>
      <div class="borders flex flex-col p-0">
        {#each selectionAttributes as attribute (attribute.id)}
          <PropertyAccordion
            active={attribute.active}
            items={attribute.attributes}
            maxItems={attribute.maxListItems}
            options={attribute.moreOptionsPane !== undefined}
          >
            {attribute.name}
          </PropertyAccordion>
        {/each}
      </div>
    </div>

    <div class="h-6 border-t border-sprotBgLight60 mt-auto"></div>
  </div>
{:else}
  <Document />
{/if}
