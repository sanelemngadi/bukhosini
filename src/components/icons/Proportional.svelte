<script lang="ts">
  import Icon from "./ICON.svelte";
  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <g>
    <g>
      <rect x="0.13" y="0.13" width="15.75" height="15.75" stroke="%color%" fill="none"/>
      <path d="M15.75.25v15.5H.25V.25h15.5M16,0H0V16H16V0Z"/>
    </g>
    <path d="M5.2,11.43H4.42V6.93c0-.25,0-.46,0-.62s0-.31,0-.48l-.27.24-.29.25-.69.56L2.8,6.35,4.54,5H5.2Z" fill="%color%"/>
    <path d="M7.67,7.09a.58.58,0,0,1,.94-.48.56.56,0,0,1,.18.48.58.58,0,0,1-.18.47.61.61,0,0,1-.78,0A.61.61,0,0,1,7.67,7.09Zm0,3.85a.58.58,0,0,1,.16-.47.65.65,0,0,1,.78,0,.56.56,0,0,1,.18.47.57.57,0,0,1-.18.47.61.61,0,0,1-.78,0A.59.59,0,0,1,7.67,10.94Z" fill="%color%"/>
    <path d="M12.5,11.43h-.77V6.93c0-.25,0-.46,0-.62s0-.31,0-.48l-.26.24-.29.25-.69.56-.41-.53L11.85,5h.65Z" fill="%color%"/>
  </g>
</svg>
  `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
