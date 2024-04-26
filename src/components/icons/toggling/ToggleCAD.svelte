<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_831_101" fill="%color%">
        <rect width="16" height="16" rx="1"/>
        </mask>
        <rect width="16" height="16" rx="1" stroke="%color%" stroke-width="3" mask="url(#path-1-inside-1_831_101)"/>
        <circle cx="5.59995" cy="5.6002" r="1.65" stroke="%color%" stroke-width="1.5"/>
        <line y1="5.6499" x2="4.8" y2="5.6499" stroke="%color%" stroke-width="1.5"/>
        <line x1="5.6499" y1="4.7998" x2="5.6499" y2="-0.00019547" stroke="%color%" stroke-width="1.5"/>
        <line x1="6.3999" y1="5.6499" x2="14.3999" y2="5.6499" stroke="%color%" stroke-width="1.5"/>
        <line x1="5.55005" y1="6.3999" x2="5.55005" y2="15.9999" stroke="%color%" stroke-width="1.5"/>
    </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />       