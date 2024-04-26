<script lang="ts">
    import RaisedButton from "$components/general/RaisedButton.svelte";
    import { SprotPathPremitiveKind, type SprotPathPremitive } from "$lib/api/pathpremitives";
  import { No_PATH, type SprotPathPremitiveType } from "$lib/panels/types/path_panel_types";
    import { createEventDispatcher, onMount } from "svelte";

    export let path: SprotPathPremitive;
    
    let dispatch = createEventDispatcher();

    let formData = {
        direction: "0.0px",
        distance: "0.0px",
    }

      const onSubmit = () => {
        // const target = e.target as HTMLFormElement | null;

        // console.log("targets: ", formData);

        let direction  = parseFloat(formData.direction);
        let distance  = parseFloat(formData.distance);

        if(distance && direction) {
            let new_path = onAddLineToSide(distance, direction, path.kind);
            dispatch("change", new_path);

            formData.direction = '';
            formData.distance = '';
        }
        
        // if(!target) { return; }

        // const value = parseFloat(target.value);

        // if(isNaN(value)) { return; }
        // const new_path = onAddLineToSide(value, path.kind);
        // dispatch("change", { path: new_path });
      }

      const onAddLineToSide = (distance: number, direction: number, kind: SprotPathPremitiveKind): SprotPathPremitiveType => {
        let path = No_PATH;
        path.distance = distance;
        path.direction = direction
        
        switch (kind) {
            case SprotPathPremitiveKind.LINE_TO:
                path.line_to = true;  
                break;
            case SprotPathPremitiveKind.MOVE_TO:
                path.move_to = true;  
                break;
        }
        
        return path;
      }
</script>

<form class="flex gap-2 items-center py-2" on:submit|preventDefault={onSubmit}>
    <div class="flex flex-col gap-2">
        <label for={"x-coord-"+path.id} class="flex gap-2 items-center">Dist 
            <input 
                type="text" 
                name={"x-coord-"+path.id} 
                id={"x-coord-"+path.id} 
                bind:value={formData.distance}
                class="h-6 bg-sprotBg border border-sprotBgLight60 rounded-sm focus:bg-sprotBgLight20 outline-none focus:border-sprotText px-1 hover:border-sprotLightBorder ">
        </label>
        <label for={"y-coord-"+path.id} class="flex gap-2 items-center">Dire 
            <input 
                type="text" 
                name={"y-coord-"+path.id} 
                id={"y-coord-"+path.id} 
                bind:value={formData.direction}
                class="h-6 bg-sprotBg border border-sprotBgLight60 rounded-sm focus:bg-sprotBgLight20 outline-none focus:border-sprotText px-1 hover:border-sprotLightBorder ">
        </label>
    </div>
    <RaisedButton className="w-8 h-8 border border-sprotBgLight60">
        <svelte:component this={path.icon} color="white" />
    </RaisedButton>
</form>