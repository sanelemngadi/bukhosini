<script lang="ts">
    import { SprotNotebook } from "$lib/notebook";
    import { onMount } from "svelte";
    import Info from "./info/Info.svelte";
    import Notebook from "$components/notebook/Notebook.svelte";
    import Layers from "./layers/Layers.svelte";
    import Property from "./properties/Property.svelte";
    import { getCurrentSelection } from "$lib/stores";

    let notebook: SprotNotebook;
    // let selection: SprotSelectionWrapper = SprotSelectionWrapper.empty();
    let label: String = "No Selection";

    const init = () => {
        notebook = new SprotNotebook();

        notebook.addPage("Properties", Property, true);
        notebook.addPage("Info", Info, false);
        notebook.addPage("Layers", Layers, false);

        getCurrentSelection(select => {
            label = select.label;
        });
    }

    onMount(init);

    const onSelection = (id: number) => {
        notebook = notebook.setSelection(id);
    }
</script>


<div class="h-full flex flex-col">
    <div class="h-8 px-2 flex items-center">
        <h3>{label}</h3>
    </div>
    
    <div class="flex-1">
        {#if notebook}
            <Notebook pages={notebook.pages} {onSelection}/>
        {/if}
    </div>
</div>

