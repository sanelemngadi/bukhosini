<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1461_46)">
        <path d="M14.8828 6.60254L10.2695 1.98926L5.65625 6.60254L10.2695 11.2158L14.8828 6.60254Z" stroke="%color%"/>
        <path d="M6.35083 3.41249C6.42922 3.30885 6.40875 3.16128 6.30511 3.08289L4.61614 1.80546C4.51249 1.72707 4.36493 1.74754 4.28654 1.85118C4.20816 1.95482 4.22863 2.10239 4.33227 2.18078L5.83357 3.31627L4.69808 4.81758C4.61969 4.92122 4.64016 5.06879 4.7438 5.14718C4.84745 5.22556 4.99502 5.20509 5.0734 5.10145L6.35083 3.41249ZM3.02235 9.91254C2.56858 8.95746 2.19806 7.50095 2.51949 6.2191C2.67864 5.5844 3.00697 4.99262 3.58181 4.51745C4.15832 4.0409 4.99719 3.66985 6.19551 3.50361L6.13084 3.03749C4.86853 3.21261 3.94134 3.60971 3.28199 4.15474C2.62097 4.70114 2.24365 5.38433 2.06304 6.10463C1.70492 7.53278 2.11833 9.10638 2.59729 10.1145L3.02235 9.91254Z" fill="%color%"/>
        <path d="M8.86596 8.00586H2.3418V14.53H8.86596V8.00586Z" fill="%color%" stroke="%color%"/>
        </g>
        <defs>
        <clipPath id="clip0_1461_46">
        <rect width="16" height="14.1176" fill="white" transform="translate(0 1)"/>
        </clipPath>
        </defs>
        </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />    