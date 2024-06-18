<script lang="ts">
  import DullButton from "$components/general/DullButton.svelte";
  import { NewFile } from "$components/icons";
  import type { ISprotPanel } from "$lib/types";
  import Learning from "./new/options/Learning.svelte";
  import MoreNews from "./new/options/MoreNews.svelte";
  import NewDocument from "./new/options/NewDocument.svelte";
  import OpenDocument from "./new/options/OpenDocument.svelte";
  import WhatsNew from "./new/options/WhatsNew.svelte";

  let options: ISprotPanel[] = [
    {
      id: 1,
      active: true,
      name: "New",
      icon: NewFile,
      selected: false,
      component: NewDocument,
    },
    {
      id: 2,
      active: false,
      name: "Open",
      icon: NewFile,
      selected: false,
      component: OpenDocument,
    },
    {
      id: 3,
      active: false,
      name: "What's New",
      icon: NewFile,
      selected: false,
      component: WhatsNew,
    },
    {
      id: 4,
      active: false,
      name: "Learning",
      icon: NewFile,
      selected: false,
      component: Learning,
    },
    {
      id: 5,
      active: false,
      name: "More",
      icon: NewFile,
      selected: false,
      component: MoreNews,
    },
  ];

  const onActiveOption = (id: number) => {
    options = options.map((opt) => {
      opt.active = opt.id === id;
      return opt;
    });
  };
</script>

<div
  class="flex border-sprotBg bg-sprotBg w-full h-full absolute top-0 left-0 z-30 pointer-events-auto"
>
  <div class="h-full py-11">
    <div class="borderl pl-4">
      <h2 class="text-2xl mb-5">Getting Started</h2>
    </div>
    <div class="flex">
      <div class="text-lg flex flex-col gap-4 border-r-2 border-sprotSuccess">
        {#each options as opt, index (opt.id)}
          <DullButton
            on:click={() => onActiveOption(opt.id)}
            className="inline-flex border-r-4 px-20 relative items-center justify-center p-1 w-full hover:text-sprotPrimary {opt.active
              ? 'text-sprotPrimary border-r-sprotPrimary after:content-normal after:w-1 after:h-full after:block after:absolute after:-right-2 after:bg-sprotPrimary'
              : 'border-r-transparent'}">{opt.name}</DullButton
          >
          {#if index === 1}
            <div class="h-10"></div>
          {/if}
        {/each}
      </div>
      <div class="flex-1">
        {#each options as opt (opt.id)}
          {#if opt.active}
            <svelte:component this={opt.component} />
          {/if}
        {/each}
      </div>
    </div>
  </div>

  <!-- <div class="h-full w-full"></div> -->
</div>

<!-- <style lang="postcss">
  .sprot-list {
    @apply inline-flex px-20 items-center justify-center p-1 w-full hover:text-sprotPrimary;
  }

  .sprot-list.active {
    @apply text-sprotPrimary border-r-8 border-r-sprotPrimary;
  }
</style> -->
