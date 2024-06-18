<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g>
                <polygon points="5.5 5.5 10.5 5.5 10.5 0.5 0.5 0.5 0.5 10.5 5.5 10.5 5.5 5.5" fill="%color%" stroke="%color%" stroke-miterlimit="10"/>
                <rect x="5.5" y="5.5" width="10" height="10" fill="none" stroke="%color%" stroke-miterlimit="10"/>
            </g>
        </svg>`;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
