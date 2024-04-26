<script lang="ts">
    import BitmapButton from "$components/general/BitmapButton.svelte";
    import { Close } from "$components/icons";
    import { getActionTopLevel } from "$lib/stores";
    import { onMount, type ComponentType } from "svelte";
    interface Point {
        x: number, 
        y: number,
    }

    const pointInit: Point = {
        x: 0,
        y: 0
    }

    const getCoords = (e: MouseEvent): Point => {
        return {
            x: e.clientX, y: e.clientY
        }
    }

    let mouseStart: Point = {...pointInit};
    let mousePosition = {...pointInit};
    let dragging = false;
    let windowStart = {...pointInit};
    let dialog: HTMLElement | null;
    let windowSize = {...pointInit};
    let open: boolean = false;

    let component: ComponentType | null = null;

    onMount(() => {
        getActionTopLevel((tl, topValue) => {
            tl.Some((top) => {
                component = top;

                onOpenDialog(topValue);
            })
            .None(() => component = null);
        });

        window.addEventListener("mousemove", onDrag);
        window.addEventListener("mouseup", onDragEnd);
        window.addEventListener("resize", onResize);
        
        if(dialog) {
            dialog.addEventListener("mousedown", onDragStart);
        }

        // if(component) {
        //     onOpenDialog(500.0);
        // }

        if(!dialog) {
            dialog = document.querySelector("#dialog") as HTMLElement | null;
        }
        
        return () => {
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", onDragEnd);
            window.removeEventListener("resize", onResize);

            if(dialog) {
                dialog.removeEventListener("mousedown", onDragStart);
            }
        }
    });

    const onResize = () => {
        windowSize = { x: window.innerWidth, y: window.innerHeight };
        // console.log("resize: ", windowSize);
        
    }

    const onDragStart = (e: MouseEvent) => {
        if(!dialog) {
            return;
        }

        const {x, y} = getCoords(e);
        mouseStart = {x, y};

        let header = e.target as HTMLElement | null;

        if(header && header.classList.contains("sprot-toplevel-header")) {
            // let header = header.querySelector(".sprot-toplevel-header") as HTMLElement | null;

            console.log("header: ", header);
            

            dragging = true;
            let {x, y} = { x: dialog.offsetLeft, y: dialog.offsetTop };
            windowStart = {x, y};
            // if (header) {
            // }
        }
    }

    const onDrag = (e: MouseEvent) => {
        if(dragging) {
            const {x, y} = getCoords(e);
            mousePosition = {x, y};

            if(dialog) {
                let pos = {
                    x: windowStart.x + (mousePosition.x - mouseStart.x),
                    y: windowStart.y + (mousePosition.y - mouseStart.y),
                };

                dialog.style.left = pos.x + "px";
                dialog.style.right = "auto";
                dialog.style.top = pos.y + "px";
            }
        }
    }

    const onDragEnd = (e: MouseEvent) => {
        dragging = false;
        let target = e.target as HTMLElement | null;
        if(target && dialog && !dialog.contains(target)) {
            // component = null;
            onCloseDialog();
        }
    }

    const onOpenDialog = (top: number) => {
        if(dialog) {
            let size = { w: dialog.offsetWidth, h: dialog.offsetHeight };
            const right = 242.0;
            let x = size.w ;

            // let topSide = top;
            dialog.style.right = right + "px"; 

            // if(top + size.h > windowSize.y) {
            //     dialog.style.bottom = 28 + "px";
                
            // } else {
                
            // }
            dialog.style.top = top + "px";
            dialog.style.left = "auto";

            // console.log("window size: ", windowSize);

        }
        open = true;
        
        // console.log("dialog: ", dialog);
        
    }

    const onCloseDialog = () => {
        component = null;
    }

</script>

<!-- {#if component} -->
    <div 
        class="{dragging && "sprot-dragging"} text-sprotText border border-sprotBgLight60 rounded-lgp mx-auto pointer-events-auto absolute bg-sprotBg {component ? "" : "hidden invisible opacity-0 pointer-events-none"}"
        bind:this={dialog} id="dialog">
        <div class="sprot-toplevel-header h-6 border-b border-sprotBgLight60 bg-sprotBgLight20 flex items-center justify-between px-2">
            <div>
            </div>
            <BitmapButton 
                className="w-6"
                on:click={onCloseDialog}>
                <Close color="white" size={10}/>
            </BitmapButton>
        </div>
        {#if component}
            <svelte:component this={component} />
        {/if}
    </div>
<!-- {/if} -->

<style>
    .sprot-dragging {
        box-shadow: 2px 2px 10px 10px rgba(255, 255, 255, 0.15);
    }
</style>
