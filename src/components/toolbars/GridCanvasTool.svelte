<script lang="ts">
  import DullButton from "$components/general/DullButton.svelte";
  import { DropdownOutline } from "$components/icons";
  import {
    createEventDispatcher,
    onMount,
    type ComponentType,
    onDestroy,
  } from "svelte";
  import { getElementScreenCoordinates } from "$lib/helper/point";
  import DropDown from "$components/icons/DropDown.svelte";
  import PopupMenuItem from "./tools/PopupMenuItem.svelte";
  import type { SprotListButton } from "$lib/types";
  // import { ellipses } from "$lib/helper/ellipsis";

  export let tools: SprotListButton[] = [];
  export let name: string;
  export let featured: boolean = false;
  export let activeGroup: boolean = false;
  export let className: string = "";
  export let maxWidth: number | null = null;
  export let defaultTool: SprotListButton | null = null;
  export let interfaceIcon: ComponentType | null = null;
  export let toolType: "RADIO" | "CHECK" | "BUTTON" = "RADIO";
  export let bordered: boolean = false;
  export let disabled: boolean = false;

  if (toolType) {
  }

  let container: HTMLElement | undefined = undefined;
  let dialog: HTMLDialogElement | undefined = undefined;

  let activeTool: SprotListButton | null;
  let active: boolean = false;

  const dispatch = createEventDispatcher();

  const init = () => {
    updateActiveTool();

    window.addEventListener("mousedown", onCloseDialog);

    return () => {
      window.removeEventListener("mousedown", onCloseDialog);
    };
  };

  onMount(init);
  onDestroy(() => {
    if (dialog) {
      dialog.close();
    }
  });

  const updateActiveTool = () => {
    activeTool =
      tools.length > 0
        ? tools.find((tool) => tool.active) || tools[0]
        : defaultTool
          ? defaultTool
          : null;
  };

  const onCloseDialog = (e: MouseEvent) => {
    let target = e.target as HTMLElement | null;
    if (!container || !activeTool || !dialog || !target) {
      return;
    }

    if (!(dialog.contains(target) || dialog == target)) {
      closeDialog();
    }
  };

  const onPopup = () => {
    showDialog();
  };

  const showDialog = () => {
    if (!container || !activeTool || !dialog) {
      return;
    }
    const toggleClass = "sprot-active";

    if (active || document.body.classList.contains(toggleClass)) {
      closeDialog();

      return;
    }

    let position = getElementScreenCoordinates(container);
    let windowWidth = window.innerWidth;

    const minX = Math.max(16, position.x);

    dialog.style.left =
      position.x + dialog.offsetWidth + 200 > windowWidth
        ? windowWidth - dialog.offsetWidth - 200 + "px"
        : position.x + "px";
    dialog.style.top = position.y + container.offsetHeight + "px";
    document.body.classList.add(toggleClass);

    setTimeout(() => {
      if (dialog) {
        dialog.show();
        active = true;
      }
    }, 200);
  };

  const closeDialog = () => {
    if (!container || !activeTool || !dialog) {
      return;
    }
    const toggleClass = "sprot-active";
    document.body.classList.remove(toggleClass);
    dialog.close();
    active = false;
  };

  const onSelection = (id: number | null) => {
    if (typeof id === "number") {
      dispatch("selection", id);
      closeDialog();
    }
  };

  $: if (tools.length > 0) {
    updateActiveTool();
  }
</script>

{#if activeTool}
  {#if featured}
    <div
      class="border flex border-transparent flex-1 {active || activeGroup
        ? 'bg-sprotBg'
        : 'hover:border-sprotBg1'} {className} {disabled && 'sprot-disabled'}"
      bind:this={container}
    >
      <DullButton
        className="flex-1 sprot-center hover:bg-sprotBg {activeGroup &&
          'bg-sprotBg1'}"
        on:click={() => onSelection(activeTool?.id || null)}
      >
        {#if interfaceIcon}
          <svelte:component this={interfaceIcon} size={12} {disabled} />
        {:else}
          <svelte:component this={activeTool.icon} size={12} {disabled} />
        {/if}
      </DullButton>
      <DullButton
        className="flex w-3 sprot-center hover:bg-sprotBg"
        on:click={onPopup}
      >
        <DropDown size={4} {disabled} />
      </DullButton>
    </div>
  {:else}
    <div
      class="flex-col h-fit overflow-hidden group border {bordered
        ? 'border-sprotPrimary25'
        : 'border-transparent'} {active || activeGroup
        ? 'bg-sprotBg'
        : 'hover:border-sprotBg1'} {disabled && 'sprot-disabled'}"
      bind:this={container}
    >
      <div class="hover:bg-sprotBg">
        <DullButton
          className="p-2 w-full h-full flex sprot-center"
          on:click={() => onSelection(activeTool?.id || null)}
        >
          {#if interfaceIcon}
            <svelte:component this={interfaceIcon} size={14} {disabled} />
          {:else}
            <svelte:component this={activeTool.icon} size={14} {disabled} />
          {/if}
        </DullButton>
      </div>
      <DullButton
        className="h-6 w-full border-t border-transparent flex-1 flex items-center p-1 {active ||
        activeGroup
          ? 'bg-sprotBg'
          : 'hover:bg-sprotBg group-hover:border-sprotBg1'}"
        on:click={onPopup}
      >
        <p
          class="text-center overflow-hidden text-ellipsisll"
          style={maxWidth
            ? `min-width: ${maxWidth}ch; max-width: ${maxWidth}ch; width: ${maxWidth}ch;`
            : ""}
        >
          {name}
          <!-- {maxWidth ? ellipses(name, maxWidth, "CENTER") : name} -->
        </p>
        <div class="flex w-3">
          <span
            class="w-full h-full sprot-center {tools.length <= 0 &&
              'hidden opacity-0 invisible'}"
          >
            <DropdownOutline size={12} {disabled} />
          </span>
        </div>
      </DullButton>
    </div>
  {/if}

  <dialog
    bind:this={dialog}
    class="backdrop:bg-transparent border border-sprotBg1 z-40 {tools.length <=
      0 && 'hidden opacity-0 invisible'}"
  >
    <div class="min-w-28 p-[2px] bg-sprotBgLight20">
      <ul class="flex flex-col gap-0 list-none">
        {#each tools as tool (tool.id)}
          <li>
            <PopupMenuItem
              active={tool.active}
              icon={tool.icon}
              id={tool.id.toString()}
              name={tool.name}
              on:click={() => onSelection(tool.id)}
            />
          </li>
        {/each}
      </ul>
    </div>
  </dialog>
{/if}

<style lang="postcss">
  dialog {
    box-shadow: 4px 4px 0.5em rgba(0, 0, 0, 0.25);
  }

  .sprot-disabled {
    @apply pointer-events-none text-sprotLightBorder;
  }
</style>
