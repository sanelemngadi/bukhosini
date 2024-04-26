<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1370_322)">
                <path d="M8.14611 16.8536C8.34137 17.0488 8.65795 17.0488 8.85321 16.8536L12.0352 13.6716C12.2305 13.4763 12.2305 13.1597 12.0352 12.9645C11.8399 12.7692 11.5233 12.7692 11.3281 12.9645L8.49966 15.7929L5.67126 12.9645C5.47596 12.7692 5.15936 12.7692 4.96416 12.9645C4.76886 13.1597 4.76886 13.4763 4.96416 13.6716L8.14611 16.8536ZM8.99966 16.5L8.99966 0.5L7.99966 0.5L7.99966 16.5L8.99966 16.5Z" fill="%color%"/>
                </g>
                <defs>
                <clipPath id="clip0_1370_322">
                <rect width="17" height="16" fill="%color%" transform="translate(16.5 0.5) rotate(90)"/>
                </clipPath>
                </defs>
                </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   

    