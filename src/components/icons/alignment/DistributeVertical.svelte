<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="7.5" y1="2.5" x2="7.5" y2="0.5" stroke="%color%" stroke-linecap="round"/>
            <line x1="7.5" y1="15.5" x2="7.5" y2="13.5" stroke="%color%" stroke-linecap="round"/>
            <line x1="7.5" y1="9.5" x2="7.5" y2="6.5" stroke="%color%" stroke-linecap="round"/>
            <rect x="0.5" y="2.5" width="14" height="4" rx="0.5" stroke="%color%"/>
            <rect x="2.5" y="9.5" width="10" height="4" rx="0.5" stroke="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />       