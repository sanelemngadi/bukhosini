<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="0.5" width="12" height="12" stroke="%color%"/>
        <rect x="0.5" y="10.5" width="5" height="5" fill="%color%" stroke="%color%"/>
        <path d="M11.25 5C11.25 4.86193 11.1381 4.75 11 4.75L8.75 4.75C8.61193 4.75 8.5 4.86193 8.5 5C8.5 5.13807 8.61193 5.25 8.75 5.25L10.75 5.25L10.75 7.25C10.75 7.38807 10.8619 7.5 11 7.5C11.1381 7.5 11.25 7.38807 11.25 7.25L11.25 5ZM5.17678 11.1768L11.1768 5.17678L10.8232 4.82322L4.82322 10.8232L5.17678 11.1768Z" fill="%color%"/>
        </svg> `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />    