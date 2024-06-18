<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.26562 7.07715H9.54767V10.7694" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M0.888672 12.2969H15.1109" stroke="%color%" stroke-linecap="round"/>
      <path d="M5.3928 1.85672C5.3928 1.50168 5.19381 1.21387 4.94835 1.21387C4.70289 1.21387 4.50391 1.50168 4.50391 1.85672H5.3928ZM4.50391 1.85672V11.3512H5.3928V1.85672H4.50391Z" fill="%color%"/>
      <path d="M5 13.8301C6.10457 13.8301 7 12.9346 7 11.8301C7 10.7255 6.10457 9.83008 5 9.83008C3.89543 9.83008 3 10.7255 3 11.8301C3 12.9346 3.89543 13.8301 5 13.8301Z" fill="%color%"/>
      </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />       