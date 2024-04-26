<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="9.5" x2="16" y2="9.5" stroke="%color%"/>
</svg>
`;
  </script>
<Icon svgString={svg} {size} {color} {bg} /> 