<script lang="ts">
    import DullButton from "$components/general/DullButton.svelte";
    import DropDown from "$components/icons/DropDown.svelte";  
    export let className: string = ""

  </script>
  
  <DullButton className="sprot-layers relative rounded-sm px-0 border flex items-center justify-center border-sprotBgLight60 group bg-sprotBg1 hover:bg-sprotBgLight20 h-5 overflow-hidden"
    on:click> 
      <div  
          id="" 
          class="flex items-center uppercase h-[20px] outline-none text-[10px] rounded-[2px] bg-transparent px-1 pr-6">
          <slot/>
      </div>
  
      <span class="w-4 h-full absolute right-0 top-0 border-lk pointer-events-none border-sprotBgLight60 inline-flex items-center justify-center rounded-tr-sm rounded-br-sm bg-sprotBgLight20"
          style="box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.10), inset 0px -1px 1px rgba(255, 255, 255, 0.10);">
          <DropDown color="white" size={4} />
      </span>
  </DullButton>
  
  <style>
  
  </style>
  
  