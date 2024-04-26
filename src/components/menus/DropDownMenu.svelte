<script lang="ts">
    import { DropdownOutline } from "$components/icons";
    import Selection from "$components/icons/Selection.svelte";
    import type { SprotMenu } from "$lib/menus/";
    // import { getPanelsState } from "$lib/stores";
    import { SprotMenuItemKind, type SprotMenuItem } from "$lib/types";
    import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fly, slide,scale } from "svelte/transition";

    export let menuObject: SprotMenu;
  
    let open: boolean = false;
    let panelsDiv: HTMLDivElement;
    export let active: boolean = false;

    onMount(() => {
        // getPanelsState(panel => open = panel.open);

        window.addEventListener("mousedown", onMouseDown);
        return () => {
            window.removeEventListener("mousedown", onMouseDown);
        }
    });

    const onMouseDown = (e: MouseEvent) => {
        let target = e.target as HTMLElement | null;

        const targetContained = target && panelsDiv && panelsDiv.contains(target);
        if(!targetContained) {
            onCloseAllPanes();
        }

    }

    const onCloseAllPanes = () => {
        if(active) {
            menuObject = menuObject.closeAllPanes();
        }
        active = false;
    }

    const onMouseEnterMenu = (menu: SprotMenuItem) => {
      if(active) {
          menuObject = menuObject.setActiveMenuItem(menu);
      }
    }

    const onClickMenu = (menu: SprotMenuItem) => {
        console.log(menu);
        
        if(menu.kind === SprotMenuItemKind.SprotMenuButton) {

            // item clicked send events to parent panel
            onCloseAllPanes();
        }
        if(menu.kind === SprotMenuItemKind.SprotMenuSubmenu) {
            onMouseEnterMenu(menu);
        } 
        else {
            // this is a seperator so do nothing
        }
    }
  
  
  </script>
  
{#if active}
<div 
    bind:this={panelsDiv}
    transition:scale={{ delay: 200, duration: 250, opacity: 0, easing: quintOut }}
    class="min-w-64 text-sprotText text-[12px] rounded-sm p-1 font-normal h-fit border border-sprotBgLight60 bg-sprotBg transition-all">  
    <ul>
      {#each menuObject.getMenus() as menu (menu.id) }

          {#if menu.kind === SprotMenuItemKind.SprotMenuSeperator} 
              <li 
                  class="w-[90%] ml-auto h-[1px] my-1 bg-sprotBgLight60"
                  on:mouseenter={() => onMouseEnterMenu(menu)}>
              </li>
          {:else}  
              <li 
                  class="h-6 {menu.active && "bg-sprotPrimary"} hover:bg-sprotPrimary flex h-full items-center justify-between px-2"
                  on:mouseenter={() => onMouseEnterMenu(menu)}
                  >
                      <button
                          class="h-6 w-full grid items-center"
                          style="grid-template-columns: 1fr 4fr 1fr;"
                          on:click={() => onClickMenu(menu)}>
                              <span class="flex w-6 h-full justify-center items-center">
                                  {#if menu.icon}
                                      <svelte:component this={menu.icon} color="white" size={14} />
                                  {/if}
                              </span>
                              <span class="inline-flex mr-auto">{menu.name}</span>
                              <span class="inline-flex ml-auto {menu.submenu && "opacity-0"}">Ctrl+D</span>
                      </button>
                      {#if menu.submenu}
                          <span class="flex items-center justify-center relative">
                              <span class="-rotate-90">
                                  <DropdownOutline color="white" />
                              </span>
                              <div class="borderl {menu.active ? "block bg-sprotBgkk" : "hidden bg-sprotPrimary"} absolute left-6 top-0">
                                  <svelte:component this={menuObject.getComponent()} menuObject={menu.submenu} active={menu.active}  />
                              </div>
                          </span>
                      {/if}
              </li>
          {/if}
      {/each}
    </ul>
</div>
{/if}
  
  
  <!-- 
  /**
  
  List of panels that shows:
  
  1. Panels settings,
  2. Properties -
  3. Document -
  4. Documentation =
  5. History -
  6. Print -
  7. Tools -
  8. Layers -
  9. Surface -
  10. Templates / Presets - -
  11. Document Setup
  12. Color Settings -
  13. Fonts -
  
  
  */ -->