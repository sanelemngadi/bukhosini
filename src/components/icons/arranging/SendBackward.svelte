<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4.66211" y="4.82422" width="8.51351" height="8.51351" stroke="%color%"/>
          <rect x="6.82422" y="2.66211" width="8.51351" height="8.51351" fill="%color%" stroke="%color%"/>
          <rect x="8.98633" y="0.5" width="8.51351" height="8.51351" fill="%bg%" stroke="%color%"/>
          <path d="M1.82322 10.9874C1.92085 11.085 2.07915 11.085 2.17678 10.9874L3.76777 9.39636C3.8654 9.29873 3.8654 9.14044 3.76777 9.04281C3.67014 8.94518 3.51184 8.94518 3.41421 9.04281L2 10.457L0.585786 9.04281C0.488155 8.94518 0.329864 8.94518 0.232233 9.04281C0.134602 9.14044 0.134602 9.29873 0.232233 9.39636L1.82322 10.9874ZM1.75 1.72949L1.75 10.8106L2.25 10.8106L2.25 1.72949L1.75 1.72949Z" fill="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />       