<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.30762 13.5391L1.923 13.5391C1.37072 13.5391 0.923002 13.0913 0.923002 12.5391L0.923002 3.46214C0.923003 2.90985 1.37072 2.46214 1.923 2.46214L8.30762 2.46214" stroke="%color%"/>
        <line x1="11" y1="16" x2="11" y2="-8.74228e-08" stroke="%color%" stroke-width="2"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   

    