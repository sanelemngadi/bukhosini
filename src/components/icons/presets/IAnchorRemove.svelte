<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="3" fill="%color%"/>
        <line x1="14.3536" y1="0.353553" x2="0.353553" y2="14.3536" stroke="%color%"/>
        <line y1="0.5" x2="5" y2="0.5" stroke="%color%"/>
    </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
