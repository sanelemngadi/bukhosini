<script lang="ts">
  import { Close } from "$components/icons";
  export let name: string = "29FR LOCATE WG31 03-03-2024";

  export let location: string = "";

  export let active: boolean = false;
</script>

<button 
  class="sprot-canvasTab border-y whitespace-nowrap text-sprotLightBorder text-[10px] border-t-sprotBgLight60 border-b-sprotBgLight60 border-x border-x-sprotBgLight60 hover:bg-sprotPrimary25 hover:border-sprotPrimary {active ? "bg-sprotBgLightBg border-b-sprotDanger bg-opacity-30 hover:bg-opacity-100 sprot-active" : "font-normal hover:bg-sprotBgLight60 bg-sprotBgLight20"} px-[6px] gap-4 h-6 group"
  on:click
  title={location}>
    <span class="inline-flex w-36 overflow-ellipsis whitespace-nowrap overflow-hidden">{name}</span>
    <span class="inline-flex items-center justify-center w-4 h-4 hover:bg-sprotSuccess {active ? "opacity-100" : "opacity-0"} group-hover:opacity-100">
    <Close color="white" size={8} />
    </span>
</button>


<style lang="postcss">
  .sprot-canvasTab.sprot-active {
    /* @apply relative after:absolute after:-bottom-1 after:left-[1px] after:w-full after:h-1 after:bg-black; */

    @apply relative border-b-sprotPrimary text-sprotText;
  }
</style>