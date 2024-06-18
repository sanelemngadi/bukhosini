<script lang="ts">
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import { SnapAngle, SnapPerpendicular } from "$components/icons/snapping";
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
    alignmentOptions = alignments;
    getAppViewController((app) => (appState = app));
  });
</script>

{#if tool}
  <div class="px-2 flex justify-start items-center gap-1">
    <BitmapButton>
      <svelte:component this={SnapPerpendicular} color="white" size={16} />
    </BitmapButton>
    <BitmapButton>
      <SnapAngle />
    </BitmapButton>
  </div>
{/if}
