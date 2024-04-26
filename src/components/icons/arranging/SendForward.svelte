<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.37158" y="4.60254" width="8.02564" height="8.02564" stroke="%color%"/>
      <rect x="6.92285" y="2.05176" width="9.02564" height="9.02564" fill="%color%"/>
      <rect x="9.47412" y="0.5" width="8.02564" height="8.02564" fill="%bg%" stroke="%color%"/>
      <path d="M2.17678 4.33577C2.07915 4.23814 1.92085 4.23814 1.82322 4.33577L0.232233 5.92676C0.134602 6.02439 0.134602 6.18268 0.232233 6.28031C0.329864 6.37794 0.488155 6.37794 0.585786 6.28031L2 4.8661L3.41421 6.28031C3.51184 6.37794 3.67014 6.37794 3.76777 6.28031C3.8654 6.18268 3.8654 6.02439 3.76777 5.92676L2.17678 4.33577ZM2.25 13.1279L2.25 4.51254L1.75 4.51254L1.75 13.1279L2.25 13.1279Z" fill="%color%"/>
      </svg>

`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />       