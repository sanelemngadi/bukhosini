<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5385 14.7689H1.23077V2.46124H7.38462V1.23047H1.23077C0.904449 1.23079 0.591587 1.36057 0.360844 1.59131C0.130101 1.82206 0.000325832 2.13492 0 2.46124V14.7689C0.000325832 15.0953 0.130101 15.4081 0.360844 15.6389C0.591587 15.8696 0.904449 15.9994 1.23077 15.9997H13.5385C13.8648 15.9994 14.1776 15.8696 14.4084 15.6389C14.6391 15.4081 14.7689 15.0953 14.7692 14.7689V8.61508H13.5385V14.7689Z" fill="%color%"/>
        <path d="M13.539 2.46154V0H12.3082V2.46154H9.84668V3.69231H12.3082V6.15385H13.539V3.69231H16.0005V2.46154H13.539Z" fill="%color%"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />        