<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3536 8.35355C16.5488 8.15829 16.5488 7.84171 16.3536 7.64645L13.1716 4.46447C12.9763 4.2692 12.6597 4.2692 12.4645 4.46447C12.2692 4.65973 12.2692 4.97631 12.4645 5.17157L15.2929 8L12.4645 10.8284C12.2692 11.0237 12.2692 11.3403 12.4645 11.5355C12.6597 11.7308 12.9763 11.7308 13.1716 11.5355L16.3536 8.35355ZM16 7.5L4.37114e-08 7.5L-4.37114e-08 8.5L16 8.5L16 7.5Z" fill="%color%"/>
            </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />   

    