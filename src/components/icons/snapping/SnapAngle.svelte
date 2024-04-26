<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3.90918C9.16364 6.81827 8.48485 9.00009 8 9.72736" stroke="%color%" stroke-width="1.5"/>
        <path d="M2.90918 9.72705L16.0001 9.72705" stroke="%color%" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M11.3362 1C11.3362 0.654822 11.0564 0.375 10.7112 0.375L5.08618 0.375C4.741 0.375 4.46118 0.654822 4.46118 1C4.46118 1.34518 4.741 1.625 5.08618 1.625L10.0862 1.625V6.625C10.0862 6.97018 10.366 7.25 10.7112 7.25C11.0564 7.25 11.3362 6.97018 11.3362 6.625V1ZM10.2692 0.558058L1.01257 9.81473L1.89645 10.6986L11.1531 1.44194L10.2692 0.558058Z" fill="%color%"/>
        <circle cx="2.90909" cy="9.72745" r="2.15909" stroke="%color%" stroke-width="1.5"/>
        <circle cx="2.90914" cy="9.7275" r="1.45455" fill="%bg%"/>
      </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />       