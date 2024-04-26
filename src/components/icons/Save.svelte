<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L17 5V17H13M13 1H5M13 1V6H5V1M5 17H1V1H5M5 17V9H13V17M5 17H13" stroke="%color%" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   