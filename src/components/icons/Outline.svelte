<script lang="ts">
    import { onMount } from "svelte";
  
    import { colorToUrlCompatible, svgToURL } from "$lib/utils";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      const getSVG = (color: string): string => {
          return svgToURL(`
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.99993" cy="7.99993" r="5.21429" stroke="${color}"/>
            <circle cx="8" cy="8" r="7.5" stroke="${color}"/>
            </svg>

        `)
      }
  
      let svg: string = getSVG(colorToUrlCompatible(color));
  
      $: {
          svg = getSVG(colorToUrlCompatible(color));
      }
  </script>
  
  <span class="inline-flex items-center justify-center w-[{size * 20}px] h-[{size * 20}px] border-none {color}">
      <img src={svg} alt="SVG " width={size} height={size}>
  </span>
      