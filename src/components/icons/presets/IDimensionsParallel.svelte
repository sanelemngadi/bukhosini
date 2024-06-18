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
      <line x1="9.89" y1="6.1" x2="6.44" y2="9.55" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="0.5"/>
      <polygon points="12.38 3.6 7.43 5.68 9.7 6.28 10.3 8.56 12.38 3.6" fill="%color%"/>
      <polygon points="3.94 12.04 6.02 7.09 6.62 9.36 8.89 9.96 3.94 12.04" fill="%color%"/>
    </g>
    <polyline points="0.69 10.1 5.89 15.29 15.63 5.55 10.44 0.35" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <line x1="5.67" y1="10.53" x2="10.87" y2="5.33" fill="none" stroke="%color%" stroke-miterlimit="10"/>
  </g>
  <rect y="0.58" width="16" height="16" fill="none"/>
</svg>

  
        `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
