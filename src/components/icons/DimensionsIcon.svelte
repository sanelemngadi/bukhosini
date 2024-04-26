<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.33691 9.96484L5.1253 9.2177L3.08406 7.17646L2.33691 9.96484ZM8.96433 3.33743L6.17594 4.08457L8.21718 6.12581L8.96433 3.33743ZM4.10468 8.55063L7.55012 5.10519L7.19656 4.75164L3.75113 8.19708L4.10468 8.55063Z" fill="%color%"/>
        <line x1="9.7266" y1="0.646447" x2="16.354" y2="7.27386" stroke="%color%"/>
        <line x1="0.353553" y1="10.0195" x2="6.98097" y2="16.6469" stroke="%color%"/>
        </svg>
    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />    



    