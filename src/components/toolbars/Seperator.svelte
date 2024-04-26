<script lang="ts">
    export let vertical: boolean = false;
</script>


{#if vertical}
    <div class="h-3 w-full after:content-normal relative after:absolute after:h-[1px] after:w-1/2 after:left-1/2 after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:bg-sprotBgLight60">
    </div>
{:else}
    <div class="w-4 h-full relative after:absolute after:content-normal after:w-[1px] after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-sprotBgLight60">
    </div>
{/if}