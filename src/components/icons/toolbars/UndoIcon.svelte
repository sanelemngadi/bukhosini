<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.39853 0L0.505341 5.89319L0 6.42357L0.506078 6.95396L6.39926 12.8471L7.46004 11.7864L2.8302 7.16022H12.4538C14.4832 7.16022 16.137 8.814 16.137 10.8435V16H17.6103V10.8435C17.6103 8.01105 15.2862 5.68692 12.4538 5.68692H2.83094L7.45856 1.06077L6.39853 0Z" fill="%color%"/>
      </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />        