   <script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="16" height="16" stroke="%color%" stroke-width="1.5" />
    </svg>
    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />    