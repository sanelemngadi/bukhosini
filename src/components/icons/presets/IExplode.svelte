<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1572_148)">
<path d="M2.66602 5.71363L7.99935 2.66602L12.5647 5.27478C12.798 5.40806 12.992 5.60068 13.1268 5.83311C13.2617 6.06553 13.3327 6.32948 13.3327 6.59821V10.1624C13.3327 10.4311 13.2617 10.6951 13.1268 10.9275C12.992 11.1599 12.798 11.3525 12.5647 11.4858L8.75516 13.6626C8.52496 13.7941 8.26445 13.8632 7.99935 13.8632C7.73425 13.8632 7.47373 13.7941 7.24354 13.6626L3.43402 11.4858C3.20068 11.3525 3.00674 11.1599 2.87186 10.9275C2.73698 10.6951 2.66597 10.4311 2.66602 10.1624V8.02754" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.27734 8.37282C7.49934 8.49232 7.74751 8.55488 7.99963 8.55488C8.25174 8.55488 8.49992 8.49232 8.72192 8.37282L12.952 6.09473M7.99963 8.76139V13.7138" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66657 5.71401L7.99991 8.76163L5.71419 9.52353L0.380859 6.47591L2.66657 5.71401ZM7.99991 2.66639L13.3332 5.71401L14.8571 4.1902L9.52372 1.14258L7.99991 2.66639Z" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1572_148">
<rect width="16" height="16" fill="none"/>
</clipPath>
</defs>
</svg>

  
            `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
