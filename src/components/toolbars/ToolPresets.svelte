<script lang="ts">
    import DropdownOutline from "$components/icons/DropdownOutline.svelte";
    import { onMount } from "svelte";
    import PopupMenuItem from "./tools/PopupMenuItem.svelte";
    import type { SprotCanvasTool } from "$lib/tools/base";
    import type { SprotAppViewController, SprotPresetInterface } from "$wasm/sprot_app";
    import { getAppViewController } from "$lib/stores";
    import RaisedButton from "$components/general/RaisedButton.svelte";
  import { Select } from "$components/ui";

    export let tool: SprotCanvasTool;
    let active: boolean = false;
    let presets: SprotPresetInterface[] = [];
    let appState: SprotAppViewController | null = null;

    onMount(() => {
        window.addEventListener("mouseup", onDeactive);
        getAppViewController(app => appState = app);

        // tool.onSetTool(tl => {
        //     presets = tl.get_presets();

        //     console.log("presets:", presets);
            
        // });

        tool.toolInterface.Some(prests => presets = prests.get_presets());
    
        return () => {
            window.removeEventListener("mouseup", onDeactive);
        }
    });

    const updateToolPresets = () => {
        if (tool) {
            tool.toolInterface.Some(p => {
                presets = p.get_presets();
            })
            .None(() => {
                presets = [];
            })
        }
    }

    const onSetActiveToolPreset = (id: number) => {
        console.log(" preset id: ", id);
        
        if(!appState) {
            return;
        }

        presets = presets.map(pr => {
            pr.active = pr.id === id;

            if(tool && appState && pr.id === id) {
                tool.setActionPreset(appState, id);
            }
            return pr;
        });
    }
    
    $: if(tool) { updateToolPresets(); }


    const onActive = () => { 
        active = !active; 
        // if (active) {
        //     document.body.style.pointerEvents = "none";
        // }

        console.log("on active");
        
    }
    
    const onDeactive = () => { 
        active = false; 
        document.body.style.pointerEvents = "auto";
    }

    
</script>

{#if tool}
<div class="relative">
    <Select 
        className="relative min-h-5 h-5 max-h-5 px-0 pointer-events-auto flex gap-[2px] group items-center"
        on:click={onActive} 
        on:mouseleave={onDeactive}>
        <span class="bg-transparent h-5 {presets.length <= 0 && "pointer-events-none"} flex items-start">
            <div class="w-6 h-5 flex items-center justify-center border-sprotBgLight60 rounded-tl-sm rounded-bl-sm {presets.length <= 0 && "rounded-tr-sm rounded-br-sm" }">
                <svelte:component this={tool.icon} size={12} color="white" />
            </div>
        </span>

        <div class="text-sprotText text-[10px] flex items-center gap-1 h-5">Toolset</div>        
    </Select>
    {#if active && presets.length > 0}
        <div class="min-w-48 flex flex-col absolute top-5 left-0 z-40">
            <div class="h-1">
            </div>
            <div class="bg-sprotBg flex-1 p-1 rounded-sm border border-sprotBgLight60">
                {#each presets as preset (preset.id) }
                    <PopupMenuItem 
                        active={preset.active} 
                        icon={tool.icon} 
                        id={"id-" + preset.id} 
                        name={preset.get_name()} 
                        shortkey={"M"}
                        on:mouseup={() => onSetActiveToolPreset(preset.id)} />
                {/each}
            </div>            
        </div>
    {/if}
</div>
{/if}