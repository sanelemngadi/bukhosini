<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 14.3758V11.4034C1 5.65775 5.65775 1 11.4034 1H14.3758M14.9993 15H12.3717M14.9993 15V12.3724M14.9993 15L12.8896 12.8896" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.20312 6.20117L11.4048 11.4029" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
`;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
