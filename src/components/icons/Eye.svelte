<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00174 12.3326C9.71995 12.3326 11.1128 10.9397 11.1128 9.22146C11.1128 7.50324 9.71995 6.11035 8.00174 6.11035C6.28352 6.11035 4.89062 7.50324 4.89062 9.22146C4.89062 10.9397 6.28352 12.3326 8.00174 12.3326Z" fill="%color%"/>
      <path d="M15 9.22222C15 9.22222 14.2222 3 8 3C1.77778 3 1 9.22222 1 9.22222" stroke="%color%"/>
      </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />    