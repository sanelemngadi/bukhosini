<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12.0225H15" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2L5 12" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.74414 13.4932C6.84871 13.4932 7.74414 12.5977 7.74414 11.4932C7.74414 10.3886 6.84871 9.49316 5.74414 9.49316C4.63957 9.49316 3.74414 10.3886 3.74414 11.4932C3.74414 12.5977 4.63957 13.4932 5.74414 13.4932Z" fill="%color%"/>
</svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled}/>       