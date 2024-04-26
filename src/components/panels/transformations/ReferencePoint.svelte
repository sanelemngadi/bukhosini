<script lang="ts">
    import DullButton from "$components/general/DullButton.svelte";
    import type { SprotTSPoint, SprotTSRect } from "$lib/types";
    import { onMount } from "svelte";

    export let rect: SprotTSRect;

    interface SprotRfp {
        id: number,
        active: boolean,
        coords: SprotTSPoint,
    }

    let points: SprotRfp[] = [];
    let activePoint: SprotRfp = {id: 0, active: false, coords: {x: -1.0, y: -1.0} };
    let customRFP: boolean = false;

    const init = () => {
        points = [];
        for(let i = 0; i < 9; i++) {
            points = [...points, { id: i, active: false, coords: getRfpPoint(i) }]
        }

        onSetRfp(0);
    }

    onMount(init);

    const onSetRfp = (id: number) => {
        points = points.map(rfp => {
            rfp.active = rfp.id === id;
            if(rfp.active) {
                activePoint = rfp;
            }
            return rfp;
        });
    }

    const getRfpPoint = (side: number): SprotTSPoint => {
        let pt: SprotTSPoint = { x: -1, y: -1 }
        let {x, y} = rect.pt;
        let {w, h} = rect.sz;

        switch (side) {
            case 0: pt = { x, y }
                break;
            case 1: pt = { x: x + w / 2.0, y };
                break;
            case 2: pt = { x: x + w, y }
                break;
            case 3: pt = { x, y: y + h / 2.0 }
                break;
            case 4: pt = { x: x + w / 2.0, y: y + h / 2.0 }
                break;
            case 5: pt = { x: x + w, y: y + h / 2.0 }
                break;
            case 6: pt = { x, y: y + h }
                break;
            case 7: pt = { x: x + w / 2.0, y: y + h }
                break;
            case 8: pt = { x: x + w, y: y + h }
                break;
        }
        return pt
    }

    $: if(rect) { 
        // init();

        let actPt = getRfpPoint(activePoint.id);
        activePoint = {...activePoint, coords: actPt };
        // onSetRfp(activePoint.id);
     }
</script>

<h2 class="font-bold">Reference Point</h2>

<div class="pt-5 flex items-center">
    <label for="" class="flex items-center gap-2">Relative Position
        <input type="checkbox" name="" id="">
    </label>
</div>
<div class="py-2 flex items-center gap-2">
    <div class="w-14 h-14 relative overflow-hidden border border-sprotBgLight60 rounded-[4px] grid grid-cols-3 {customRFP && "border-sprotBgLight20"}">
        {#each points as pt (pt.id) }
            <div class="flex items-center justify-center">
                <DullButton 
                    className="w-1/2 h-1/2 border-2 rounded-sm border-sprotBgLight60 transition-all duration-200 bg-sprotBgLight60 {pt.active ? "border-sprotText bg-sprotPrimary" : "hover:border-sprotPrimary hover:bg-sprotPrimary25 hover:scale-150"}"
                    on:click={() => onSetRfp(pt.id)}></DullButton>
            </div>
        {/each}

        {#if customRFP}
            <div class="w-14 h-14 absolute left-0 top-0 bg-sprotBg z-10 opacity-85"></div>
        {/if}
    </div>
    <div class="flex flex-col gap-2">
        <label for="" class="flex items-center gap-2">Custom
            <input type="checkbox" name="" id="" bind:checked={customRFP}>
        </label>
        <div class="flex gap-2">
            <label for="" class="flex flex-col">
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    disabled={customRFP === false} 
                    class="input {customRFP == false && "disabled"}"
                    value="{activePoint.coords.x} px">
                <span class="text-sprotLightBorder">Left</span>
            </label>
            <label for="" class="flex flex-col">
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    disabled={customRFP === false} 
                    class="input {customRFP == false && "disabled"}" 
                    value="{activePoint.coords.y} px">
                <span class="text-sprotLightBorder">Top</span>
            </label>
        </div>
    </div>
</div>

<style lang="postcss">
    .input {
        @apply w-16 rounded-sm border  px-[2px] border-sprotLightBorder bg-sprotBg1;
    }

    .input.disabled {
        @apply text-sprotLightBorder border-sprotBgLight60 bg-sprotBg;
    }
</style>