<script lang="ts">
    import DropdownOutline from "$components/icons/DropdownOutline.svelte";
  
      export let size: number = 16;
  </script>
  
  <div class="sprot-hScrollbar flex h-full flex-1 flex-col">
        <button class="w-[{size}px] h-[{size}px] hover:bg-sprotBgLight60 inline-flex items-center justify-center rotate-180">
            <DropdownOutline color="white" />
        </button>
        <div class="flex w-[{size}px] h-full g-sprotBgLight60  items-center justify-center">
            <div class="w-[{10}px] bg-sprotBg h-96 text-transparent">p</div>
        </div>
        <button class="w-[{size}px] h-[{size}px] hover:bg-sprotBgLight60 inline-flex items-center justify-center">
            <DropdownOutline color="white" />
        </button>
  </div>