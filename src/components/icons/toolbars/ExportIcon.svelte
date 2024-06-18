<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0V16H13.3333V10.6667L12 12V14.6667H1.33333V1.33333H12V4L13.3333 5.33333V0H0ZM10.9373 4.66667L10 5.604L11.7087 7.33333H5.27067V8.66667H11.708L10 10.396L10.9373 11.3333L13.8127 8.48L14.27 8L13.812 7.52L10.9373 4.66667Z" fill="%color%"/>
        </svg>


    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />        