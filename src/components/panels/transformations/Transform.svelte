<script lang="ts">
  import BitmapButton from "$components/general/BitmapButton.svelte";
    import { Move, Rotate, Scale } from "$components/icons/modifiers";
//   import { transformationTools } from "$lib/api/transformations";
    import { getAppViewController, getCurrentSelection } from "$lib/stores";
    import { SprotPanelKind, type SprotAppViewController } from "$wasm/sprot_app";
    import { onMount, type ComponentType } from "svelte";
    import RotationTransformControl from "./RotationTransformControl.svelte";
    import ScaleTranformControl from "./ScaleTranformControl.svelte";
    import TranslateTransformControl from "./TranslateTransformControl.svelte";
    import type { SprotLinearTransformationType } from "$lib/panels/types";
  import { NO_SELECTION, type SprotTSRect, type SprotTSSelection } from "$lib/types";
  
    // let appState: SprotAppViewController | null = null;
    // let selection: SelectionOption<SprotEntity> = NoSelection;
    //   let input: HTMLInputElement;
  
    interface TransItem {
        id: number,
        name: string,
        active: boolean,
        icon: ComponentType,
        control: ComponentType,
    }

    let transformationTools: TransItem[] = [
        {id: 0, name: "Rotate", active: false, icon: Rotate, control: RotationTransformControl },
        {id: 1, name: "Scale", active: false, icon: Scale, control: ScaleTranformControl },
        {id: 2, name: "Translate", active: false, icon: Move, control: TranslateTransformControl, },
    ]

    let activeTransformation: TransItem | null = null;
    let appState: SprotAppViewController | null = null;
    let selection: SprotTSSelection = NO_SELECTION;
    let selectionBounds: SprotTSRect = { pt: {x: 0, y: 0}, sz: {w: 0, h: 0}}
  
    const init = () => {
        getCurrentSelection(select => {
            selection = select;

            selectionBounds = { 
                pt: { x: selection.rect.pt.x, y: selection.rect.pt.y }, 
                sz: { w: selection.rect.sz.w, h: selection.rect.sz.h } 
            } 

            console.log("bounds: ", selectionBounds);
            
        });

        getAppViewController(app => {
            appState = app;
            try {
                app.register_panel(SprotPanelKind.SprotTransformationPanel);
            } catch (error) {
                console.log("error: ", error);                
            }
        });





        // setActive(0);
        
    }
  
    onMount(init);

    const setActive = (id: number) => {
        transformationTools = transformationTools.map(transformation => {
            transformation.active = transformation.id === id;

            if(transformation.active) {
                activeTransformation = transformation;
            }

            return transformation;
        })
    }


    const onChanges = (e: CustomEvent<SprotLinearTransformationType>) => {
        if(!appState) { return; }
        // let event: CustomEvent<SprotLinearTransformationType> = e.change.detail;

        const js = JSON.stringify(e.detail);
        // // send to rust
        appState.update_action_panel(js);

        let ppp: SprotLinearTransformationType  = JSON.parse(js);

        console.log("value: ", js);
        
    }
  
  
      /**
       * 
       * we dont allow the user to make these transformations if the active
       * modifier tool is the transformation tool
      */
  </script>
  
  
<div>
    <div class="py-2">
        <!-- <h2>Transformation</h2> -->
  
  
        <div class="p-2 mb-2">
          <label for="" class="flex flex-col gap-1 justify-center">
              Source
              <select name="" id="" class="w-full bg-sprotBg border border-sprotBgLight60 hover:bg-sprotPrimary25 hover:border-sprotPrimary">
                  <option value="">Selection</option>
                  <option value="">Active Survey board</option>
                  <option value="">Data Entry</option>
                  <option value="">Surface</option>
              </select>
          </label>
        </div>
  
        <div class="py-2 flex items-end h-9">
          <div class="h-full w-2 border-b border-sprotBgLight60"></div>
  
          {#each transformationTools as tool (tool.id) }
              <BitmapButton 
                  className="w-8 h-8 rounded-none border border-transparent border-b-sprotBgLight60 px-2 pt-1 {tool.active ? "border-b-0 border-x-sprotBgLight60 border-t-sprotBgLight60" : "hover:border-sprotPrimary hover:bg-sprotPrimary25"}"
                  on:click={() => setActive(tool.id)}>
                  <svelte:component this={tool.icon} color="white" size={16} />
              </BitmapButton>
          {/each}
          <div class="flex-1 h-full p-2 border-b border-sprotBgLight60"></div>
        </div>
  
          {#if activeTransformation}
              <!-- <div class="p-2"> -->
                <div class="p-2">
                    <svelte:component 
                        this={activeTransformation.control} 
                        {selectionBounds} 
                        on:change={onChanges} />
                </div>
              <!-- </div> -->
          {/if}
  

       
    </div>
</div>