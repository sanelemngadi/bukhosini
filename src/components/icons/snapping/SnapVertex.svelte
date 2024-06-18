<script lang="ts">
  import Icon from "../ICON.svelte";

    export let size: number = 16;
    export let color: string = "#000"; // # = %23
    export let bg: string = "#fff";
    export let disabled: boolean = false;
    const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00003 14C4.00003 15.1046 3.10459 16 2.00002 16C0.895438 16 0 15.1046 0 14C0 12.8955 0.895438 12 2.00002 12C3.10459 12 4.00003 12.8955 4.00003 14Z" fill="%color%"/>
      <path d="M16 14C16 15.1046 15.1046 16 14 16C12.8955 16 12 15.1046 12 14C12 12.8955 12.8955 12 14 12C15.1046 12 16 12.8955 16 14Z" fill="%color%"/>
      <path d="M9.99997 2C9.99997 3.10458 9.10461 4 8 4C6.89543 4 6 3.10458 6 2C6 0.895432 6.89543 0 8 0C9.10461 0 9.99997 0.895432 9.99997 2Z" fill="%color%"/>
      <path d="M2 14L8 2L14 14H2Z" stroke="%color%"/>
      </svg>

  `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />    