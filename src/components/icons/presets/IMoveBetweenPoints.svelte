<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="16" width="4" height="4" transform="rotate(-90 0 16)" fill="%color%"/>
        <rect x="4.5" y="11.5" width="3" height="3" transform="rotate(-90 4.5 11.5)" stroke="%color%"/>
        <circle cx="2" cy="2" r="2" transform="rotate(-90 2 2)" fill="%color%"/>
        <circle cx="14" cy="14" r="2" transform="rotate(-90 14 14)" fill="%color%"/>
        <path d="M8.87644 7.5538C8.87028 7.62256 8.92103 7.68329 8.98979 7.68945L10.1103 7.78977C10.1791 7.79592 10.2398 7.74517 10.246 7.67641C10.2521 7.60765 10.2014 7.54692 10.1326 7.54076L9.13659 7.45159L9.22576 6.45558C9.23192 6.38681 9.18116 6.32608 9.1124 6.31993C9.04364 6.31377 8.98291 6.36452 8.97676 6.43328L8.87644 7.5538ZM11.9902 4.90408L8.92079 7.46903L9.08109 7.66087L12.1505 5.09592L11.9902 4.90408Z" fill="%color%"/>
        <line x1="2.08839" y1="1.91161" x2="14.0884" y2="13.9116" stroke="%color%" stroke-width="0.25"/>
    </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
