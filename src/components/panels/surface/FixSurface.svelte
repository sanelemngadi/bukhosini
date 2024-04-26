<script lang="ts">
    
    import BitmapButton from "$components/general/BitmapButton.svelte";
    import { DropdownOutline, Zoom } from "$components/icons";
    import NewFile from "$components/icons/NewFile.svelte";
    import type { SprotDocumentState } from "$wasm/sprot_app";
    import { getActionDocument } from "$lib/stores";
    import { onMount } from "svelte";
    
    let document: SprotDocumentState | null;
    
      onMount(() => {
          getActionDocument((_, action) => {
              action.Some(doc => {
                  document = doc;
                  console.log("layers: ", doc.get_doc_layers());
              });
              
          });
      })
</script>
<div>
    <div class="flex items-center h-8 justify-between px-2 pt-2">
        <BitmapButton className="h-8">
            <NewFile color="white" size={14}/>
        </BitmapButton>
    </div>

    <div class="px-2 pb-2">
        <div class="w-full h-8 rounded-[4px] border border-sprotLightBorder bg-black mt-2 px-2 flex items-center gap-2">
            <div class="bg-sprotBgLight20l rounded-[4px] w-6 h-6 flex items-center justify-center">
                <Zoom color="white" />
            </div>
            <div 
                class="bg-sprotBgLight20 rounded-[4px] w-32 h-6 flex items-center">
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    autocomplete="off"
                    spellcheck="false"
                    value="Sanele Fixes" 
                    placeholder="Search Surfaces"
                    class="w-full px-1 h-full flex rounded-[4px] bg-transparent border-2 border-transparent focus:border-sprotPrimary outline-none" >
            </div>
            <button class="w-6 h-6 hover:bg-sprotBgLight60 flex items-center justify-center ml-auto rounded-[4px] active:bg-sprotBgLight20">
                <DropdownOutline color="white" />
            </button>
        </div>
    </div>
    
    <div class="border-b h-2 border-sprotBgLight60"></div>
    <div>

    <div class="p-2">
    </div>
        
    </div>
</div>