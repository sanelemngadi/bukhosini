<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.9231 5.92285H9.6154V10.2305" stroke="%color%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 10.8462L17 10.8462" stroke="%color%" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M5.44238 1C5.44238 0.585786 5.1066 0.25 4.69238 0.25C4.27817 0.25 3.94238 0.585786 3.94238 1L5.44238 1ZM3.94238 1L3.94238 12.0769L5.44238 12.0769L5.44238 1L3.94238 1Z" fill="%color%"/>
        <circle cx="4.69225" cy="10.8463" r="1.71154" stroke="%color%" stroke-width="1.5"/>
        <circle cx="4.69219" cy="10.846" r="0.75" stroke="%bg%" stroke-width="0.961539"/>
      </svg>
`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />       