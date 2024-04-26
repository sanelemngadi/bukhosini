<script lang="ts">
  import RaisedDiv from "$components/general/RaisedDiv.svelte";
import DropDown from "$components/icons/DropDown.svelte";
import { getActionDocument, getAppViewController } from "$lib/stores";
  import type { SprotAppViewController, SprotLayer } from "$wasm/sprot_app";
  import { onMount } from "svelte";


    let appState: SprotAppViewController | null = null;
    let layers: SprotLayer[] = [];

    onMount(() => {
        getAppViewController(app => appState = app);

        getActionDocument((_, action) => {
            action.Some(doc => {
                // document = doc;
                layers = doc.get_doc_layers();
                // console.log("layers: ", doc.get_doc_layers());
            });
            
        });
    });

    const onSetActiveLayer = (e: Event) => {
        if(!appState) {
            return;
        }

        let target = e.target as HTMLInputElement | null;
        let id = target ? parseInt(target.value) : NaN;

        if(!isNaN(id)) {
            appState.set_active_layer(id);      
        }
    }
</script>

<div class="sprot-layers relative rounded-sm px-0 border flex items-center justify-center border-sprotBgLight60 group bg-sprotBg1 hover:bg-sprotBgLight20 h-5 overflow-hidden"> 
    <!-- <div class="w-2 h-2 rounded-xl bg-sprotDanger"></div>
    <div class="w-2 h-2 rounded-xl bg-sprotPrimary"></div>
    <div class="w-2 h-2 rounded-xl bg-white"></div> -->
    <select 
        name="" 
        id="" 
        class="uppercase h-[20px] outline-none text-[10px] rounded-[2px] bg-transparent px-1 pr-6"
        on:change={onSetActiveLayer}>
        {#each layers as layer (layer.get_name()) }
            <option value={String(layer.get_id() || "-2")}  selected={layer.current_target} >{layer.get_name()}</option>
        {/each}
    </select>

    <span class="w-4 h-full absolute right-0 top-0 border-lk pointer-events-none border-sprotBgLight60 inline-flex items-center justify-center rounded-tr-sm rounded-br-sm bg-sprotBgLight20"
        style="box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.10), inset 0px -1px 1px rgba(255, 255, 255, 0.10);">
        <DropDown color="white" size={4} />
    </span>
</div>

<style>

</style>

