<script lang="ts">
  import { onMount } from "svelte";

  import { colorToUrlCompatible, svgToURL } from "$lib/utils";
  import Icon from "./ICON.svelte";

    export let size: number = 16;
    export let color: string = "#000"; // # = %23
    export let bg: string = "#fff";
    const svg = `
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 17V1L13.3077 11.4615H5.92308L1 17Z" stroke="${color}" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>`;
</script>

<Icon svgString={svg} {size} {color} {bg} />