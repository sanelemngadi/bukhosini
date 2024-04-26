<script lang="ts">
    export let horizontal: boolean = false;
    export let size: number = 8;
    export let className: string = "";
</script>

<div 
    class="bg-sprotBg {className}"
    style="width: {horizontal ? "100%" : size / 16 + "rem"}; height: {horizontal ? size / 16 + "rem" : "100%" };">
</div>