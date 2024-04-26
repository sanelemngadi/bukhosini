<script lang="ts">

    import { BottomSide, Edit, Eye, LeftSide, MoreOptions, RightSide, TopSide, Trash } from "$components/icons";
    import { onMount, type ComponentType, createEventDispatcher } from "svelte";
    import BitmapButton from "../BitmapButton.svelte";
    import DullButton from "../DullButton.svelte";
  
    export let active: boolean;
    export let elementId: number;
    export let icon: ComponentType | undefined;
    export let setActive: (id: number) => void;
    export let show: boolean = true;
    export let side: "left" | "right" | "top" | "bottom" = "left";

    let dispatch = createEventDispatcher();

    const onEdit = () => {
        dispatch("edit");
    }

    const init = () => {
        console.log(side);
        
        // switch (side) {
        //     case "bottom":
        //         icon = BottomSide;
        //         break;
        //     case "left":
        //         icon = LeftSide;
        //         break;
        //     case "right":
        //         icon = RightSide;
        //         break;
        //     case "top":
        //         icon = TopSide;
        //         break;
        
        //     default:
        //         break;
        // }
    }

    onMount(init)
    
  
  
  </script>
  {#if show}
    
  <li class="h-6 {active ? "bg-sprotBgLight20" : "hover:bg-sprotBgLight20"} group flex items-center gap-0 overflow-hidden pr-1">
    <div class="w-4 h-full flex items-center justify-center {active ? "" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"} cursor-all-scroll bg-transparent">
        <span class="pointer-events-none">
            <MoreOptions color="white" size={8} />
        </span>
    </div>
    <DullButton 
        className="pl-1 gap-1 flex items-center whitespace-nowrap text-left"
        on:click={() => setActive(elementId)}>
        {#if icon}
        <div class="w-7 h-full flex items-center justify-center">
            <span class="pointer-events-none flex items-center justify-center w-full h-full">
                <svelte:component this={icon} color="#909090" size={12} />
            </span>
        </div>
        {/if}
        <div class="h-5 rounded-[4px] flex items-center overflow-hidden">
            <div class="sprot-bg">
                <input class="w-16 px-2 border-none outline-none bg-transparent pointer-events-none" disabled type="text" name="" id="" value="20mm">
            </div>
           
        </div>
        <!-- <p class="text-nowrap w-28 group-hover:overflow-hidden group-hover:text-ellipsis {active && "overflow-hidden text-ellipsis"} ">{name}</p> -->
    </DullButton>

    <div class="flex items-center ml-auto {active ? "" : "invisible opacity-0 group-hover:visible group-hover:opacity-100 "}">
        <BitmapButton className="w-6 h-5">
            <span class="pointer-events-none flex items-center justify-center w-full h-full">
                <Eye color="white" size={8} />
            </span>
        </BitmapButton>
        <BitmapButton className="w-6 h-5"
            on:click={onEdit}>
            <span class="pointer-events-none flex items-center justify-center w-full h-full">
                <Edit color="white" size={12} />
            </span>
        </BitmapButton>
        <BitmapButton className="w-6 h-5">
            <span class="pointer-events-none flex items-center justify-center w-full h-full ">
                <Trash color="white" size={12} />
            </span>
        </BitmapButton>
    </div>
</li>
  {/if}
  
  
  <!-- <style lang="postcss">
      .accordion-list li:first-child {
          @apply rounded-tl-[4px] rounded-tr-[4px];
      }
  
      .accordion-list li:last-child{
          @apply rounded-bl-[4px] rounded-br-[4px];
      }
  </style> -->