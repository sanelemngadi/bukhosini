<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="15.5" y1="15.5" x2="15.5" y2="0.5" stroke="%color%" stroke-linecap="round"/>
        <rect x="12.5" y="14.5" width="12" height="5" rx="0.5" transform="rotate(180 12.5 14.5)" stroke="%color%"/>
        <rect x="12.5" y="6.5" width="9" height="5" rx="0.5" transform="rotate(180 12.5 6.5)" stroke="%color%"/>
    </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />       