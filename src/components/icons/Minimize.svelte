<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1298_171)">
    <rect x="4.5" y="4.02637" width="12.4737" height="12.4737" stroke="%color%" shape-rendering="crispEdges"/>
    </g>
    <path d="M7.36816 1H20.4208V14.0526" stroke="%color%"/>
    <defs>
    <filter id="filter0_d_1298_171" x="0" y="3.52637" width="21.4736" height="21.4736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1298_171"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1298_171" result="shape"/>
    </filter>
    </defs>
    </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled}/>   


    