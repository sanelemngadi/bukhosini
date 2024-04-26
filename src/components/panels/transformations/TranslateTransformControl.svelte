<script lang="ts">
    import IncrementDecrementButton from "$components/general/IncrementDecrementButton.svelte";
    import { createEventDispatcher } from "svelte";
    import ReferencePoint from "./ReferencePoint.svelte";
    import RaisedButton from "$components/general/RaisedButton.svelte";
    import Constraints from "$components/icons/Constraints.svelte";
    import type { SprotTSRect } from "$lib/types";
    import type { SprotLinearTransformationType } from "$lib/panels/types";


    // let appState: SprotAppViewController | null = null;
    // export let selection: SprotSelectionWrapper = SprotSelectionWrapper.empty();
    export let selectionBounds: SprotTSRect = { pt: {x: 0, y: 0}, sz: {w: 0, h: 0}}

    const dispatch = createEventDispatcher();

    // const init = () => {
    //     selectionBounds = { 
    //         pt: { x: selection.x, y: selection.y }, 
    //         sz: { w: selection.w, h: selection.h } 
    //     }      
    // }

    // onMount(init);

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

<div class="flex flex-col gap-2 border-t border-sprotBgLight60 pt-2">
    <h2 class="font-semibold">Movement Vector</h2>

    <div class="flex gap-2 items-center">
        <div class="flex flex-col gap-2 flex-1">
            <label for="" class="flex gap-2 items-center justify-between">
                <span>H</span>
                <IncrementDecrementButton full on:change={(e) => onChange(e.detail.state, false)} />
            </label>
            <label for="" class="flex gap-2 items-center justify-between">
                <span>V</span>
                <IncrementDecrementButton full on:change={(e) => onChange(e.detail.state, true)}/>
            </label>
        </div>

        <div class="w-8 h-8 borderk flex items-center justify-center">
            <RaisedButton className="w-6">
                <Constraints color="white" />
            </RaisedButton>
        </div>
    </div>
</div>

<div class="h-4 border-t border-sprotBgLight60 mt-4"></div>
  
<div class="grid grid-cols-3 gap-2 items-center justify-between p-2">
   <RaisedButton className="bg-sprotBg">Cancel</RaisedButton> 
   <RaisedButton>Copy</RaisedButton> 
   <RaisedButton>Commit</RaisedButton> 
</div>