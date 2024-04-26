<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2116 0L10.1515 1.06009L14.7801 5.68645H5.15678C2.32497 5.68645 0 8.01142 0 10.8432V16H1.47336V10.8432C1.47336 8.8144 3.12795 7.15981 5.15678 7.15981H14.7801L10.1522 11.7869L11.2116 12.8463L17.105 6.95281L17.6111 6.42313L17.105 5.89346L11.2116 0Z" fill="%color%"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />        