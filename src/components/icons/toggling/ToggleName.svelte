<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17L1 9L9 1H17V9L9 17Z" stroke="%color%" stroke-width="1.5" stroke-linejoin="round"/>
            <circle cx="12" cy="6" r="2.25" stroke="%color%" stroke-width="1.5"/>
        </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />       