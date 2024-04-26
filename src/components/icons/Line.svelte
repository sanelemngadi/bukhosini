<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.506122" y1="15.4356" x2="16.5061" y2="1.43557" stroke="%color%" stroke-width="1"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />    