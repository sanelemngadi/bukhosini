<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 2.5H3.25C3.05109 2.5 2.86032 2.57902 2.71967 2.71967C2.57902 2.86032 2.5 3.05109 2.5 3.25V15.25C2.5 15.4489 2.57902 15.6397 2.71967 15.7803C2.86032 15.921 3.05109 16 3.25 16H12.75C12.9489 16 13.1397 15.921 13.2803 15.7803C13.421 15.6397 13.5 15.4489 13.5 15.25V3.25C13.5 3.05109 13.421 2.86032 13.2803 2.71967C13.1397 2.57902 12.9489 2.5 12.75 2.5ZM12.5 15H3.5V3.5H12.5V15Z" fill="%color%"/>
        <path d="M11 0.75C11 0.551088 10.921 0.360322 10.7803 0.21967C10.6397 0.0790177 10.4489 0 10.25 0H0.75C0.551088 0 0.360322 0.0790177 0.21967 0.21967C0.0790175 0.360322 0 0.551088 0 0.75V12.75C0 12.9489 0.0790175 13.1397 0.21967 13.2803C0.360322 13.421 0.551088 13.5 0.75 13.5H1V1H11V0.75Z" fill="%color%"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled}/>        