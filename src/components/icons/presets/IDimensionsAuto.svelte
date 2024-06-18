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
      <line x1="10.97" y1="11.83" x2="5.03" y2="11.83" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="0.5"/>
      <polygon points="14.5 11.83 9.53 9.8 10.71 11.83 9.53 13.87 14.5 11.83" fill="%color%"/>
      <polygon points="1.5 11.83 6.47 9.8 5.29 11.83 6.47 13.87 1.5 11.83" fill="%color%"/>
    </g>
    <line x1="0.5" y1="7.83" x2="0.5" y2="15.83" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <line x1="4" y1="12" x2="12" y2="12" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <line x1="15.5" y1="7.83" x2="15.5" y2="15.83" fill="none" stroke="%color%" stroke-miterlimit="10"/>
    <path d="M514.56,239.24l-.84,2.55h-1.08l2.75-8.09h1.26l2.75,8.09h-1.11l-.86-2.55Zm2.65-.81-.79-2.33c-.18-.53-.3-1-.42-1.47h0c-.12.48-.25,1-.4,1.46l-.8,2.34Z" transform="translate(-508 -233)" fill="%color%"/>
    <rect width="16" height="16" fill="none"/>
  </g>
</svg>
        `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
