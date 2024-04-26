<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1534 8.35355C13.3486 8.15829 13.3486 7.84171 13.1534 7.64645L9.97138 4.46447C9.77611 4.2692 9.45953 4.2692 9.26427 4.46447C9.06901 4.65973 9.06901 4.97631 9.26427 5.17157L12.0927 8L9.26427 10.8284C9.06901 11.0237 9.06901 11.3403 9.26427 11.5355C9.45953 11.7308 9.77612 11.7308 9.97138 11.5355L13.1534 8.35355ZM12.7998 7.5L-0.000195602 7.5L-0.000195405 8.5L12.7998 8.5L12.7998 7.5Z" fill="%color%"/>
                <rect x="2.5" y="0.5" width="15" height="15" rx="7.5" stroke="%color%"/>
                <path d="M21 8L14 8" stroke="%color%" stroke-linecap="round"/>
            </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />   


    