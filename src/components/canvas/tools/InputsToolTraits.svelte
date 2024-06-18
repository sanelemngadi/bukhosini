<script lang="ts">
  import { SprotCanvasTool } from "$lib/tools/base";
  import { onMount } from "svelte";

  //   export let tool: SprotCanvasTool;
  //   export let mouse_coords: { x: number; y: number } = { x: 0.0, y: 0.0 };
  let inputA: HTMLInputElement;
  let inputAFocused: boolean = false;

  let inputB: HTMLInputElement;
  let inputBFocused: boolean = false;

  const init = () => {
    if (inputA) {
      inputA.focus();
    }
  };

  onMount(init);
</script>

<!-- <div
  class="border border-sprotSuccess absolute"
  style="left: {mouse_coords.x}px; top: {mouse_coords.y}px;"
>
  <input
    type="text"
    name=""
    id=""
    class="h-5 w-20 text-sm font-normal text-sprotBg1 inline-block px-1 bg-sprotBgLight60 focus:bg-sprotText"
    value={mouse_coords.x}
    tabindex="0"
    bind:this={inputA}
    on:blur={() => {
      inputAFocused = false;
    }}
    on:focus={() => {
      inputAFocused = true;
    }}
  />
  <input
    type="text"
    name=""
    id=""
    class="h-5 w-20 text-sm font-normal text-sprotBg1 inline-block px-1 bg-sprotBgLight60 focus:bg-sprotText"
    value={mouse_coords.y}
    tabindex="0"
    bind:this={inputB}
    on:blur={() => {
      inputBFocused = false;
    }}
    on:focus={() => {
      inputBFocused = true;
    }}
  />
</div> -->
