<script lang="ts">
    export let label: string;
    export let active: boolean;
</script>

<button class="btn pr-4 text-[11.5px] font-semibold {active ? "btn-active text-sprotText" : 'hover:text-sprotText'}" on:click>
    <h2>{label}</h2>
</button>

<style lang="postcss">
    .btn {
        color: #909090;
    }
    .btn:hover {
        @apply text-sprotText;
    }

    .btn.btn-active {
        @apply text-sprotText;
    }
</style>