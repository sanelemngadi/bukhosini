<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1335_17)">
        <path d="M5.33333 14.6673C9.01533 14.6673 12 11.6827 12 8.00065C12 4.31865 9.01533 1.33398 5.33333 1.33398" stroke="%color%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.66667 1.33366C4.66667 1.51047 4.7369 1.68004 4.86193 1.80506C4.98695 1.93009 5.15652 2.00033 5.33333 2.00033C5.51014 2.00033 5.67971 1.93009 5.80474 1.80506C5.92976 1.68004 6 1.51047 6 1.33366C6 1.15685 5.92976 0.987279 5.80474 0.862254C5.67971 0.73723 5.51014 0.666992 5.33333 0.666992C5.15652 0.666992 4.98695 0.73723 4.86193 0.862254C4.7369 0.987279 4.66667 1.15685 4.66667 1.33366ZM4.66667 14.667C4.66667 14.8438 4.7369 15.0134 4.86193 15.1384C4.98695 15.2634 5.15652 15.3337 5.33333 15.3337C5.51014 15.3337 5.67971 15.2634 5.80474 15.1384C5.92976 15.0134 6 14.8438 6 14.667C6 14.4902 5.92976 14.3206 5.80474 14.1956C5.67971 14.0706 5.51014 14.0003 5.33333 14.0003C5.15652 14.0003 4.98695 14.0706 4.86193 14.1956C4.7369 14.3206 4.66667 14.4902 4.66667 14.667Z" fill="%color%" stroke="%color%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1335_17">
        <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)"/>
        </clipPath>
        </defs>
        </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   