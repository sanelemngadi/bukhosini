<script lang="ts">
    import Icon from "./ICON.svelte";
  
    export let size: number = 16;
    export let color: string = "#000"; // # = %23
    export let bg: string = "#fff";
    const svg = `
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 5.71073V16.8949H0.5V1.10547H8.39474M13 5.71073L8.39474 1.10547M13 5.71073H8.39474V1.10547M7.07895 9.00021V14.2634" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.44727 11.6318H9.71042" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `;
</script>
      
<Icon svgString={svg} {size} {color} {bg} />        