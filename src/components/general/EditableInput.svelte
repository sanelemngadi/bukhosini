<script lang="ts">
    import Edit from "$components/icons/Edit.svelte";
    import Plus from "$components/icons/Plus.svelte";

    export let initValue:string = "3329125.25";
    let editMode: boolean = false;
    let focused: boolean;

    const onFocus = () => {
        focused = true;
    }

    const onLoseFocus = () => {
        editMode = false;
        focused = false;
    }

    const onAddVariable = () => {
        editMode = true;
        focused = true;
    }

</script>

<div class="flex gap-2 items-center relative group rounded-[2px] h-7 border {editMode ? "border-sprotBgLight60" : "border-transparent"} {focused && "border-sprotPrimary"}">
    <div class="sprot-label h-full flex items-center w-5 pl-2">
        <label for="sprot-id-1" class="h-full flex items-center text-[11.5px]">
            <slot/>
        </label>
    </div>
    <div class="sprot-content relative h-full flex-1 flex items-center">
       {#if !editMode}
        <button 
        on:click={() => editMode = true}
            class="btn-variable left w-4 h-4 rounded-2xl border border-sprotText bg-sprotPrimary inline-flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span class="opacity-0 group-hover:opacity-100">
                <Edit size={8} color="white"/>
            </span>
        </button>
        {:else}
        <button 
            class="btn-variable right group w-2 h-2 rounded-2xl border border-sprotText bg-sprotPrimary hover:scale-150"
            on:mouseup={onAddVariable}>
            <span class="scale-50 flex w-full h-full items-center justify-center">
                <Plus size={8} color="white"/>
            </span>
        </button>
       {/if}
        <input 
            type="text" 
            name="" 
            autocomplete="off" 
            autocorrect="off" 
            inputmode="numeric" 
            id=""
            class="bg-transparent border-none inline-flex w-full p-1 outline-none text-sprotText text-[11.5px] h-full"
            value={initValue}
            disabled={editMode === false}
            on:blur={onLoseFocus}
            on:focus={onFocus}>
    </div>
</div>

<style>
    .btn-variable {
        position: absolute;
        top: 50%;
        transition: all 250ms ease-in-out;
    }

    .btn-variable.left {
        left: 0%;
        transform: translate(-50%, -50%);
    }
    .btn-variable.right {
        left: 0%;
        top: 0%;
        transform: translate(50%, -50%);
    }

    .btn-variable.left:hover {
        transform: translate(-50%, -50%) scale(1.5);
        transition: all 250ms ease-in-out;
    }

    .btn-variable.right:hover {
        transform: translate(50%, -50%) scale(2.4);
        transition: all 250ms ease-in-out;
    }

    input {
        background-color: #1D1D1D00;
    }
</style>