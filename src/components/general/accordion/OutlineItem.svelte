<script lang="ts">

    import { Edit, Eye, MoreOptions, Trash } from "$components/icons";
    import { createEventDispatcher, type ComponentType } from "svelte";
    import BitmapButton from "../BitmapButton.svelte";
    import DullButton from "../DullButton.svelte";
  import RaisedButton from "../RaisedButton.svelte";
  import RaisedDiv from "../RaisedDiv.svelte";
  import { setActionTopLevel } from "$lib/stores";
  import { Some } from "$lib/utils";
  import GridNorth from "../GridNorth.svelte";
  import Swatches from "../swatches/Swatches.svelte";
  
    export let active: boolean;
    export let elementId: number;
    export let icon: ComponentType | undefined;
    export let setActive: (id: number) => void;
    export let show: boolean = true;


    let editMode: boolean = false;
  
    let dispatch = createEventDispatcher();
  
    const onEdit = () => {
        dispatch("edit");
        editMode = true;
    }

    const onCancel = () => {
        dispatch("cancel");
        editMode = false;
    }

    const onCommit = () => {
        dispatch("commit");
        editMode = false;
    }

    const onColor = (e: any) => {
        let target = e.target as HTMLElement | null;

        if(target) {
            let top = target.offsetTop;

            setActionTopLevel(Some(Swatches), top);
            console.log("top: ", top);
            
        }
    }
  
  
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
              <BitmapButton 
                on:click={onColor}
                className="sprot-color w-3 h-3 bg-sprotSuccess">
  
              </BitmapButton>
              <div class="sprot-bg">
                  <input class="w-16 px-2 border-none outline-none bg-transparent pointer-events-none" disabled type="text" name="" id="" value="909090">
              </div>
              <!-- <div class="w-[2px] h-full bg-sprotText"></div> -->
              {#if active}
              <div class="px-1">
                  100%
              </div>
              {/if}
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

  {#if editMode}
  <div class="border-b h-0 border-sprotBgLight60"></div>
    <div class="py-2 bg-sprotBgLight20">
        <!-- <div class="h-8 flex items-center justify-center gap-3 border relative px-2 after:content-center after:h-full after:block after:absolute after:top-0 after:left-0 after:bg-sprotText after:z-20">
            <dic class="h-6 rounded-none border">
                <div class="h-full flex items-center">
                    <h2 class="bg-black rounded-md px-2 h-5 flex items-center">Color</h2>
                    <h2 class="border-transparent border-l-sprotBgLight60 px-2">Outline</h2>
                </div>
            </dic>
        </div>
        <div class="border-b h-0 border-sprotBgLight60"></div> -->
        <div class="flex px-2 gap-2">
            <div class="px-2xx">
                <h3>Thickness</h3>
                <select name="" id="" class="bg-sprotBgLight20 w-20 h-6 border border-transparent hover:border-sprotBgLight60">
                    <option value="">1px</option>
                    <option value="">2px</option>
                    <option value="">3px</option>
                </select>
            </div>
            <div class="px-dd">
                <h3>Type</h3>
                <select name="" id="" class="bg-sprotBgLight20 h-6 w-20 border border-transparent hover:border-sprotBgLight60">
                    <option value="">Solid</option>
                    <option value="">Dashed</option>
                    <option value="">Custom</option>
                </select>
            </div>
        </div>
        <!-- <div class="flex items-center min-h-8 gap-2 p-2">
            <div class="flex gap-1 items-center">
                <div>
                    <div class="w-9 h-5 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    <h2 class="font-bold text-sprotBgLight60">Dash</h2>
                </div>
                <div>
                    <div class="w-9 h-5 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    <h2 class="font-bold text-sprotBgLight60">Gap</h2>
                </div>
            </div>
            <div class="flex gap-1 items-center">
                <div>
                    <div class="w-9 h-5 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    <h2 class="font-bold text-sprotBgLight60">Dash</h2>
                </div>
                <div>
                    <div class="w-9 h-5 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    <h2 class="font-bold text-sprotBgLight60">Gap</h2>
                </div>
            </div>
        </div> -->
        <!-- <div class="border-b h-2 border-sprotBgLight60"></div>
        <div class="p-2 flex flex-col gap-2"> -->
            <!-- <div class="flex items-center justify-between">
                <h2>Cap</h2>
                <div class="flex gap-1 items-center">
                    <div>
                        <div class="w-6 h-6 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    </div>
                    <div>
                        <div class="w-6 h-6 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    </div>
                    <div>
                        <div class="w-6 h-6 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="flex items-center justify-between">
                <h2>Join</h2>
                <div class="flex gap-1 items-center">
                    <div>
                        <div class="w-6 h-6 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    </div>
                    <div>
                        <div class="w-6 h-6 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    </div>
                    <div>
                        <div class="w-6 h-6 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                    </div>
                </div>
            </div> -->
        <!-- </div> -->
        <!-- <div class="border-b h-0 border-sprotBgLight60"></div> -->
        <div class="px-2">
            <div class="flex gap-1 items-center">
                <div class="flex flex-1">
                    <div class="flex items-center justify-between h-8 pxl-2">
                        <!-- <h3>Arrow Start</h3> -->
                        <select name="" id="" class="bg-sprotBgLight20 w-20 h-6 border border-transparent hover:border-sprotBgLight60">
                            <option value="">ArrowL1</option>
                            <option value="">ArrowL2</option>
                            <option value="">ArrowL2</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between h-8 px-2">
                        <!-- <h3>Arrow End</h3> -->
                        <select name="" id="" class="bg-sprotBgLight20 w-20 h-6 border border-transparent hover:border-sprotBgLight60">
                            <option value="">ArrowR1</option>
                            <option value="">ArrowR2</option>
                            <option value="">ArrowR3</option>
                        </select>
                    </div>
                </div>
                <div class="h-full flex items-center justify-center">
                    <div class="w-6 h-6 rounded-[4px] border border-sprotBgLight60 bg-black"></div>
                </div>
            </div>
        </div>
        <div class="border-b h-0 border-sprotBgLight60"></div>
        <div class="pt-2 px-2 grid grid-cols-3 gap-1">
            <div></div>
            <RaisedButton on:click={onCancel}>Cancel</RaisedButton>
            <RaisedButton on:click={onCommit}>Commit</RaisedButton>
        </div>
    </div>
  {/if}
  {/if}
  
  
  <!-- <style lang="postcss">
      .accordion-list li:first-child {
          @apply rounded-tl-[4px] rounded-tr-[4px];
      }
  
      .accordion-list li:last-child{
          @apply rounded-bl-[4px] rounded-br-[4px];
      }
  </style> -->