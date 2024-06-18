<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 11.3135H22.6274" stroke="%color%" stroke-width="2" stroke-linejoin="round"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />   