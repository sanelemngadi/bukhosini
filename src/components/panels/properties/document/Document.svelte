<script>
  import PropertyAccordion from "$components/general/PropertyAccordion.svelte";
  import { DropdownOutline } from "$components/icons";


  import LayerIcon from "$components/icons/LayerIcon.svelte";

</script>

<div class="borders h-full overflow-hidden flex flex-col">
    <div class="flex items-center justify-between px-2 pt-2">
        <h2 class="text-sprotText font-semibold">Document</h2>
    </div>

    <div class="px-2 pb-2">
        <div class="w-full h-8 rounded-[4px] border border-sprotLightBorder bg-black mt-2 px-2 flex items-center gap-2">
            <div class="bg-sprotBgLight20l rounded-[4px] w-6 h-6 flex items-center justify-center">
                <LayerIcon color="white" />
            </div>
            <div 
                class="bg-sprotBgLight20l rounded-[4px] w-32 h-6 px-2 flex items-center">
                Buidlings
            </div>
            <button class="w-6 h-6 hover:bg-sprotBgLight60 flex items-center justify-center ml-auto rounded-[4px] active:bg-sprotBgLight20">
                <DropdownOutline color="white" />
            </button>
        </div>
    </div>
    
    <!-- <div class="border-b h-2 border-sprotBgLight60"></div> -->
    <div class="bordelr flex-1 flex flex-col">
        
        <div class="borders flex flex-col h-full overflow-auto p-0">
            <PropertyAccordion maxItems={1}>Survey Board</PropertyAccordion>
            <div class="border-b h-0 border-sprotBgLight60"></div>
            <PropertyAccordion>Margins</PropertyAccordion>
            <div class="border-b h-0 border-sprotBgLight60"></div>
            <PropertyAccordion options>Background</PropertyAccordion>
            <div class="border-b h-0 border-sprotBgLight60"></div>
            <PropertyAccordion options>Transformations</PropertyAccordion>
            <div class="border-b h-0 border-sprotBgLight60"></div>
        </div>
    </div>
    <div class="h-6 border-t border-sprotBgLight60 mt-auto relative bottom-0"></div>

</div>