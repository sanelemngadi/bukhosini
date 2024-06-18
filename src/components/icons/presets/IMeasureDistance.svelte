<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 14.6465C0.5 14.9226 0.723858 15.1465 1 15.1465H5.5C5.77614 15.1465 6 14.9226 6 14.6465C6 14.3703 5.77614 14.1465 5.5 14.1465H1.5V10.1465C1.5 9.87034 1.27614 9.64648 1 9.64648C0.723858 9.64648 0.5 9.87034 0.5 10.1465L0.5 14.6465ZM15.5 0.646484C15.5 0.370342 15.2761 0.146484 15 0.146484L10.5 0.146484C10.2239 0.146484 10 0.370342 10 0.646484C10 0.922627 10.2239 1.14648 10.5 1.14648L14.5 1.14648L14.5 5.14648C14.5 5.42263 14.7239 5.64648 15 5.64648C15.2761 5.64648 15.5 5.42263 15.5 5.14648L15.5 0.646484ZM1.35355 15L15.3536 1.00004L14.6464 0.292931L0.646447 14.2929L1.35355 15Z" fill="%color%"/>
        </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
