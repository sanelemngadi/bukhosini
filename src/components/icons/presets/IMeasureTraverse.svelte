<script lang="ts">
  import { IContenousLine } from ".";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
</script>

<IContenousLine {disabled} {bg} {color} {size} />
