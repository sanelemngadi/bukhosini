<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15V8.5L6.5 2L14.5 1" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L11.5 11.5" stroke="%color%" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.8536 12.1464C12.6583 11.9512 12.3417 11.9512 12.1464 12.1464C11.9512 12.3417 11.9512 12.6583 12.1464 12.8536L12.8536 12.1464ZM15 15.5C15.2761 15.5 15.5 15.2761 15.5 15V10.5C15.5 10.2239 15.2761 10 15 10C14.7239 10 14.5 10.2239 14.5 10.5V14.5H10.5C10.2239 14.5 10 14.7239 10 15C10 15.2761 10.2239 15.5 10.5 15.5H15ZM12.1464 12.8536L14.6464 15.3536L15.3536 14.6464L12.8536 12.1464L12.1464 12.8536Z" fill="%color%"/>
        </svg>

          `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
