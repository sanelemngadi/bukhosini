<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="12.5" width="3" height="3" fill="%color%" stroke="%color%"/>
        <rect x="6.5" y="0.5" width="3" height="3" fill="%color%" stroke="%color%"/>
        <rect x="12.5" y="0.5" width="3" height="3" fill="%color%" stroke="%color%"/>
        <path d="M3.5 12.5L8 3.5L11 12.5L15.5 3.5" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="9.5" y="12.5" width="3" height="3" fill="%color%" stroke="%color%"/>
    </svg>
        `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
