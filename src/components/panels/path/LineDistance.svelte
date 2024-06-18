<script lang="ts">
    import RaisedButton from "$components/general/RaisedButton.svelte";
    // import CadItem from "$components/general/accordion/CADItem.svelte";
    import { SprotPathPremitiveKind, type SprotPathPremitive } from "$lib/api/pathpremitives";
    import { No_PATH, type SprotPathPremitiveType } from "$lib/panels/types/path_panel_types";
    import { createEventDispatcher, onMount } from "svelte";
  
      export let path: SprotPathPremitive;
      let input:HTMLInputElement;

      onMount(() => {
        if(input) {
            input.focus();
        }
      });

      $: {
        if(path && input) {
            input.focus();
        }
      }

      let dispatch = createEventDispatcher();

      let distance = "0.0";

      const onChangeDistance = (e: any) => {
        const value = parseFloat(distance);

        if(isNaN(value)) { return; }
        const new_path = onAddLineToSide(value, path.kind);
        dispatch("change", new_path);

        distance = '';

        if(input) {
            input.focus();
        }
      }

      const onAddLineToSide = (distance: number, kind: SprotPathPremitiveKind): SprotPathPremitiveType => {
        let path = { ...No_PATH };
        
        switch (kind) {
            case SprotPathPremitiveKind.LEFT:
                path.horizontal = -distance;
                break;
                case SprotPathPremitiveKind.RIGHT:
                path.horizontal = distance;
                break;
                case SprotPathPremitiveKind.TOP:
                path.vertical = -distance;
                break;
                case SprotPathPremitiveKind.BOTTOM:
                path.vertical = distance;
                break;
                
        
            default: // default is no path
                break;
        }
        
        return path;
      }
  </script>

<form class="flex gap-2 items-center py-2" on:submit|preventDefault={onChangeDistance}>
    <div class="flex flex-col gap-2">
        <label for={"item-"+path.id} class="flex gap-2 items-center">Dist 
            <input 
                type="text" 
                bind:this={input}
                name={"item-"+path.id} 
                id={"item-"+path.id} 
                bind:value={distance}
                class="h-6 bg-sprotBg border border-sprotBgLight60 rounded-sm focus:bg-sprotBgLight20 outline-none focus:border-sprotText px-1 hover:border-sprotLightBorder ">
        </label>
    </div>
    <RaisedButton className="w-8 h-8 border border-sprotBgLight60">
        <svelte:component this={path.icon} color="white" />
    </RaisedButton>
</form>

