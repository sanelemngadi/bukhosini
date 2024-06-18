<script lang="ts">
  import Icon from "./ICON.svelte";
  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="6.5" height="16.5" viewBox="0 0 6.5 16.5">
            <g>
            <path d="M.75,5.75V3.25a2.5,2.5,0,1,1,5,0v2.5" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1.5"/>
            <path d="M5.75,9.75v3.5a2.5,2.5,0,0,1-5,0V9.75" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1.5"/>
            <line x1="3.19" y1="4.75" x2="3.19" y2="12.75" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1.5"/>
            </g>
    </svg>`;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />

<!-- <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5.5V1H7V5.5M1 10V16H7V10M4 5V12.5" stroke="#E6E6E6" stroke-linecap="round"/>
  </svg>

<script lang="ts">
  import { colorToUrlCompatible, svgToURL } from "$lib/utils";
  import { ConstraintsPath } from "./app-icons";

  export let size: number = 16;
  export let color: string = "#D0CECF"; // # = %23
  export let bg: string = "";
  // export let svgString: string ="";
  export let disabled: boolean = false;
</script>

<span
  class="inline-flex items-center justify-center min-w-[{size}px] h-[{size}px] pointer-events-none"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <path
      d={ConstraintsPath}
      fill="none"
      stroke={color}
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</span> -->
