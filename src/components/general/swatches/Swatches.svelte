<script lang="ts">
  import Notebook from "$components/notebook/Notebook.svelte";
  import { SprotNotebook } from "$lib/notebook";
  import { onMount } from "svelte";
  import Colors from "./document/Colors.svelte";
  import PatternsBg from "./patterns/PatternsBg.svelte";
  import WheelColors from "./wheel/WheelColors.svelte";

  let notebook: SprotNotebook;

  const init = () => {
    notebook = new SprotNotebook();
    notebook.addPage("Swatches", Colors, true);
    notebook.addPage("Color", WheelColors, false);
    notebook.addPage("Gradient", PatternsBg, false);
    notebook.addPage("Pattern", PatternsBg, false);
  }

  onMount(init);

  const onSelection = (id: number) => {
    notebook = notebook.setSelection(id);
  }

</script>

<div class="w-60 borderl rounded-mds h-60k py-2">
    <!-- <ul class="flex gap-2 h-6 items-center">
        <li>Palletes</li>
        <li>Custom</li>
        <li>Patterns</li>
    </ul> -->

    {#if notebook}
        <Notebook pages={notebook.pages} {onSelection} />
    {/if}
</div>