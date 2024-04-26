<script lang="ts">
    import DullButton from "$components/general/DullButton.svelte";
    import type { SprotTSPoint, SprotTSRect } from "$lib/types";
    import { createEventDispatcher, onMount } from "svelte";

    interface SprotRfp {
        id: number,
        active: boolean,
    }

    let points: SprotRfp[] = [];
    let activePoint: SprotRfp = {id: 0, active: false };
    let customRFP: boolean = false;

    const dispatch = createEventDispatcher();

    const init = () => {
        points = [];
        for(let i = 0; i < 9; i++) {
            points = [...points, { id: i, active: false }]
        }

        onSetRfp(0);
    }

    onMount(init);

    const onSetRfp = (id: number) => {
        points = points.map(rfp => {
            rfp.active = rfp.id === id;
            if(rfp.active) {
                activePoint = rfp;
                dispatch("change", rfp.id);
            }
            return rfp;
        });
    }

</script>

<!-- <h2 class="font-bold">Rect Join Point</h2> -->

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
</div>

<style lang="postcss">
    .input {
        @apply w-16 rounded-sm border  px-[2px] border-sprotLightBorder bg-sprotBg1;
    }

    .input.disabled {
        @apply text-sprotLightBorder border-sprotBgLight60 bg-sprotBg;
    }
</style>