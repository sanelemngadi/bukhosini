<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1606 7.72559L1.73959 16.9887" stroke="%color%" stroke-width="2" stroke-linecap="round"/>
            <path d="M14.7871 2.67871L9.73448 8.15239" stroke="%color%" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 2"/>
            <path d="M9.72461 6.78516L17.7246 15.2062" stroke="%color%" stroke-width="2" stroke-linecap="round"/>
            <path d="M4.2334 1.29297L9.70708 6.76665" stroke="%color%" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 2"/>
            </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />    