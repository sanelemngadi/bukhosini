<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="7.80619" cy="8" rx="2.92533" ry="3" fill="%color%"/>
        <line y1="-0.5" x2="19.5541" y2="-0.5" transform="matrix(-0.69814 0.715961 -0.69814 -0.715961 14.6328 1)" stroke="%color%"/>
        <path d="M3.43969 0.59668L3.4397 6.22168L2.50891 6.22168L2.50891 0.59668L3.43969 0.59668ZM5.7168 2.93191L5.7168 3.88645L0.231808 3.88645L0.231808 2.93191L5.7168 2.93191Z" fill="%color%"/>
    </svg>

      `;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
