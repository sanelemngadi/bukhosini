<script lang="ts">
  import { getAppViewController, getTargetTool } from "$lib/stores";
  import type { SprotCanvasTool } from "$lib/tools/base";
  import { SprotToolSet, type SprotAppViewController } from "$wasm/sprot_app";
  import { onMount } from "svelte";

  let input: HTMLInputElement;
  let focused = false;
  let tool: SprotCanvasTool | null = null;
  let appState: SprotAppViewController | null = null;
  let inputStatusLabel: string = "";
  let inputInput: string = "";

  onMount(() => {
    getTargetTool((t) => (tool = t));
    getAppViewController((app) => (appState = app));

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });

  const onMouseMove = () => {
    if (appState) {
      if (tool && tool.statusState) {
        inputInput = tool.statusState.get_input();
        inputStatusLabel = tool.statusState.get_label();
      }

      // if (input) {
      //   input.select();

      //   if (!focused) {
      //     input.focus();
      //   }
      // }
    }
  };

  const onBlur = () => {
    focused = false;
    if (input && appState && appState.is_busy()) {
      input.focus();
      input.select();
    }
  };

  $: if (inputInput) {
    inputInput = inputInput.trim();

    if (appState) {
      switch (inputInput.toLowerCase()) {
        case "l":
          appState.set_action_tool(SprotToolSet.SprotLineTool);
          inputInput = "";
          break;
        case "r":
          appState.set_action_tool(SprotToolSet.SprotRectTool);
          inputInput = "";
          break;
        case "o":
          appState.set_action_tool(SprotToolSet.SprotEllipseTool);
          inputInput = "";
          break;
        case "a":
          appState.set_action_tool(SprotToolSet.SprotArcTool);
          inputInput = "";
          break;

        default:
          break;
      }
    }
  }
</script>

<label
  for=""
  class="borderl bg-whitel h-full inline-flex gap-2 text-sprotB px-1"
>
  {#if tool}
    {inputStatusLabel}:
    <input
      type="text"
      name=""
      id=""
      class="text-sprotTexts outline-none px-1 select-all"
      style="user-select: all;"
      bind:this={input}
      on:focus={() => (focused = true)}
      on:blur={onBlur}
      bind:value={inputInput}
      disabled={true}
    />
  {:else}
    Mouse
    <input
      type="text"
      name=""
      id=""
      class="text-sprotBg outline-none px-1"
      value={inputInput}
    />
  {/if}
</label>
