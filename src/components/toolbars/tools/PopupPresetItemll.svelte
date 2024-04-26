<script lang="ts">
    import { setStatus } from "$lib/stores/status";
    import type { SprotPresetInterface } from "$wasm/sprot_app";
    import type { ComponentType } from "svelte";
  
    //   export let groupName: string;
      export let preset: SprotPresetInterface;
      export let icon: ComponentType;
      export let active: boolean = false;
  
      let disabled: boolean = false;
  
      const onMouseEnterItem = (item: SprotPresetInterface) => {
          setStatus(item.get_name() + " Preset: action");
      }
</script>
  
<button 
    on:mouseup
      on:mouseenter={() => onMouseEnterItem(preset)}
        class="btn {active ? "bg-sprotPrimary" : "hover:bg-sprotBgLight20"}  {disabled ? "text-[gray]" : "text-sprotText"}">
    <span class="inline-flex items-center gap-2 flex-1 pointer-events-none">
        <svelte:component this={icon} size={14} color="white" />
        <span>{preset.get_name()}</span>
    </span>
    <span class="inline-block pointer-events-none">"I"</span>
</button>

<style lang="postcss">
    .btn {
        @apply flex w-full h-8 font-normal items-center justify-between gap-4 px-2 text-[12px];
    }
</style>