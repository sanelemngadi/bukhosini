<script lang="ts">
  import Icon from "./ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.27 16.26">
        <g>
            <g>
            <line x1="0.5" y1="1" x2="15.77" y2="1" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1"/>
            <line x1="1" y1="0.5" x2="1" y2="15.76" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1"/>
            </g>
            <g>
            <g>
                <line x1="15.77" y1="15.26" x2="13.77" y2="15.26" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1"/>
                <line x1="12.16" y1="15.26" x2="3.31" y2="15.26" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1" stroke-dasharray="3.22 1.61"/>
                <line x1="2.5" y1="15.26" x2="0.5" y2="15.26" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1"/>
            </g>
            <g>
                <line x1="15.27" y1="15.76" x2="15.27" y2="13.76" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1"/>
                <line x1="15.27" y1="12.15" x2="15.27" y2="3.3" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1" stroke-dasharray="3.22 1.61"/>
                <line x1="15.27" y1="2.5" x2="15.27" y2="0.5" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1"/>
            </g>
            </g>
        </g>
    </svg>`;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
