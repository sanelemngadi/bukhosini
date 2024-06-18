<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g>
                        <polygon points="5.28 7.55 0.5 3.06 0.5 12.05 5.28 7.55" fill="%color%" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
                        <polygon points="10.72 7.55 15.5 12.05 15.5 3.06 10.72 7.55" fill="none" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
                        <g>
                        <line x1="7.98" y1="0.5" x2="7.98" y2="2.5" fill="none" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="7.98" y1="4.07" x2="7.98" y2="12.71" fill="none" stroke="%color%" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3.14 1.57"/>
                        <line x1="7.98" y1="13.5" x2="7.98" y2="15.5" fill="none" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </g>
            </svg>

        `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
