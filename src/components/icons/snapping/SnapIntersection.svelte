<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 8.38477L17 8.38477" stroke="%color%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5249 1L4.69234 8.83257" stroke="%color%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="5.92296" cy="8.38439" r="1.71154" stroke="%color%" stroke-width="1.5"/>
      <circle cx="5.92315" cy="8.38458" r="1.23077" fill="%bg%"/>
      </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />       