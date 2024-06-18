<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0V16H13.3333V10H12V14.6667H1.33333V1.33333H12V6H13.3333V0H0ZM7.66667 4.66667L4.79133 7.52L4.33333 8L4.792 8.48L7.66667 11.3333L8.604 10.396L6.87533 8.66667H14.6667V7.33333H6.87467L8.604 5.604L7.66667 4.66667Z" fill="%color%"/>
        </svg>

    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />        