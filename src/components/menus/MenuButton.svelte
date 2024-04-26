<script lang="ts">
    import { SprotMenuItemKind, type SprotMenuItem } from "$lib/types";
    import { DropdownOutline } from "$components/icons";
    import type { SprotMenu } from "$lib/menus/";
    import { createEventDispatcher, onMount } from "svelte";
    import Selection from "$components/icons/Selection.svelte";
    //   export let overMenus: boolean = false;
    export let active: boolean = false;
    export let name: string;
    export let menus: SprotMenu;
    export let parent: boolean = false;

    // const dispatch = createEventDispatcher();


    onMount(() => {
        // window.addEventListener("mousedown", onCloseAllPanes);


        // return () => {
        //     window.removeEventListener("mousedown", onCloseAllPanes);
        // }
    })

    const onCloseAllPanes = () => {
        menus = menus.closeAllPanes();
        active = false;
        // dispatch("close");
    }

    const onMouseEnterMenu = (menu: SprotMenuItem) => {
        menus = menus.setActiveMenuItem(menu);
    }

</script>

<div class="relative inline-block">
    {#if parent}
        <button 
            class="px-2 h-5 bg-inherit text-sprotText text-[12px]"
            on:click
            on:mouseenter>
            {name}
        </button>
    {/if}

    <div 
        class="min-w-64 text-sprotText text-[12px] font-normal h-fit border border-sprotBgLight60 p-1 absolute bg-sprotBg transition-all bottom left-0 {active ? "block" : "hidden"} z-[888] ">
        <ul>
            {#each menus.getMenus() as menu (menu.id) }
                {#if menu.kind === SprotMenuItemKind.SprotMenuSeperator} 
                    <li 
                        class="w-[90%] ml-auto h-[1px] my-1 bg-sprotBgLight60"
                        on:mouseenter={() => onMouseEnterMenu(menu)}>
                    </li>
                {:else}   
                    <li class="h-6 {menu.active && "bg-sprotPrimary"} hover:bg-sprotPrimary flex items-center justify-between px-2 relative"
                        on:mouseenter={() => onMouseEnterMenu(menu)}>
                        <div class="grid" style="grid-template-columns: 1fr 4fr 1fr;">
                            <span class="flex w-6 h-full justify-center items-center">
                                <Selection color="white" />
                            </span>
                            <span class="inline-flex mr-auto">{menu.name}</span>
                            <span class="inline-flex ml-auto {menu.submenu && "opacity-0"}">Ctrl+D</span>
                        </div>
                        {#if menu.submenu}
                            <span class="flex items-center justify-center relative">
                                <span class="-rotate-90">
                                    <DropdownOutline color="white" />
                                </span>
                                <div class="bg-sprotBg absolute left-6 top-0">
                                    <svelte:component this={menus.getComponent()} menuObect={menu.submenu} active={menu.active}  />
                                </div>
                            </span>
                        {/if}
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</div>