<script lang="ts">
  import type { SprotCanvasModifierTool } from "$lib/modifiers/base";
  import { getActionModifierTool, getTargetTool } from "$lib/stores";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { onMount } from "svelte";

  let targetTool: SprotCanvasTool | null = null;
  let modifierTool: SprotCanvasModifierTool | null = null;

    onMount(() => {
        getTargetTool(tool => targetTool = tool);
        getActionModifierTool(tool => {
            tool
            .Some(modifier => modifierTool = modifier)
            .None(() => modifierTool = null);
        });
    })
</script>

<h2>Toolset</h2>

{#if modifierTool}
    <h3>{modifierTool.name} Tool</h3>
    {:else if targetTool}
    <h3>{targetTool.name} Tool</h3>
    {:else}
    <h3>No Tool</h3>
{/if}