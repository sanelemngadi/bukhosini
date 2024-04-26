<script>
  import EditableSelect from "$components/general/EditableSelect.svelte";

</script>

<div>
    <div class="h-8 px-2 flex items-center">
        <label for="select" class="flex items-center gap-2">
            <EditableSelect>Layer: </EditableSelect>
        </label>
    </div>
    
    <div class="px-2 flex flex-col gap-2">
        <h2>Preview</h2>
        <div class="h-28 w-full bg-black rounded-[4px] border border-sprotBgLight60">
        </div>
    </div>
</div>

<div class="px-2 pt-2">
    <h2>Extents</h2>
    <div class="grid grid-cols-3 gap-2">
        <div></div>
        <div class="border border-sprotBgLight60">
            <h2 class="text-center font-bold text-sprotBgLight60">Top</h2>
            <p class="text-center">+10125.24</p>
        </div>
        <div></div>
        <div class="border border-sprotBgLight60">
            <h2 class="text-center font-bold text-sprotBgLight60">Left</h2>
            <p class="whitespace-nowrap text-center">+3329125.24</p>
        </div>
        <div></div>
        <div class="border border-sprotBgLight60">
            <h2 class="text-center font-bold text-sprotBgLight60">Right</h2>
            <p class="whitespace-nowrap text-center">+3329425.24</p>
        </div>

        <div></div>
        <div class="border border-sprotBgLight60">
            <h2 class="text-center font-bold text-sprotBgLight60">Bottom</h2>
            <p class="text-center">+10125.24</p>
        </div>
        <div></div>
    </div>
</div>
<div class="border-b h-2 border-sprotBgLight60"></div>

<!-- <div class="h-8 px-2 flex items-center">
</div> -->