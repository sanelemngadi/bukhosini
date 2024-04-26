<script lang="ts">

  import IncrementDecrementButton from "$components/general/IncrementDecrementButton.svelte";
  import { createEventDispatcher } from "svelte";
  import ReferencePoint from "./ReferencePoint.svelte";
  import RaisedButton from "$components/general/RaisedButton.svelte";
  import type { SprotTSRect } from "$lib/types";
  import type { SprotLinearTransformationType } from "$lib/panels/types";

  export let selectionBounds: SprotTSRect = { pt: {x: 0, y: 0}, sz: {w: 0, h: 0}}

  const dispatch = createEventDispatcher();

  const onChange = (value: number, vertical: boolean) => {
      let p: SprotLinearTransformationType = { // if the value is null we dont touch that transformation state
          // because setting paramaters to zero when not modified can lead to unexpected behavior
          rotate: null,
          scale: null,
          translate_x: vertical ? null : value,
          translate_y: vertical ? value : null,
      }

      dispatch("change", p);
  }
</script>

  <ReferencePoint rect={selectionBounds} />
<div class="p-2">
    <IncrementDecrementButton min={2} max={10} on:change={() => onChange(1, true)} />
</div>


  <div class="h-4 border-t border-sprotBgLight60 mt-4"></div>
  
  <div class="grid grid-cols-3 gap-2 items-center justify-between p-2">
     <RaisedButton className="bg-sprotBg">Cancel</RaisedButton> 
     <RaisedButton>Copy</RaisedButton> 
     <RaisedButton>Commit</RaisedButton> 
  </div>