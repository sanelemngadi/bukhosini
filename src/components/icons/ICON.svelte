<script lang="ts">
  import { colorToUrlCompatible, svgToURL } from "$lib/utils";
  import { onMount } from "svelte";

  export let size: number;
  export let color: string = "#D0CECF"; // # = %23
  export let bg: string;
  export let svgString: string;
  export let disabled: boolean = false;
  let replaceColor: string = "#D0CECF";

  onMount(() => {
    // replaceColor = disabled ? "#5C5E61" : "#D0CECF";
    // replaceColor = "#5C5E61";
  });

  const getSVG = (color: string): string => {
    // const replaceColor = "#D0CECF";
    return svgToURL(
      svgString.replaceAll(
        "%color%",
        colorToUrlCompatible(replaceColor).replaceAll(
          "%bg%",
          colorToUrlCompatible(bg)
        )
      )
    );
  };

  let svg: string = getSVG(colorToUrlCompatible(replaceColor));

  $: {
    replaceColor = disabled ? "#5C5E61" : "#D0CECF";

    svg = getSVG(colorToUrlCompatible(replaceColor));
  }
</script>

<span
  class="inline-flex items-center justify-center min-w-[{size}px] h-[{size}px] pointer-events-none"
>
  <img
    src={svg}
    alt="SVG "
    height={size}
    class="h-full"
    style="height: {size}px;"
  />
</span>
