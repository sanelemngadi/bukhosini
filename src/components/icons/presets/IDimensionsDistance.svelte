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
      <line x1="8.94" y1="2.51" x2="2.49" y2="9.01" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="0.5"/>
      <polygon points="11.43 0 6.48 2.1 8.75 2.69 9.37 4.96 11.43 0" fill="%color%"/>
      <polygon points="0 11.51 2.06 6.55 2.67 8.82 4.95 9.41 0 11.51" fill="%color%"/>
    </g>
    <line x1="2.34" y1="9.45" x2="9.38" y2="2.36" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <line x1="2.11" y1="15.65" x2="15.65" y2="2.01" fill="none" stroke="%color%" stroke-miterlimit="10"/>
  </g>
</svg>

  
        `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
