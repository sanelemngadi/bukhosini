<script lang="ts">
  import { setStatus } from "$lib/stores/status";
  import type { ComponentType } from "svelte";

    // export let groupName: string;
    export let name: string;
    export let id: string;
    export let active: boolean;
    export let icon: ComponentType;
    export let shortkey: string = "";

    // export let tool: SprotCanvasTool;

    let disabled: boolean = false;

    const onMouseEnterItem = (item: string) => {
        setStatus(item);
    }
</script>



<button 
    class="flex h-6 w-full border border-transparent hover:bg-sprotBg hover:border-sprotPrimary25 font-normal items-center whitespace-nowrap justify-between gap-2 px-1 text-[11.5px] {disabled ? "text-[gray]" : "text-sprotText"}"
    on:mouseenter={() => onMouseEnterItem(name)}
    on:click
    on:mouseup>
    <span  
        id={id} 
        aria-hidden="true" 
        class="sprot-input {!active && "invisible opacity-0" } pointer-events-none">
    </span>
        <span class="inline-flex items-center gap-2 flex-1">
            <svelte:component this={icon} size={12} color="{disabled ? "rgba(255,255,255, 0.15)" : "white"}" />
            <span class="capitalize">{name}</span>
        </span>
        <span class="inline-block">{shortkey}</span>
</button>

<style>
    .sprot-input {
        appearance: none;
        width: 16px;
        height: 16px;
        display: inline-flex;
        background-image: url(/src/assets/ui/drop-down-outline.svg);
        background-position: center;
        background-repeat: no-repeat;
    }
</style>