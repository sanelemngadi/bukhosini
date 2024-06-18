<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="12" width="4" height="4" fill="%color%"/>
        <rect x="5.5" y="7.5" width="3" height="3" stroke="%color%"/>
        <circle cx="14" cy="2" r="2" fill="%color%"/>
        <path d="M10.9534 4.9997C10.9534 4.93066 10.8975 4.8747 10.8284 4.8747H9.70343C9.63439 4.8747 9.57843 4.93066 9.57843 4.9997C9.57843 5.06873 9.63439 5.1247 9.70343 5.1247H10.7034V6.1247C10.7034 6.19373 10.7594 6.2497 10.8284 6.2497C10.8975 6.2497 10.9534 6.19373 10.9534 6.1247V4.9997ZM8.08839 7.91651L10.9168 5.08809L10.74 4.91131L7.91161 7.73974L8.08839 7.91651Z" fill="%color%"/>
     </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
