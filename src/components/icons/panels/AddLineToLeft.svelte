<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1370_322)">
        <path d="M0.6464 7.64611C0.4512 7.84137 0.4512 8.15795 0.6464 8.35321L3.8284 11.5352C4.0237 11.7305 4.3403 11.7305 4.5355 11.5352C4.7308 11.3399 4.7308 11.0233 4.5355 10.8281L1.7071 7.99966L4.5355 5.17126C4.7308 4.97596 4.7308 4.65936 4.5355 4.46416C4.3403 4.26886 4.0237 4.26886 3.8284 4.46416L0.6464 7.64611ZM1 8.49966L17 8.49966L17 7.49966L1 7.49966L1 8.49966Z" fill="%color%"/>
        </g>
        <defs>
        <clipPath id="clip0_1370_322">
        <rect width="17" height="16" fill="%color%" transform="translate(17 16) rotate(180)"/>
        </clipPath>
        </defs>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />   

    