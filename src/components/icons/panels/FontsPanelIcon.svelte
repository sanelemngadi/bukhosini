<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.85358 3.09961L3.12988 12.5329H5.06505L5.86768 10.4996H10.1307L10.9334 12.5329H12.8685L9.14485 3.09961H6.85358ZM6.57822 8.69961L7.99922 5.09961L9.42022 8.69961H6.57822Z" fill="%color%"/>
            <path d="M0 16H16V0H0V16ZM1.06667 1.06667H14.9333V14.9333H1.06667V1.06667Z" fill="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   


    