<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.5" y1="7.5" x2="0.5" y2="7.5" stroke="%color%" stroke-linecap="round"/>
            <line x1="15.5" y1="7.5" x2="13.5" y2="7.5" stroke="%color%" stroke-linecap="round"/>
            <line x1="9.5" y1="7.5" x2="6.5" y2="7.5" stroke="%color%" stroke-linecap="round"/>
            <rect x="2.5" y="14.5" width="14" height="4" rx="0.5" transform="rotate(-90 2.5 14.5)" stroke="%color%"/>
            <rect x="9.5" y="12.5" width="10" height="4" rx="0.5" transform="rotate(-90 9.5 12.5)" stroke="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />       