<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.38 15.38">
  <g>
    <polyline points="0.5 0 0.5 14.88 15.38 14.88" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <g>
      <path d="M508,231.52a9.54,9.54,0,0,0-6.44-5.15" transform="translate(-496 -222.5)" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="0.5"/>
      <polygon points="12.59 12.5 13.55 7.21 11.8 8.79 9.57 8.05 12.59 12.5" fill="%color%"/>
      <polygon points="2 3.55 7.18 2.13 5.77 4 6.7 6.16 2 3.55" fill="%color%"/>
    </g>
    <path d="M507.54,233a1.72,1.72,0,0,0,0-.32c0-3.43-3.16-6.22-7-6.22l-.47,0" transform="translate(-496 -222.5)" fill="none" stroke="%color%" stroke-miterlimit="10"/>
  </g>
</svg>
 `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
