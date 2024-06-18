<script lang="ts">
    import DullButton from "$components/general/DullButton.svelte";
    import RaisedButton from "$components/general/RaisedButton.svelte";
    import DropDown from "$components/icons/DropDown.svelte";
    import { getElementScreenCoordinates } from "$lib/helper/point";
    import { onMount } from "svelte";
  
      export let searchable: boolean = false;
      let dialog: HTMLDialogElement;
      let container: HTMLElement;
      let active: boolean = false;
  
      onMount(() => {
          window.addEventListener("mouseup", onCloseialog);
      })
  
  
      $:{
          if(searchable) {}
      }
  
      const onShowDialog = () => {
          if(dialog && container) {
              let position = getElementScreenCoordinates(container);
  
              dialog.style.left = position.x + "px";
              dialog.style.top = position.y + 24 + "px";
              active = true;
              if (active) {
                  dialog.show();
              } else {
                  dialog.close();
              }
          }
      }
  
      const onCloseialog = () => {
          if(dialog && container) {
              dialog.close();
              active = false;
          }
      }
  </script>
  
  
  <DullButton 
      className="sprot-layers relative px-0 border flex items-center justify-center border-sprotBg1 group bg-sprotBg hover:bg-sprotBg1 h-[22px] overflow-hidden group min-w-24 w-24 max-w-24 text-ellipsis"
      on:click={onShowDialog}> 
      <div bind:this={container}>
          <div  
              id="" 
              class="flex items-center uppercase h-[20px] outline-none text-[10px] rounded-[2px] bg-transparent px-1 pr-6">
              <slot/>
          </div>
    
          <span class="w-4 h-full  absolute right-0 top-0 inline-flex items-center justify-center  hover:bg-sprotBgLight60 {active ?? "bg-sprotBgLight60"}">
              <DropDown color="white" size={4} />
          </span>
    </div>
  </DullButton>
  
  
  <dialog 
      bind:this={dialog} 
      class="z-40">
      <div class="w-44 p-2">
          <slot />
      </div>
  </dialog>