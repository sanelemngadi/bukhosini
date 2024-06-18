<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1461_36)">
        <path d="M8.55622 7.50586L1.46484 15.3064" stroke="%color%" stroke-width="1" stroke-linecap="round"/>
        <path d="M12.4521 3.25586L8.19727 7.86527" stroke="%color%" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 2"/>
        <path d="M8.18945 6.71387L14.9263 13.8053" stroke="%color%" stroke-width="1" stroke-linecap="round"/>
        <path d="M3.56445 2.08887L8.17387 6.69828" stroke="%color%" stroke-width="1" stroke-linecap="round" stroke-dasharray="2 2"/>
        </g>
        <defs>
        <clipPath id="clip0_1461_36">
        <rect width="16" height="15.1579" fill="white" transform="translate(0 1)"/>
        </clipPath>
        </defs>
        </svg>
`;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
