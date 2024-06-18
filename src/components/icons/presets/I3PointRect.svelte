<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="3" height="3" stroke="%color%"/>
            <rect x="12.5" y="0.5" width="3" height="3" stroke="%color%"/>
            <rect x="12.5" y="12.5" width="3" height="3" stroke="%color%"/>
            <path d="M2 14V3.5H3.5V2H12.5V3.5H14V12.5H12.5V14H2Z" stroke="%color%"/>
        </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
