<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1461_24)">
          <path d="M13.7885 8.25H8.60156V13.9526H13.7885V8.25Z" stroke="%color%"/>
          <path d="M11.7085 9.29688H5.52148V15.9994H11.7085V9.29688Z" fill="%color%"/>
          <path d="M2 0.627396C1.99996 0.50846 2.03374 0.391964 2.0974 0.291498C2.16106 0.191033 2.25198 0.110738 2.35954 0.0599815C2.4671 0.00922462 2.58688 -0.0099024 2.7049 0.0048317C2.82292 0.0195658 2.93432 0.0675535 3.0261 0.143197L9.92908 5.82689C10.3832 6.2007 10.1185 6.93829 9.53018 6.93829H6.02287C5.88795 6.93828 5.75461 6.96729 5.63189 7.02334C5.50917 7.0794 5.39995 7.1612 5.31162 7.26318L3.10137 9.81777C2.72128 10.2568 2 9.98774 2 9.40696V0.627396ZM9.53018 6.31109L2.6272 0.627396V9.40696L4.83746 6.85299C4.98463 6.68294 5.16665 6.54654 5.37119 6.45304C5.57572 6.35953 5.79798 6.31113 6.02287 6.31109H9.53018Z" fill="%color%"/>
          </g>
          <defs>
          <clipPath id="clip0_1461_24">
          <rect width="13" height="16" fill="white" transform="translate(2)"/>
          </clipPath>
          </defs>
          </svg>
`;

  $: if (size) {
  }
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
