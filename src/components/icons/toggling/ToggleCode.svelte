<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.11122 1L4.55566 13.4444" stroke="%color%" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M13.4445 1L9.88892 13.4444" stroke="%color%" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.77783 4.55566H17.0001" stroke="%color%" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M1 9.88867H15.2222" stroke="%color%" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />       