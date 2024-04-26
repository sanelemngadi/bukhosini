<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="4" height="4" fill="%color%"/>
            <rect y="6" width="4" height="4" fill="%color%"/>
            <rect y="12" width="4" height="4" fill="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />    