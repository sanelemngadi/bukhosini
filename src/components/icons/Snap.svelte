<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3333 1H7.66667C3.98477 1 1 3.98477 1 7.66667V7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333H10.3333" stroke="%color%" stroke-linejoin="round"/>
        <path d="M13 2.33301L17 2.33301" stroke="%color%" stroke-width="3" stroke-linejoin="round"/>
        <path d="M13 13L17 13" stroke="%color%" stroke-width="3" stroke-linejoin="round"/>
        <path d="M10 4H8C5.79086 4 4 5.79086 4 8V8C4 10.2091 5.79086 12 8 12H10" stroke="%color%" stroke-linejoin="round"/>
    </svg>
    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />   