<script lang="ts">
    import Icon from "./ICON.svelte";
  
    export let size: number = 16;
    export let color: string = "#000"; // # = %23
    export let bg: string = "#fff";
    export let disabled: boolean = false;
    const svg = `
    
        `;
</script>
      
<Icon svgString={svg} {size} {color} {bg} {disabled} />        