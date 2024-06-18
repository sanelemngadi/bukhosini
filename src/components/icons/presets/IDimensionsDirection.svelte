<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <g>
    <rect width="15.99" height="15.7" fill="none"/>
    <g>
      <line x1="4.88" y1="12.1" x2="15.64" y2="0.98" fill="none" stroke="%color%" stroke-miterlimit="10"/>
      <g>
        <path d="M506,230.06a5.46,5.46,0,0,0-3.55,3.12,5.64,5.64,0,0,0,2.73,7.34,5.32,5.32,0,0,0,7.11-2.82" transform="translate(-501.5 -225.5)" fill="none" stroke="%color%" stroke-miterlimit="10"/>
        <path d="M505.61,230.21a7.27,7.27,0,0,0-1.76,4.47,13.6,13.6,0,0,1,5.72-4.32,14.37,14.37,0,0,1-5.37-4.76A7.65,7.65,0,0,0,505.61,230.21Z" fill="%color%" transform="translate(-501.5 -225.5)"/>
      </g>
    </g>
  </g>
</svg>

  
        `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
