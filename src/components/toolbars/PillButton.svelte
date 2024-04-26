<script lang="ts">
    type Position = "last" | "first" | "inside";
    export let position: Position = "inside";
    export let pill: boolean = true;
    export let active: boolean = false;
    export let overflow: boolean = false;
</script>

<li class="h-full overflow-hidden flex items-center justify-center whitespace-nowrap {pill ? "w-12" : "h-7 w-9"} {position === "first" && "rounded-tl-[4px] rounded-bl-[4px]"} {position === "last" && "rounded-tr-[4px] rounded-br-[2px]"}">
    <button class="inline-flex w-full relative {pill ? "h-full" : "h-7 w-9 rounded-[2px]"} items-center justify-center text-sprotText {active && "bg-sprotPrimary"} hover:bg-sprotPrimary">

        {#if pill === false && overflow}
            <span class="absolute bottom-1 right-1">
                <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.26667 4H0L4.26667 0V4Z" fill="white"/>
                </svg>   
            </span>
        {/if}
      <slot />
    </button>
</li>