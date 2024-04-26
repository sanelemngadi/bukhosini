<script lang="ts">
    import Edit from "$components/icons/Edit.svelte";
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

<div class="flex gap-4 items-center relative group h-7">
    <div class="sprot-label h-full flex items-center pl-2">
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
       {/if}
        <select 
            name="" id=""
            disabled={editMode === false}
            on:blur={onLoseFocus}
            on:focus={onFocus}
            class="bg-transparent border-none inline-flex w-full p-1 outline-none text-sprotText text-[11.5px] h-full {editMode ? "" : "appearance-none"}">
            <option>Buildings</option>
        </select>
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
</style>