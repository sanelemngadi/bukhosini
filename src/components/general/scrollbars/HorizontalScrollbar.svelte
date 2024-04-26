<script lang="ts">
    import DropdownOutline from "$components/icons/DropdownOutline.svelte";
    import { onMount } from "svelte";

    interface Point {
        x: number, 
        y: number
    }

    export let size: number = 16;
    // export let gripperSize: number = size - 5;
    let gripper: HTMLElement;
    let container: HTMLElement;
    let mouse_position: Point = {x: 0, y: 0};
    let mouse_start_pos: Point = {x: 0, y: 0};
    let window_start_pos: Point = {x: 0, y: 0};
    let dragging: boolean = false;
    let gripperWidth: number = 0;
    

    onMount(() => {
        window.addEventListener("mousemove", onDrag);
        window.addEventListener("mouseup", onDragEnd);

        return () => {
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", onDragEnd);
        }
    });

    const onDragStart = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        mouse_start_pos = { x: clientX, y: clientY };
        window_start_pos = { x: gripper.offsetLeft, y: gripper.offsetTop }
        dragging = true;
    }

    const onDrag = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        gripperWidth = gripper.offsetWidth;
        const contWidth = container.offsetWidth;
        
        if(dragging) {
            let availSpaceToMove = contWidth - gripperWidth;
            const dx = Math.min(mouse_position.x - mouse_start_pos.x, availSpaceToMove + window_start_pos.x );
            const bounds = Math.max(0, dx);
            const offset = Math.min(bounds, availSpaceToMove);
            
            gripper.style.left = offset + "px";
        }
        
        mouse_position = { x: clientX, y: clientY };
    }

    const onDragEnd = (e: MouseEvent) => {
        dragging = false;
    }
</script>

<div class="sprot-hScrollbar flex w-full flex-1 min-w-24">
    <button class="w-[{size}px] h-[{size}px] hover:bg-sprotBgLight60 inline-flex items-center justify-center rotate-90">
        <DropdownOutline color="white" />
    </button>
    <div class="flex h-[{size}px] flex-1 g-sprotBgLight60  items-center" bind:this={container}>
        <button class="flex h-[{10}px] bg-sprotBg w-96 text-transparent relative" bind:this={gripper}
            on:mousedown={onDragStart}
            >p</button>
    </div>
    <button class="w-[{size}px] h-[{size}px] hover:bg-sprotBgLight60 inline-flex items-center justify-center -rotate-90">
        <DropdownOutline color="white" />
    </button>
</div>