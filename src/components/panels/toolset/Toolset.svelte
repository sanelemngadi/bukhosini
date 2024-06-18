<script lang="ts">
  import LayerChoice from "$components/ui/LayerChoice.svelte";
  import { getTargetTool } from "$lib/stores";
  //   import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
  //   import { getActionModifierTool, getTargetTool } from "$lib/stores";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { onMount } from "svelte";

  let targetTool: SprotCanvasTool | null = null;
  //   let modifierTool: SprotCanvasTool | null = null;

  onMount(() => {
    getTargetTool((tool) => (targetTool = tool));
    // getActionModifierTool(tool => {
    //     tool
    //     .Some(modifier => modifierTool = modifier)
    //     .None(() => modifierTool = null);
    // });
  });
</script>

<div class="p-2">
  <div>
    <h2 class="text-sm capitalize my-2">{targetTool?.name} Tool</h2>

    {#if targetTool}
      <!-- <select>
        {#each targetTool.presets as preset (preset.id)}
          <option value={preset.id}>{preset.name}</option>
        {/each}
      </select> -->

      <div>
        <LayerChoice
          choiceList={targetTool.presets.map((p) => {
            return {
              active: p.active,
              id: p.id,
              label: p.name,
            };
          })}
        />
      </div>
    {/if}
  </div>
</div>
