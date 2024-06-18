<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.69238 2.46094H10.077C10.6293 2.46094 11.077 2.90865 11.077 3.46094V12.5379C11.077 13.0901 10.6293 13.5379 10.077 13.5379H3.69238" stroke="%color%"/>
          <line x1="1" x2="1" y2="16" stroke="%color%" stroke-width="2"/>
          </svg>
    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />   

    