<script lang="ts">
  import Icon from "./ICON.svelte";
    export let size: number = 16;
    export let color: string = "#000"; // # = %23
    export let bg: string = "#fff";
    const svg = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="6.5" height="16.5" viewBox="0 0 6.5 16.5">
            <g>
            <path d="M.75,5.75V3.25a2.5,2.5,0,1,1,5,0v2.5" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1.5"/>
            <path d="M5.75,9.75v3.5a2.5,2.5,0,0,1-5,0V9.75" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1.5"/>
            <line x1="3.19" y1="4.75" x2="3.19" y2="12.75" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1.5"/>
            </g>
    </svg>`;
</script>
  
<Icon svgString={svg} {size} {color} {bg} />  