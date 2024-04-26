<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 7.99984L4 11.3332H12.6667L9.33333 6.6665L8 9.33317L6.66667 7.99984Z" stroke="%color%" stroke-width="1.5" stroke-linejoin="round"/>
        <mask id="path-2-inside-1_832_135" fill="%color%">
        <rect width="16" height="16" rx="1"/>
        </mask>
        <rect width="16" height="16" rx="1" stroke="%color%" stroke-width="3" stroke-linejoin="round" mask="url(#path-2-inside-1_832_135)"/>
        </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />       