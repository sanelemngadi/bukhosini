<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1370_322)">
            <path d="M8.85389 1.1464C8.65863 0.9512 8.34205 0.9512 8.14679 1.1464L4.96481 4.3284C4.76954 4.5237 4.76954 4.8403 4.96481 5.0355C5.16007 5.2308 5.47665 5.2308 5.67191 5.0355L8.50034 2.2071L11.3287 5.0355C11.524 5.2308 11.8406 5.2308 12.0358 5.0355C12.2311 4.8403 12.2311 4.5237 12.0358 4.3284L8.85389 1.1464ZM8.00034 1.5L8.00034 17.5L9.00034 17.5L9.00034 1.5L8.00034 1.5Z" fill="%color%"/>
            </g>
            <defs>
            <clipPath id="clip0_1370_322">
            <rect width="17" height="16" fill="%color%" transform="translate(0.5 17.5) rotate(-90)"/>
            </clipPath>
            </defs>
            </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled}/>   

    