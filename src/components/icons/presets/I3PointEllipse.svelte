<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.28516" y="7.74707" width="2" height="2" stroke="%color%"/>
            <rect x="7.78516" y="2.87598" width="2" height="2" stroke="%color%"/>
            <rect x="14.2852" y="7.74707" width="2" height="2" stroke="%color%"/>
            <path d="M15.4219 8.74707C15.4219 10.0531 14.7258 11.2716 13.5292 12.1799C12.3324 13.0885 10.6568 13.665 8.78516 13.665C6.91356 13.665 5.23793 13.0885 4.04107 12.1799C2.84456 11.2716 2.14844 10.0531 2.14844 8.74707C2.14844 7.44099 2.84456 6.22258 4.04107 5.31423C5.23793 4.40561 6.91356 3.8291 8.78516 3.8291C10.6568 3.8291 12.3324 4.40561 13.5292 5.31423C14.7258 6.22258 15.4219 7.44099 15.4219 8.74707Z" stroke="%color%"/>
        </svg>
      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
