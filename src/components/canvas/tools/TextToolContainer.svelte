<script lang="ts">
  import type { SprotCanvasTool } from "$lib/tools/base";
//   import type { SprotTool } from "$lib/types";
  import { onMount } from "svelte";

    export let tool: SprotCanvasTool;
    let point: { x: number, y: number } = { x: 0, y: 0 };
    let textarea: HTMLTextAreaElement | undefined = undefined;
    let scale = window.devicePixelRatio;

    onMount(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);

        
    });
    
    const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        point = { x: clientX / scale, y: clientY / scale };
        const sprotElement = document.querySelector(".sprot-app");

        if(sprotElement) {
            
        }
    }

    const onMouseDown = () => {
        if(textarea) {
            textarea.focus()
            console.log("area: ", textarea);
        }

        
    }
</script>

{#if tool}
    <textarea 
        bind:this={textarea}
        name="" 
        class="border pointer-events-auto absolute left-0 top-0 text-[14px] font-[Arial]"
        style="left: {point.x}px; top: {point.y}px;" 
        id="" cols="30" 
        rows="10"></textarea>
{/if}