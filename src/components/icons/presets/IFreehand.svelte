<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 3.5L2 12L3.5 5.5L4.5 12L6 3L8 8.5L9 3L11 13L12.5 6L14.5 13L15.5 9.5" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
