<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <g>
    <g>
      <line x1="10.97" y1="7.83" x2="5.03" y2="7.83" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="0.5"/>
      <polygon points="14.5 7.83 9.53 5.8 10.71 7.83 9.53 9.87 14.5 7.83" fill="%color%"/>
      <polygon points="1.5 7.83 6.47 5.8 5.29 7.83 6.47 9.87 1.5 7.83" fill="%color%"/>
    </g>
    <line x1="0.5" y1="3.83" x2="0.5" y2="11.83" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <line x1="4" y1="8" x2="12" y2="8" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <line x1="15.5" y1="3.83" x2="15.5" y2="11.83" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <rect width="16" height="16" fill="none"/>
  </g>
</svg>
  
        `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
