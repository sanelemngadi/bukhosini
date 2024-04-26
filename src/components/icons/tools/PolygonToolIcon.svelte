<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.01108 15.25L8 1.12731L14.9889 15.25H1.01108Z" stroke="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   