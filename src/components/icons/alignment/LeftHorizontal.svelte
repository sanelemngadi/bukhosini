<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.5" y2="15.5" stroke="%color%" stroke-linecap="round"/>
            <rect x="3.5" y="1.5" width="9" height="5" rx="0.5" stroke="%color%"/>
            <rect x="3.5" y="9.5" width="12" height="5" rx="0.5" stroke="%color%"/>
        </svg>
            `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />       