<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3L0.401924 0.75L5.59808 0.75L3 3Z" fill="%color%"/>
    </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />   