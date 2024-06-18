<script lang="ts">
  import Icon from "./ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 16V1L13.3077 11.4615H5.92308L1 16Z" stroke="%color%" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>`;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
