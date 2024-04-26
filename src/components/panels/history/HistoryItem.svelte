<script lang="ts">
    import { History, Redo, Trash, Undo } from "$components/icons";
    import DropDown from "$components/icons/DropDown.svelte";
    import type { SprotClientHistory } from "$wasm/sprot_app";

    export let history: SprotClientHistory;
    export let active: boolean = false;
</script>

<li 
    class="flex gap-1 h-7 border border-transparent hover:border-sprotPrimary items-center group overflow-hidden transition-all duration-300 {active && "border-b-transparent text-sprotBgLight60 border-sprotSuccess"}"
    on:mouseenter>
    <div class="icon flex hover:cursor-pointer"><DropDown color="white" size={0} /></div>
    <div class="icon flex"><History color="white" size={12} /></div>
    <div class="flex-1 w-12 overflow-hidden whitespace-nowrap overflow-ellipsis flex items-center gap-2">
        <span class="font-semibold">{history.get_label()}</span>
        <span class="italic underline">{history.get_action()}</span>
    </div>
    <button class="icon hidden group-hover:flex hover:bg-sprotPrimary"><Redo color="white" size={12}/></button>
    <button class="icon hidden group-hover:flex hover:bg-sprotPrimary"><Undo color="white" size={12}/></button>
    <button class="icon hidden group-hover:flex hover:bg-sprotPrimary"><Trash color="white" size={12}/></button>
</li>

<style lang="postcss">
    .icon {
        letter-spacing: 0.55;
        word-spacing: 0.5;
        line-height: 1.6;
        @apply w-6 h-5 items-center justify-center rounded-sm transition-all duration-300;
    }
</style>