<script lang="ts">
    import DullButton from "$components/general/DullButton.svelte";
    import DropDown from "$components/icons/DropDown.svelte";  
    export let className: string = ""

    if(className) {}

  </script>
  
  <DullButton className="sprot-layers relative px-0 border flex items-center justify-center border-sprotBg1 group bg-sprotBg hover:bg-sprotBg1 h-[22px] overflow-hidden group"
    on:click> 
      <div  
          id="" 
          class="flex items-center uppercase h-[20px] outline-none text-[10px] rounded-[2px] bg-transparent px-1 pr-6">
          <slot/>
      </div>
  
      <span class="w-4 h-full  absolute right-0 top-0 inline-flex items-center justify-center  hover:bg-sprotBgLight60">
          <DropDown color="white" size={4} />
      </span>
  </DullButton>
  
  <style>
  
  </style>
  
  