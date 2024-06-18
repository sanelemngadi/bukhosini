<script lang="ts">
    import Icon from "../ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      export let disabled: boolean = false;
      const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6.65381" y="0.5" width="8.84615" height="8.84615" stroke="%color%"/>
        <rect x="0.5" y="6.6543" width="8.84615" height="8.84615" fill="%color%" stroke="%color%"/>
        <path d="M12.5575 3.69246C12.5575 3.55439 12.4456 3.44246 12.3075 3.44246L10.0575 3.44246C9.91947 3.44246 9.80754 3.55439 9.80754 3.69246C9.80754 3.83053 9.91947 3.94246 10.0575 3.94246H12.0575V5.94246C12.0575 6.08053 12.1695 6.19246 12.3075 6.19246C12.4456 6.19246 12.5575 6.08053 12.5575 5.94246V3.69246ZM8.79201 7.56154L12.4843 3.86924L12.1308 3.51568L8.43846 7.20799L8.79201 7.56154Z" fill="%color%"/>
        </svg>`;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} {disabled} />    