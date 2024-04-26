<script lang="ts">
    import RaisedButton from "$components/general/RaisedButton.svelte";
    import { SprotPathPremitiveKind, type SprotPathPremitive } from "$lib/api/pathpremitives";
  import { No_PATH, type SprotPathPremitiveType } from "$lib/panels/types/path_panel_types";
    import { createEventDispatcher, onMount } from "svelte";
  import RectReferencePoint from "./RectReferencePoint.svelte";

    export let path: SprotPathPremitive;
    export let disabled: boolean = false;
    
    let dispatch = createEventDispatcher();

    let formData = {
        w: '',
        h: '',
    }

    let initRFP = 0;
    let endRPF = 8;

      const onSubmit = () => {
        // const target = e.target as HTMLFormElement | null;

        // console.log("targets: ", formData);

        let w  = parseFloat(formData.w);
        let h  = parseFloat(formData.h);

        if(w && h) {
            let new_path = onAddRectangle(w, h, path.kind);
            dispatch("change", new_path);

            formData.w = '';
            formData.h = '';
        }
      }

      const onAddRectangle = (w: number, h: number, kind: SprotPathPremitiveKind): SprotPathPremitiveType => {
        let path = { ...No_PATH };
        path.w = w;
        path.h = h;
        path.add_rect = true;
        path.rect_init_rfp = initRFP;
        path.rect_end_rfp = endRPF;
        
        return path;
      }

    const onInitReferecePoint = (e: CustomEvent<number>) => {
        initRFP = e.detail;
    }
    const onEndReferecePoint = (e: CustomEvent<number>) => {
        endRPF = e.detail;
    }
</script>

<div class="flex gap-2 items-center">
    <label for="">Entry Point
        <RectReferencePoint on:change={onInitReferecePoint} />
    </label>
    <label for="">Exit Point
        <RectReferencePoint on:change={onEndReferecePoint} />
    </label>
</div>

<form class="flex gap-2 items-center py-2" on:submit|preventDefault={onSubmit}>
    <div class="flex flex-col gap-2">
        <label for={"width-"+path.id} class="flex gap-2 items-center">W 
            <input 
                type="text" 
                name={"width-"+path.id} 
                id={"width-"+path.id} 
                bind:value={formData.w}
                {disabled}
                autocomplete="off"
                autocorrect="off"
                class="h-6 bg-sprotBg border border-sprotBgLight60 rounded-sm focus:bg-sprotBgLight20 outline-none focus:border-sprotText px-1 hover:border-sprotLightBorder ">
        </label>
        <label for={"height-"+path.id} class="flex gap-2 items-center">H 
            <input 
                type="text" 
                name={"height-"+path.id} 
                id={"height-"+path.id} 
                bind:value={formData.h}
                {disabled}
                autocomplete="off"
                autocorrect="off"
                class="h-6 bg-sprotBg border border-sprotBgLight60 rounded-sm focus:bg-sprotBgLight20 outline-none focus:border-sprotText px-1 hover:border-sprotLightBorder ">
        </label>
    </div>
    <RaisedButton className="w-8 h-8 border border-sprotBgLight60">
        <svelte:component this={path.icon} color="white" />
    </RaisedButton>
</form>