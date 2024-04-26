<script lang="ts">
    import { colorToUrlCompatible, svgToURL } from "$lib/utils";
  
      export let size: number;
      export let color: string; // # = %23
      export let bg: string;
      export let svgString: string;

      const getSVG = (color: string): string => {
          return svgToURL(svgString.replaceAll("%color%", colorToUrlCompatible(color).replaceAll("%bg%", colorToUrlCompatible(bg))));
      }
  
      let svg: string = getSVG(colorToUrlCompatible(color));
  
      $: {
          svg = getSVG(colorToUrlCompatible(color));
      }
  </script>
  
  <span class="inline-flex items-center justify-center min-w-[{size}px] h-[{size}px]">
      <img src={svg} alt="SVG " height={size} class="h-full" style="height: {size}px;">
  </span>
      