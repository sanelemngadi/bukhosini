<script lang="ts">
  import { DropdownOutline, MoreOptions } from "$components/icons";
  import Plus from "$components/icons/Plus.svelte";
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import DullButton from "./DullButton.svelte";
  import type { ISprotAccordionListItem, SprotActions } from "$lib/types";
//   import BitmapButton from "./BitmapButton.svelte";
    export let options: boolean = true;
    export let active: boolean = false;
    export let maxItems: number = 4;
    export let items: ISprotAccordionListItem[] = [];

    let editMode: boolean = false;

    let valueSet: boolean = false;

    const onToggleAccordion = () => {
        active = !active;
    }

    let viewItems: ISprotAccordionListItem[] = [];

    const setActive = (kind: SprotActions) => {
        viewItems = items.map(item => {
            item.active = item.kind === kind;

            console.log(`old: ${item.kind} === new: ${kind}`);
            
            return item;
        });
    }

    const onAddAccordionListItem = () => {
        if(active === false) {
            active = true;
        }
    }

    const onEdit = (kind: SprotActions ) => {
        if(viewItems.length >= 1) {
            setActive(kind);
        }
        
        editMode = true;
        viewItems = items.filter(item => item.kind === kind);
    }

    const onCommit = (id: number, changes: number) => {
        editMode = false;
        viewItems = items;
    }
    
    const onCancel = (id: number) => {
        editMode = false;
        viewItems = items;
    }

    const onCopy = (id: number, changes: number) => {}

    $: {
        valueSet = items.length > 0;

        viewItems = items;
    }
</script>

<div>
    <div class="flex items-center gap-1 h-8 pl-1 group">
        <DullButton 
            className="w-3 h-4 flex items-center overflow-hidden justify-center {!valueSet && "invisible opacity-0"}"
            on:click={onToggleAccordion}>
            <span class="w-3 h-4 {!active && "-rotate-90"} flex items-center justify-center transition-all duration-200">
                <DropdownOutline color="white" />
            </span>
        </DullButton>
        <h2 class="rounded-sm px-1 text-sprotText {valueSet ? "bg-sprotBgLight20 cursor-pointer" : ""}"><slot /></h2>
        <DullButton 
            className="btn-variable invisible opacity-0 {items.length >= maxItems ? "" : " group-hover:visible group-hover:opacity-100"} right w-3 h-3 rounded-2xl border border-sprotText bg-sprotPrimary hover:scale-150 transition-all duration-200">
            <span class="scale-50 flex w-full h-full items-center justify-center">
                <Plus size={8} color="white"/>
            </span>
        </DullButton>
    
        {#if options}
        <BitmapButton className="w-6 h-6 flex rounded-[4px] items-center overflow-hidden justify-center ml-auto">
            <span class="w-4 h-4 flex items-center justify-center rotate-90">
                <MoreOptions color="white" size={8} />
            </span>
        </BitmapButton>
        {/if}
        <BitmapButton 
            className="w-6 h-6 rounded-sm overflow-hidden justify-center {options === false && "ml-auto"} {items.length >= maxItems && "invisible opacity-0 pointer-events-none"}"
            on:click={onAddAccordionListItem}>
            <span class="w-4 h-4 flex items-center justify-center">
                <Plus color="white" size={10} />
            </span>
        </BitmapButton>
    </div>
    
    <div class="overflow-hidden transition-all duration-150 pl-2 {active ? "h-fit" : "h-0"}">
        <ul class="accordion-list border {items.length <= 0 ? "border-transparent" : "border-sprotBgLight20" } rounded-[4px] {editMode && "border-sprotBgLight60"}">
            {#each viewItems as item (item.kind) }
                <!-- <OutlineItem 
                    active={item.active} 
                    elementId={item.id} 
                    icon={item.icon} 
                    setActive={setActive} 
                    on:edit={() => onEdit(item.id)}
                    on:cancel={() => onCancel(item.id)}
                    on:commit={() => onCommit(item.id, 0)}
                    /> -->
                <svelte:component 
                    this={item.listItem} {...item.listeItemProps} {setActive} 
                    on:edit={() => onEdit(item.kind)}
                    on:cancel={() => onCancel(item.kind)}
                    on:commit={() => onCommit(item.kind, 0)} />
            {/each}
        </ul>
    </div>
    {#if active}
        <div class="h-2"></div>
    {/if}
</div>

<style lang="postcss">
    /* .accordion-list li:first-child {
        @apply rounded-tl-[4px] rounded-tr-[4px];
    }

    .accordion-list li:last-child{
        @apply rounded-bl-[4px] rounded-br-[4px];
    } */

    .btn-variable {
        /* position: absolute;
        top: 50%; */
        transition: all 250ms ease-in-out;
        @apply invisible opacity-0 group-hover:visible group-hover:opacity-100;
    }

    .btn-variable.sprot-max {
        /* invisible opacity-0 group-hover:visible group-hover:opacity-100 */
        @apply group-hover:invisible group-hover:opacity-0;
    }

    .btn-variable.left:hover {
        transform: scale(1.5);
        transition: all 250ms ease-in-out;
    }

    .btn-variable.right:hover {
        transform: scale(2.4);
        transition: all 250ms ease-in-out;
    }
</style>