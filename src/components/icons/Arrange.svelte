<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="15" height="15" stroke="%color%"/>
            <rect x="2.95459" y="2.99902" width="10.0455" height="10.0455" stroke="%color%"/>
            <rect x="5.5" y="5.5" width="5" height="5" stroke="%color%"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   