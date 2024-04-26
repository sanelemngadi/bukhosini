<script lang="ts">
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import { toggleOperations } from "$lib/api";
    import { type SprotSnapping } from "$lib/api/snapping";
    import { getAppViewController } from "$lib/stores";
    import type { SprotAppViewController } from "$wasm/sprot_app";
    import { onMount } from "svelte";
  
    let appState: SprotAppViewController | null = null;
  
    let modes = toggleOperations;
  
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
  
  <div class="flex items-center px-1 text-sprotText rounded-sm border border-sprotBgLight60 bg-black text-[12px] h-7">
      <div class="grid grid-cols-5 gap-2 overflow-hidden items-center h-7">
          {#each modes as toggle (toggle.id) }
              <BitmapButton 
                  title={toggle.name}
                  className="h-5 w-6 flex items-center justify-center {toggle.active && "bg-sprotPrimary"} hover:bg-sprotPrimary active:bg-black">
                  <svelte:component this={toggle.icon} color="white" size={12} />
              </BitmapButton>
          {/each}
      </div>
  </div>