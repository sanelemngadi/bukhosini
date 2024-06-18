<script lang="ts">
  import { Close } from "$components/icons";
  import { ellipses } from "$lib/helper/ellipsis";
  import { createEventDispatcher } from "svelte";
  import DullButton from "./DullButton.svelte";
  export let name: string = "29FR LOCATE WG31 03-03-2024";

  export let location: string = "";
  export let closable: boolean = true;
  export let haveChanges: boolean = false;

  let dispatch = createEventDispatcher();

  export let active: boolean = false;

  const onCloseTab = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch("close");
  };
</script>

<DullButton
  className="whitespace-nowrap px-2 gap-2 h-6 border-y border-y-transparent border-r border-r-sprotBgLight20 inline-flex items-center border-l border-sprotBg {active
    ? 'bg-sprotBg relative text-sprotLightBorderll border border-transparent border-y-sprotBgLight60 border-l-sprotBgLight60l'
    : 'hover:bg-sprotBg bg-sprotBgLight20 lborder-t-sprotPrimary'} group min-w-32"
  on:click
>
  <span
    class="inline-flex flex-1 overflow-ellipsis whitespace-nowrap overflow-hidden"
    >{ellipses(name, 24, "CENTER")}</span
  >
  {#if closable}
    <DullButton
      on:click={onCloseTab}
      className="inline-flex items-center justify-center w-4 h-4 group-[1]:  {active
        ? 'opacity-100'
        : 'opacity-0'} group-hover:opacity-100 {haveChanges && 'opacity-100'}"
    >
      <span
        class="sprot-center border border-transparent w-full h-full group-[1]-hover:bg-sprotPrimary25 hover:border-sprotPrimary {haveChanges &&
          'rounded-xl bg-sprotText scale-50 hover:bg-inherit hover:scale-100 hover:rounded-none'}"
      >
        <Close color="white" size={8} />
      </span>
    </DullButton>
  {/if}
</DullButton>
