<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0L4 15" stroke="%color%"/>
        <path d="M9 0L9 15" stroke="%color%"/>
        <path d="M0 9L16 9" stroke="%color%"/>
        <path d="M0 6L16 6" stroke="%color%"/>
        <rect x="0.5" y="3.40918" width="12.0909" height="9.18182" stroke="%color%"/>
        <circle cx="4.36368" cy="8.72745" r="2.15909" stroke="%color%" stroke-width="1.5"/>
        <circle cx="4.36373" cy="8.7275" r="1.45455" fill="%bg%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />       