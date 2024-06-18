<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7.5" stroke="%color%"/>
            <line x1="2.35355" y1="2.64645" x2="13.3536" y2="13.6464" stroke="%color%"/>
            <line x1="2.64645" y1="13.6464" x2="13.6464" y2="2.64645" stroke="%color%"/>
            </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled}/>   


    