<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.20605" y="0.5" width="10.2941" height="11.2353" stroke="#E6E6E6"/>
          <rect y="2.82324" width="11.2941" height="12.2353" fill="#E6E6E6"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />    