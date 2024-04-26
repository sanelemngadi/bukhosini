<script lang="ts">
    import BitmapButton from "$components/general/BitmapButton.svelte";
    import { DropdownOutline, Minus, Plus } from "$components/icons";
    import { createEventDispatcher, onMount } from "svelte";

    // export let direction: "vertical" | "horizontal" = "horizontal";
    let dispatch = createEventDispatcher();
  
    const btn = "w-4 flex border border-transparent hover:border-sprotPrimary hover:bg-sprotPrimary25 rounded-none hover:bg-sprotBg1 border-sprotBgLight60 h-[18px]";

    const disabled = "hover:bg-none";

    export let state: number = 0;
    export let increment: number = 1;
    export let min: number | undefined = undefined;
    export let max: number | undefined = undefined;
    export let full: boolean = false;

    let minRiched: boolean = false;
    let maxRiched: boolean = false;

    const onIncrementState = () => {
        if(max && state >= max) {
            maxRiched = true
            return;
        }

        if(maxRiched) {
            maxRiched = false;
        }

        state += increment;
        dispatch("increment", { state: state });
        dispatch("change", { state: state });
    }

    const onDecrementState = () => {
        if(min && state <= min) {
            minRiched = true;
            return;
        }

        if(minRiched) {
            minRiched = false;
        }

        state -= increment;
        dispatch("decrement", { state: state });
        dispatch("change", { state: state });
    }

    const onSetState = (e: any) => {
        let target = e.target as HTMLInputElement | null;

        if(target) {
            let v = parseFloat(target.value);

            if(!isNaN(v)) {

                state = v;
                dispatch("change", { state: state });

                // target.value = state + " px";
            }
        }
        
    }

    onMount(() => {
        if(min) {
            if (min && state <= min) {
                state = min;
            }
        }
    });

  </script>
  
  <div class="border-sprotBgLight60 border-t-0 flex">
      <span class="inline-flex items-center bg-sprotBgLight20 border border-sprotBgLight60">
          <BitmapButton 
            className={maxRiched ? btn : disabled}
            on:click={onDecrementState}>
            <Minus size={8} color={minRiched ? "blue" : "white"}/>
          </BitmapButton>
          <input 
            type="text" 
            class="px-1 bg-sprotBg focus:bg-sprotText focus:text-sprotBg text-sprotText border-x border-sprotBgLight60 h-[18px] text-[10px] focus:outline-none focus:border-sprotText hover:border-sprotPrimary {full ? "w-full" : "w-16"}" 
            name="" 
            value={String(state)} 
            on:input={onSetState}
            id="">
            <!-- <BitmapButton className={btn}>
              <span class="-rotate-90ll h-full w-full center"><DropdownOutline size={16} color="white"/></span>
            </BitmapButton> -->
            <BitmapButton 
                className={minRiched ? btn : disabled}
                on:click={onIncrementState}>
              <Plus size={8} color={maxRiched ? "red" : "white"} />
            </BitmapButton>
        </span>
  </div>
  