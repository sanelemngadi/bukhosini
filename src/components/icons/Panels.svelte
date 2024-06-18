<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_838_148" fill="%color%">
        <rect width="16" height="16" rx="1"/>
        </mask>
        <rect width="16" height="16" rx="1" stroke="%color%" stroke-width="3" stroke-linejoin="round" mask="url(#path-1-inside-1_838_148)"/>
        <line x1="1.6001" y1="7.25" x2="14.4001" y2="7.25" stroke="%color%" stroke-width="1.5" stroke-linejoin="round"/>
        <line x1="8.75" y1="4.0498" x2="15.25" y2="4.04981" stroke="%color%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled}/>   