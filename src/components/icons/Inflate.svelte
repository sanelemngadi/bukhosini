<script lang="ts">
  import Icon from "./ICON.svelte";
  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.67 16">
        <rect x="2.66" y="2.46" width="10.99" height="10.99" fill="none" stroke="%color%" stroke-miterlimit="10" stroke-width="1.5"/>
        <g>
            <line x1="11.99" y1="4.58" x2="15.67" fill="%color%"/>
            <g>
            <line x1="11.99" y1="4.58" x2="14.9" y2="0.95" fill="none" stroke="%color%" stroke-miterlimit="5" stroke-width="0.15"/>
            <path d="M14.73,1.16l-.62-.08v0l.82-.47L15.67,0l-.42.85-.28.9h0Z" fill="%color%"/>
            </g>
        </g>
        <g>
            <line x1="4.91" y1="11.42" y2="16" fill="%color%"/>
            <g>
            <line x1="4.91" y1="11.42" x2="0.89" y2="15.17" fill="none" stroke="%color%" stroke-miterlimit="5" stroke-width="0.15"/>
            <path d="M1.09,15l.61.17v0l-.89.35L0,16l.54-.78.4-.85H1Z" fill="%color%"/>
            </g>
        </g>
        <circle cx="8" cy="8" r="1" fill="#fff" stroke="%color%" stroke-miterlimit="10"/>
        </svg>`;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
