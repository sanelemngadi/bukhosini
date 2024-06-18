<script lang="ts">
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import { alignments } from "$lib/api";
  import type { SprotAlignments } from "$lib/api/alignment";
  import { SprotAlignmentTool } from "$lib/modifiers";
  import { getAppViewController } from "$lib/stores";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import { onMount } from "svelte";

  export let tool: SprotCanvasTool | undefined = undefined;
  let appState: SprotAppViewController | null = null;
  let alignmentOptions: SprotAlignments[] = [];

  onMount(() => {
    //   tool = undefined;
    alignmentOptions = alignments;
    getAppViewController((app) => (appState = app));
  });

  const onSetActive = (alignment: SprotAlignments) => {
    alignmentOptions = alignmentOptions.map((align) => {
      align.active = align.id === alignment.id;

      if (align.active) {
        onSetAlignSide(align.name);
      }

      return align;
    });
  };

  const onSetAlignSide = (side: string) => {
    if (tool instanceof SprotAlignmentTool && appState) {
      // tool.setAlignSide(appState, side);
    }
  };
</script>

{#if tool}
  <div class="px-2 flex justify-start items-center gap-1">
    {#each alignmentOptions as alignment (alignment.id)}
      <BitmapButton
        on:click={() => onSetActive(alignment)}
        active={alignment.active}
      >
        <svelte:component this={alignment.icon} color="white" size={12} />
      </BitmapButton>
    {/each}
  </div>
{/if}
