<script lang="ts">
  import BitmapButton from "$components/general/BitmapButton.svelte";
import { snappingModes, type SprotSnapping } from "$lib/api/snapping";
  import { getAppViewController } from "$lib/stores";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import { onMount } from "svelte";

  let appState: SprotAppViewController | null = null;

  let modes = snappingModes;

  onMount(() => {
    getAppViewController(app => {
        // layers = app.get_documents().find(active => active.active)?.get_doc_layers() || [];
        appState = app;
    });
  })

    const onActiveMode = (snap: SprotSnapping) => {
        if(appState) {
            appState.set_snapping_mode(snap.snap);
            modes = modes.map(s => {
                s.active = snap.id === s.id;
                return s;
            });
        }
    }
</script>

<!-- <div class="flex justify-start items-center gap-[2px]">
    {#each modes as snap (snap.id)}
        <button 
            class="h-6 w-6 flex items-center justify-center rounded-[1px] hover:bg-sprotPrimary {snap.active && 'bg-sprotPrimary'}"
            title={snap.name}
            on:click={() => onActiveMode(snap)}>
            <svelte:component this={snap.icon}  
                color={"white"} 
                size={12} />
        </button>            
    {/each}
</div> -->

<div class="flex items-center px-[1px] text-sprotText rounded-sm borders border-sprotBgLight60 bg-blacks text-[12px] min-w-8 h-7">
    <div class="grid grid-cols-5 gap-[2px] overflow-hidden items-center h-7">
        {#each modes as snap (snap.id) }
            <BitmapButton 
                className="h-5 w-6"
                title={snap.name}
                on:click={() => onActiveMode(snap)}
                active={snap.active}>
                <svelte:component this={snap.icon} color="white" size={12} />
            </BitmapButton>
            <!-- <button 
                title={snap.name}
                on:click={() => onActiveMode(snap)}
                class="h-5 w-6 flex items-center justify-center {snap.active && "bg-sprotPrimary"} hover:bg-sprotPrimary active:bg-black">
                <svelte:component this={snap.icon} color="white" size={12} />
            </button> -->
        {/each}
    </div>
</div>