<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="8" r="1.5" stroke="%color%"/>
            <circle cx="14" cy="8" r="1.5" stroke="%color%"/>
            <path d="M3 8L13 8" stroke="%color%"/>
            <circle cx="14" cy="14" r="1.5" stroke="%color%"/>
            <circle cx="14" cy="2" r="1.5" stroke="%color%"/>
            <path d="M13 2H7V14H13" stroke="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled}/>   


    