<script lang="ts">
  import RaisedButton from "$components/general/RaisedButton.svelte";
  import { pathPremitives, SprotPathPremitiveKind, type SprotPathPremitive } from "$lib/api/pathpremitives";
  import type { SprotPathPremitiveType } from "$lib/panels/types/path_panel_types";
  import { SprotPanelKind, type SprotAppViewController } from "$wasm/sprot_app";
  import { onMount } from "svelte";
  import LineTo from "./LineTo.svelte";
  import PolarTo from "./PolarTo.svelte";
  import { getAppViewController } from "$lib/stores";
  import AddLineToRight from "$components/icons/panels/AddLineToRight.svelte";

  let pathPrems: SprotPathPremitive[] = pathPremitives ;
  let activePathPremitive: SprotPathPremitive | null = null;
  let pathBegun: boolean = false;
  let appState: SprotAppViewController | null = null;

  const init = () => {
    getAppViewController(app => {
        appState = app;
        app.register_panel(SprotPanelKind.SprotPathPanel);
    });
  }

  const beginPathPremitive: SprotPathPremitive = {
    active: false, 
    current: true, 
    icon: AddLineToRight,
    id: 0,
    kind: SprotPathPremitiveKind.MOVE_TO,
    name: "Begin path",
    component: {
        panel: PolarTo,
    },
  }

  onMount(init);


  const onSetActivePremitive = (id: number) => {
    pathPrems = pathPrems.map(path => {
        if(path.id === id) {
            path.current = true;
            activePathPremitive = path;
        } else {
            path.current = false;
        }

        return path;
    });
  }

  const updatePath = (path: SprotPathPremitiveType): boolean => {
    if(appState) {
        const json = JSON.stringify(path);
        appState.update_action_panel(json);

        console.log(path);
        
        return true;
    }
    return false;
  }

  const onPathPremitive = (e: CustomEvent<SprotPathPremitiveType>) => {
    let pt = e.detail;
    updatePath(pt);
  }

  const onBeginPath = (e: CustomEvent<SprotPathPremitiveType>) => {
    let pt = e.detail;

    pathBegun = updatePath(pt); 
  }

</script>
  
{#if !pathBegun}
    <div class="px-2 pt-2">
        <h2>Begin Path</h2>

        <LineTo path={beginPathPremitive} on:change={onBeginPath} />
    </div>
    <div class="border-b h-2 border-sprotBgLight60"></div>
{:else}
    <div class="p-2">
        <ul class="flex">
            {#each pathPrems as path, index (path.id) }
            <li class="list-none">
                {#if path.active}
                <RaisedButton 
                    className="px-0 rounded-none {index === 0 && "rounded-tl-sm rounded-bl-sm"} {index === pathPrems.length - 1 && "rounded-tr-sm rounded-br-sm"}"
                    on:click={() => onSetActivePremitive(path.id)}>
                    <span class="flex h-full w-full items-center justify-center">
                        <svelte:component this={path.icon} color={path.active ? "white" : "gray"} />
                    </span>
                </RaisedButton>
                {:else}
                <span class="flex h-6 w-8 items-center justify-center border border-sprotBgLight20">
                    <svelte:component 
                        this={path.icon} 
                        color={path.active ? "white" : "gray"}  />
                </span>
                {/if}
            </li>
            {/each}
        </ul>
    </div>

    {#if activePathPremitive}
        <div class="px-2 pt-2">
            <h2>{activePathPremitive.name}</h2>

            <svelte:component 
                this={activePathPremitive.component.panel} 
                path={activePathPremitive} 
                on:change={onPathPremitive}
                />
        </div>
    {/if}
    <div class="border-b h-2 border-sprotBgLight60"></div>
    
    <div class="grid grid-cols-3 gap-2 items-center justify-between p-2">
        <RaisedButton className="bg-sprotBg">Cancel</RaisedButton> 
        <RaisedButton>Commit</RaisedButton> 
     </div>
{/if}