<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="12" width="4" height="4" fill="%color%"/>
        <rect x="4.5" y="8.5" width="3" height="3" stroke="%color%"/>
        <circle cx="14" cy="2" r="2" fill="%color%"/>
        <circle cx="14" cy="14" r="2" fill="%color%"/>
        <path d="M14.0884 8.08839C14.1372 8.03957 14.1372 7.96043 14.0884 7.91161L13.2929 7.11612C13.2441 7.0673 13.1649 7.0673 13.1161 7.11612C13.0673 7.16493 13.0673 7.24408 13.1161 7.29289L13.8232 8L13.1161 8.70711C13.0673 8.75592 13.0673 8.83507 13.1161 8.88388C13.1649 8.9327 13.2441 8.9327 13.2929 8.88388L14.0884 8.08839ZM10 8.125H14V7.875H10V8.125Z" fill="%color%"/>
        <line x1="14.125" y1="2" x2="14.125" y2="15" stroke="%color%" stroke-width="0.25"/>
    </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
