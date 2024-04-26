<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1L1 15" stroke="%color%" stroke-linejoin="round"/>
            <path d="M1 1L15 15" stroke="%color%" stroke-linejoin="round"/>
        </svg>
    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />    


    