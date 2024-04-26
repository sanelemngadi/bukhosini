<script lang="ts">
    import Selection from "$components/icons/Selection.svelte";
    import { createEventDispatcher, onMount } from "svelte";
    import PopupMenuItem from "./PopupMenuItem.svelte";
    import { setDefaultStatus, setStatus } from "$lib/stores/status";
    import type { SprotCanvasTool } from "$lib/tools/base";

    // export let groupName: string;
    export let tools: SprotCanvasTool | SprotCanvasTool[];
    const dispatch = createEventDispatcher();
    let active: boolean = true;
    let containsActiveTool: boolean = false;

    let displayTool: SprotCanvasTool | null = null; // use active or the first one


    onMount(() => {
        active = true;        
        assignToolState();
        window.addEventListener("mouseup", onHidePane);

        return () => {
            window.removeEventListener("mouseup", onHidePane);
        }
    });

    const assignToolState = () => {
        containsActiveTool = false;

        if(Array.isArray(tools)) {
            if(!displayTool && tools.length > 0) {
                displayTool = tools[0];
            }

            tools.forEach(tool => {
                if(tool.active) {
                    containsActiveTool = true;
                    displayTool = tool;
                }
            })
        } else {
            displayTool = tools;

            if(tools.active) {
                containsActiveTool = true;
            }
        }
    }

    const onHidePane = () => { active = false; }

    const onShowPane = () => { active = true; }

    $: {
        if(tools) {  
            assignToolState(); 
            // console.log("display tool: ", displayTool);
        } // chage icon based on the current tool

        
        

        if(!active) { setDefaultStatus(); }
    }

    /**

    there must be a default item in each group otherwise the first item will be used as the default
    where you click an item it must be active and disable all others


    */

    const onChange = (id: any) => {
        console.log("value changed: ", id);
        
        // let target = e.target as HTMLInputElement | null;
        // if(!target) return;

        // const val = parseInt(target.value);

        if(Array.isArray(tools)) {
            tools.forEach(tool => {
                if(tool.id == id) {
                    dispatch("selection", { value: tool.id });
                }
            });
        }
    }

    const onSelectCurrent = () => {
        if(Array.isArray(tools)) {  
            let current = tools.find(tool => tool.active);
            if(current) {
                dispatch("selection", { value: current.id });
            } 
            else {
                if(displayTool ) { 
                    dispatch("selection", { value: displayTool.id });
                } 
                else {
                    throw new Error("invalid tool");                    
                }   
            }
        } 
        else {
            dispatch("selection", { value: tools.id });
        }
    }
</script>

{#if tools}
    <button 
        class="sprot-canvas-tool items-start relative group"
        on:mouseenter={onShowPane}>
        <button class="flex text-sprotText relative w-6 h-6 items-center border border-transparent justify-center rounded-[pp1px] hover:border-sprotPrimary { containsActiveTool ? "bg-sprotPrimary" : "hover:bg-sprotBgLight20"}" on:click={onSelectCurrent} on:mouseenter={()=> {
            displayTool && setStatus(displayTool.name + " Tool");}}>

                {#if displayTool}
                    <svelte:component this={displayTool.icon} color="white" size={Array.isArray(tools) ? 16 : 16} />
                {:else}
                    <Selection color="red" />
                {/if}
                <span class="{Array.isArray(tools) ? "" : "hidden opacity-0 invisible"} absolute bottom-0 right-0">
                    <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.26667 4H0L4.26667 0V4Z" fill="white"/>
                    </svg>   
                </span>
            <!-- <PillButton pill={false} overflow={Array.isArray(tools)} active={containsActiveTool}>
            </PillButton> -->
        </button>
        
        {#if Array.isArray(tools)} 
        <!-- left-0 top 7 -->
            <div class="popup flex absolute top-0 left-6 min-w-52 {!active && "hidden opacity-0 pointer-events-none"}">
                <div class="w-4 h-0 bg-sprotDanger"></div>

                <div class="bg-sprotBg border border-sprotBgLight60 p-[2px] rounded-sm z-20">
                    {#each tools as tool (tool.id) }
                        <PopupMenuItem 
                            active={tool.active} 
                            icon={tool.icon} 
                            id={"id-"+tool.id} 
                            name={tool.name + " Tool"} 
                            shortkey={"[" + tool.shortkey + "]" || ""}
                            on:click={() => onChange(tool.id)} />
                    {/each}
                </div>
            </div>
        {/if}
    </button>
{/if}

<style>
    .popup {
        display: none;
    }

    .sprot-canvas-tool:hover .popup {
        display: flex;
        flex-direction: column;
    }
</style>



