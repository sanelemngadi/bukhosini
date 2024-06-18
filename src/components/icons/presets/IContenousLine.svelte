<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.5" y="0.5" width="3" height="3" stroke="%color%"/>
            <rect x="0.5" y="12.5" width="3" height="3" stroke="%color%"/>
            <rect x="12.5" y="0.5" width="3" height="3" stroke="%color%"/>
            <path d="M1 12L6.25 4L9.75 12L15 4" stroke="%color%" stroke-linecap="square" stroke-linejoin="round"/>
            <rect x="8.5" y="12.5" width="3" height="3" stroke="%color%"/>
        </svg>
        `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
