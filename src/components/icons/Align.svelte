<script lang="ts">
  import Icon from "./ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1V16.3333" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="4.1665" y="2.83301" width="8.33333" height="4.33333" rx="0.5" stroke="%color%" stroke-linejoin="round"/>
        <rect x="4.1665" y="9.5" width="12.3333" height="4.33333" rx="0.5" stroke="%color%" stroke-linejoin="round"/>
    </svg>
    `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />

<!-- <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1V17M4.09677 10.7742V13.9355C4.09677 14.4878 4.54449 14.9355 5.09677 14.9355H16C16.5523 14.9355 17 14.4878 17 13.9355V10.7742C17 10.2219 16.5523 9.77419 16 9.77419H5.09677C4.54449 9.77419 4.09677 10.2219 4.09677 10.7742ZM4.09677 4.06452V6.19355C4.09677 6.74583 4.54449 7.19355 5.09678 7.19355H11.3548C11.9071 7.19355 12.3548 6.74583 12.3548 6.19355V4.06452C12.3548 3.51223 11.9071 3.06452 11.3548 3.06452H5.09677C4.54449 3.06452 4.09677 3.51223 4.09677 4.06452Z" stroke="#E6E6E6" stroke-linecap="round"/>
</svg> -->
