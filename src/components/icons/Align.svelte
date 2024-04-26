<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1V16.3333" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="4.1665" y="2.83301" width="8.33333" height="4.33333" rx="0.5" stroke="%color%" stroke-linejoin="round"/>
        <rect x="4.1665" y="9.5" width="12.3333" height="4.33333" rx="0.5" stroke="%color%" stroke-linejoin="round"/>
    </svg>
    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   