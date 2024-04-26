<script>
    import BitmapButton from "$components/general/BitmapButton.svelte";
    import { DropdownOutline, Minus, Plus } from "$components/icons";
  
    const btn = "w-4 flex border border-transparent hover:border-sprotPrimary hover:bg-sprotPrimary25 rounded-none hover:bg-sprotBg1 border-sprotBgLight60 h-[18px]"
  </script>
  
  <div class="border-sprotBgLight60 border-t-0 flex">
      <span class="text-[11px] text-nowrap px-2">Scale</span>
      <span class="inline-flex items-center bg-sprotBgLight20 border border-sprotBgLight60">
          <BitmapButton className={btn}>
            <Minus size={8} color="white"/>
          </BitmapButton>
          <input 
            type="text" 
            class="w-16 px-1 bg-sprotBg focus:bg-sprotText focus:text-sprotBg text-sprotText border-x border-sprotBgLight60 h-[18px] text-[10px] focus:outline-none focus:border-sprotText" 
            name="" 
            value="250%" 
            id="">
            <BitmapButton className={btn}>
              <span class="-rotate-90ll h-full w-full center"><DropdownOutline size={16} color="white"/></span>
            </BitmapButton>
            <BitmapButton className={btn}>
              <Plus size={8} color="white"/>
            </BitmapButton>
        </span>
  </div>
  
  <style lang="postcss">
      .center {
          @apply flex items-center justify-center;
      }
  </style>