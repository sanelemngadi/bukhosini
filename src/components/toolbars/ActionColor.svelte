<script lang="ts">
  import RaisedDiv from "$components/general/RaisedDiv.svelte";
  import { getActionColor } from "$lib/stores";
  import type { SprotTSColor } from "$lib/types";
  import { onMount } from "svelte";

    let color: SprotTSColor = {
        id: -10, r: 255, g: 255, b: 255, alpha: 255
    };
    let container: HTMLElement;

    const init = () => {
        getActionColor(cl => color = cl);

        // container = document.querySelector(".sprot-color-container") as HTMLElement | null;
        
        // if(container) {
            // }
        //     console.log("container: ", container);
        // container.addEventListener("dragover", onDragOver);
        
    }

    onMount(init);


    const onDragOver = (e: any) => {
        e.preventDefault();
        console.log(e);        
    }
</script>

<div 
    bind:this={container} 
    on:dragover={onDragOver}>
    <RaisedDiv 
        className="pointer-events-none h-5 w-6 border rounded-sm" 
        style="background-color: rgb({color.r}, {color.g}, {color.b});"
        >
    </RaisedDiv>
</div>