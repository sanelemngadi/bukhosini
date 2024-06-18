<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="5.5" width="10" height="10" stroke="%color%"/>
        <rect x="3" y="3" width="10" height="10" fill="%bg%" stroke="%color%"/>
        <rect x="5" width="11" height="11" fill="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />       