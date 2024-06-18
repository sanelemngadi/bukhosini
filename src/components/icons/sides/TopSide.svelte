<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5391 3.69238L13.5391 10.077C13.5391 10.6293 13.0913 11.077 12.5391 11.077L3.46214 11.077C2.90985 11.077 2.46214 10.6293 2.46214 10.077L2.46214 3.69238" stroke="%color%"/>
        <line x1="16" y1="1" x2="-4.37114e-08" y2="0.999999" stroke="%color%" stroke-width="2"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />   

    