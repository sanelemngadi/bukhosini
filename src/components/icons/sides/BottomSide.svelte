<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.46094 8.30762L2.46094 1.923C2.46094 1.37072 2.90865 0.923002 3.46094 0.923002L12.5379 0.923001C13.0901 0.923001 13.5379 1.37072 13.5379 1.923L13.5379 8.30762" stroke="%color%"/>
        <line x1="-4.37114e-08" y1="11" x2="16" y2="11" stroke="%color%" stroke-width="2"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   

    