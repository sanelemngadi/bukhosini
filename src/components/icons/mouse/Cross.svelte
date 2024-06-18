<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1571 18.2808C17.9796 18.2808 18.6465 18.6992 18.6465 19.2153L18.6465 30.4299C18.6465 30.946 17.9796 31.3644 17.1571 31.3644C16.3345 31.3644 15.6676 30.946 15.6676 30.4299L15.6676 19.2153C15.6676 18.6992 16.3345 18.2808 17.1571 18.2808Z" fill="black" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1571 1C17.9796 1 18.6465 1.41841 18.6465 1.93455L18.6465 13.1491C18.6465 13.6652 17.9796 14.0836 17.1571 14.0836C16.3345 14.0836 15.6676 13.6652 15.6676 13.1491L15.6676 1.93455C15.6676 1.41841 16.3345 1 17.1571 1Z" fill="black" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9165 15.9167C19.9165 15.0941 20.3349 14.4272 20.8511 14.4272L32.0656 14.4272C32.5817 14.4272 33.0002 15.0941 33.0002 15.9167C33.0002 16.7393 32.5817 17.4061 32.0656 17.4061L20.8511 17.4061C20.3349 17.4061 19.9165 16.7393 19.9165 15.9167Z" fill="black" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.9167C1 15.0941 1.41841 14.4272 1.93455 14.4272L13.1491 14.4272C13.6652 14.4272 14.0836 15.0941 14.0836 15.9167C14.0836 16.7393 13.6652 17.4061 13.1491 17.4061L1.93455 17.4061C1.41841 17.4061 1 16.7393 1 15.9167Z" fill="black" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>




`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled}/>   