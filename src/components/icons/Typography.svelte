<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3329 5.44434V12.5554M10.3329 5.44434H6.77734M10.3329 5.44434H13.8885" stroke="%color%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 10.3333V15.2222C18.3333 15.6937 18.146 16.1459 17.8126 16.4793C17.4792 16.8127 17.0271 17 16.5556 17H4.11111C3.63961 17 3.18743 16.8127 2.85403 16.4793C2.52063 16.1459 2.33333 15.6937 2.33333 15.2222V10.3333M18.3333 7.66667V2.77778C18.3333 2.30628 18.146 1.8541 17.8126 1.5207C17.4792 1.1873 17.0271 1 16.5556 1H4.11111C3.63961 1 3.18743 1.1873 2.85403 1.5207C2.52063 1.8541 2.33333 2.30628 2.33333 2.77778V7.66667M17 10.3333V7.66667H19.6667V10.3333H17ZM1 10.3333V7.66667H3.66667V10.3333H1Z" stroke="%color%" stroke-width="1.5" stroke-linejoin="round"/>
</svg>


    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />        