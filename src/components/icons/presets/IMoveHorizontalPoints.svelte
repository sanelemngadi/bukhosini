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
        <circle cx="14" cy="2" r="2" transform="rotate(-90 14 2)" fill="%color%"/>
        <path d="M8.08839 1.91161C8.03957 1.8628 7.96043 1.8628 7.91161 1.91161L7.11612 2.70711C7.0673 2.75592 7.0673 2.83507 7.11612 2.88388C7.16493 2.9327 7.24408 2.9327 7.29289 2.88388L8 2.17678L8.70711 2.88388C8.75592 2.9327 8.83507 2.9327 8.88388 2.88388C8.9327 2.83507 8.9327 2.75592 8.88388 2.70711L8.08839 1.91161ZM8.125 6L8.125 2L7.875 2L7.875 6L8.125 6Z" fill="%color%"/>
        <line x1="2" y1="1.875" x2="15" y2="1.875" stroke="%color%" stroke-width="0.25"/>
    </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
