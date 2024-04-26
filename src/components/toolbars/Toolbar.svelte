<script lang="ts">
    export let pill:boolean = true;
</script>

<div class="w-full h-full flex items-center gap-0 {pill === false ? "px-2-pp" : "overflow-hidden"}">
    <slot />
</div>