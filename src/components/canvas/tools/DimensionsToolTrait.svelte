<script lang="ts">
  import Choice from "$components/ui/Choice.svelte";
  import { alignments } from "$lib/api";
  import type { SprotAlignments } from "$lib/api/alignment";
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
    <Choice
      choiceList={[
        { active: true, id: 1, label: "Fractional" },
        { active: false, id: 2, label: "Decimal" },
      ]}
    />
    <Choice
      choiceList={[
        { active: false, id: 8, label: "0" },
        { active: true, id: 1, label: "0.0" },
        { active: false, id: 2, label: "0.00" },
        { active: false, id: 3, label: "0.000" },
        { active: false, id: 4, label: "0.0000" },
        { active: false, id: 5, label: "0.00000" },
        { active: false, id: 6, label: "0.000000" },
        { active: false, id: 7, label: "0.0000000" },
      ]}
    />
    <!-- <Choice
      choiceList={[
        {
          active: false,
          id: 1,
          label: "milimetres",
        },
        {
          active: false,
          id: 2,
          label: "centimeters",
        },
        {
          active: false,
          id: 3,
          label: "metres",
        },
        {
          active: false,
          id: 4,
          label: "kilometers",
        }, // cusom with cusom you give a name, and a scale factor in relation to the meters
      ]}
    /> -->
    <!-- <Choice
      choiceList={[
        {
          active: false,
          id: 1,
          label: "Text above dimension line",
        },
        {
          active: false,
          id: 2,
          label: "Text below dimension line",
        },
        {
          active: false,
          id: 3,
          label: "Text through dimension line",
        },
        {
          active: false,
          id: 4,
          label: "Text above dimension line",
        },
      ]}
    /> -->
    <!-- <BitmapButton>
      <SnapAngle />
    </BitmapButton> -->
  </div>
{/if}
