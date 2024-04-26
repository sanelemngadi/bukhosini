<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6666 2.31543H2.31543L14.6666 14.6666H2.31543" stroke="%color%" stroke-linecap="round"/>
            <rect x="0.5" y="0.5" width="2.6492" height="2.6492" fill="%color%" stroke="%color%"/>
            <rect x="13.4131" y="0.5" width="2.6492" height="2.6492" fill="%color%" stroke="%color%"/>
            <rect x="0.5" y="12.8506" width="2.6492" height="2.6492" fill="%color%" stroke="%color%"/>
            <rect x="13.4131" y="12.8506" width="2.6492" height="2.6492" fill="%color%" stroke="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   
    