<script lang="ts">
  import { onMount } from "svelte";

    interface Color {
        id: number,
        r: number,
        g: number, 
        b: number,
    }

    let colors: Color[] = [];

    const init = () => {
        for(let i = 0; i < 60; i++) {
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;

            colors = [...colors, { id: i, r, g, b}];
        }
    }

    onMount(init);
</script>


<div class="w-full overflow-hidden">
    <div class="p-2">
        <h2>Documented</h2>
    </div>
    <div class="px-2 borderf">
        <ul class="flex flex-wrap gap-[2px] w-60 sprot-scroll">
            {#each colors as color, index (color.id) }
                <span class="w-3 h-3 inline-flex rounded-slm" style="background-color: rgb({color.r}, {color.g}, {color.b});"
                    title={"D "+ index}>
                </span>
            {/each}
        </ul>
    </div>
    <div class="p-2">
        <h2>User Defined</h2>
    </div>
    <div class="px-2 borderf">
        <ul class="flex flex-wrap gap-[2px] w-60 sprot-scroll">
            {#each colors as color, index (color.id) }
                <span class="w-3 h-3 inline-flex rounded-slm" style="background-color: rgb({color.r}, {color.g}, {color.b});"
                    title={"U "+ index}>
                </span>
            {/each}
        </ul>
    </div>
</div>