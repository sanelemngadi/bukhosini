<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12.8535" y="0.5" width="3" height="3" stroke="%color%"/>
        <rect x="12.8535" y="12.5" width="3" height="3" stroke="%color%"/>
        <rect x="0.853516" y="14.5" width="1" height="1" stroke="%color%"/>
        <path d="M12.8535 3.5L1.35352 15H12.8535" stroke="%color%" stroke-linecap="square" stroke-linejoin="round"/>
        <path d="M6.35352 10L1.85352 14.5H6.35352V10Z" stroke="%color%" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
