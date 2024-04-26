<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.6665 13.3335L9.33317 1.3335L15.9998 13.3335H2.6665Z" stroke="%color%" stroke-linecap="square" stroke-linejoin="round"/>
        <path d="M5.08333 13.3332C5.08333 14.6679 4.00135 15.7498 2.66667 15.7498C1.33198 15.7498 0.25 14.6679 0.25 13.3332C0.25 11.9985 1.33198 10.9165 2.66667 10.9165C4.00135 10.9165 5.08333 11.9985 5.08333 13.3332Z" fill="%color%" stroke="%color%" stroke-width="0.5"/>
        <ellipse cx="2.66683" cy="13.3333" rx="1.33333" ry="1.33333" fill="%bg%"/>
        <path d="M18.4168 13.3332C18.4168 14.6679 17.3349 15.7498 16.0002 15.7498C14.6655 15.7498 13.5835 14.6679 13.5835 13.3332C13.5835 11.9985 14.6655 10.9165 16.0002 10.9165C17.3349 10.9165 18.4168 11.9985 18.4168 13.3332Z" fill="%color%" stroke="%color%" stroke-width="0.5"/>
        <ellipse cx="15.9998" cy="13.3333" rx="1.33333" ry="1.33333" fill="%bg%"/>
        <path d="M11.7498 2.66667C11.7498 4.00136 10.6679 5.08333 9.33317 5.08333C7.99848 5.08333 6.9165 4.00136 6.9165 2.66667C6.9165 1.33198 7.99848 0.25 9.33317 0.25C10.6679 0.25 11.7498 1.33198 11.7498 2.66667Z" fill="%color%" stroke="%color%" stroke-width="0.5"/>
        <ellipse cx="9.33333" cy="2.66683" rx="1.33333" ry="1.33333" fill="%bg%"/>
        </svg>
    `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />    