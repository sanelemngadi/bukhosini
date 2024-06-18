<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.29895 9.64053C5.10042 9.83247 5.09508 10.149 5.28701 10.3475C5.47895 10.5461 5.79549 10.5514 5.99402 10.3595L5.29895 9.64053ZM15.4121 0.558594L9.81091 1.95855L13.8239 6.10935L15.4121 0.558594ZM5.99402 10.3595L12.5244 4.04589L11.8293 3.32695L5.29895 9.64053L5.99402 10.3595Z" fill="%color%"/>
        <path d="M5.64648 10C5.37034 10 5.14648 10.2239 5.14648 10.5C5.14648 10.7761 5.37034 11 5.64648 11L5.64648 10ZM5.64648 11L15.6465 11L15.6465 10L5.64648 10L5.64648 11Z" fill="%color%"/>
        <path d="M9.00024 11.1219C8.45957 12.81 5.64507 16.2979 3.04848 14.4975C-0.197259 12.247 0.884656 7.7466 3.04852 7.18378C4.77954 6.73354 7.55777 7.18347 7.91833 7.74613" stroke="%color%" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
