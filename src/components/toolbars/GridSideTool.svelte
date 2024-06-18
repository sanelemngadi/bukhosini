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
  import BitmapButton from "$components/general/BitmapButton.svelte";
  // import { ellipses } from "$lib/helper/ellipsis";

  export let tools: SprotListButton[] = [];
  // export let name: string;
  // export let featured: boolean = false;
  let activeGroup: boolean = false;
  // export let className: string = "";
  // export let maxWidth: number | null = null;
  export let defaultTool: SprotListButton | null = null;
  // export let interfaceIcon: ComponentType | null = null;
  export let toolType: "RADIO" | "CHECK" | "BUTTON" = "RADIO";
  // export let bordered: boolean = false;
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
      // activeGroup = false;
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

    dialog.style.left = container.offsetLeft + "px";
    // dialog.style.left =
    //   position.x + dialog.offsetWidth + 200 > windowWidth
    //     ? windowWidth - dialog.offsetWidth - 200 + "px"
    //     : position.x + "px";
    dialog.style.top = container.offsetTop + container.offsetHeight + "px";
    // dialog.style.top = position.y + container.offsetHeight + "px";
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
  <div
    class="flex items-center h-full text-[8px] text-sprotText bg-sprotBgLight20"
  >
    <div
      class="flex h-7 overflow-hidden items-center border border-transparent hover:border-sprotBg1 {disabled &&
        'pointer-events-none'} {active && 'border-sprotBg1'}"
      bind:this={container}
    >
      <div class="h-7 w-8">
        <BitmapButton
          overflow={false}
          className="z-10 relative inline-flex w-full h-7 items-center justify-center border-0 {activeTool.active &&
            !disabled &&
            'border-sprotBg1 bg-sprotBg1 hover:bg-sprotBg'}"
          {disabled}
          on:click={() => {
            if (activeTool && !activeTool.active) {
              onSelection(activeTool.id);
            }
          }}
        >
          <svelte:component
            this={activeTool.icon}
            color="white"
            size={12}
            {disabled}
          />
        </BitmapButton>
      </div>

      <div class="w-3 h-7 flex items-center justify-center">
        <BitmapButton
          className="w-full h-full flex items-center justify-center borderb {!active &&
            !disabled &&
            activeTool.active &&
            'border-sprotPrimary bg-sprotBg1 hover:bg-sprotBg'} {active &&
            'bg-sprotBg1'}"
          {disabled}
          on:click={() => showDialog()}
        >
          <DropdownOutline size={12} {disabled} />
        </BitmapButton>
      </div>
    </div>
  </div>

  <dialog
    bind:this={dialog}
    class="backdrop:bg-transparent border border-sprotBg1 z-40 {(tools.length <=
      0 ||
      disabled) &&
      'hidden opacity-0 invisible'}"
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
