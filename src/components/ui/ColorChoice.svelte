<script lang="ts">
  import DullButton from "$components/general/DullButton.svelte";
  import RaisedButton from "$components/general/RaisedButton.svelte";
  import DropDown from "$components/icons/DropDown.svelte";
  import { getElementScreenCoordinates } from "$lib/helper/point";
  import { onMount } from "svelte";

  export let searchable: boolean = false;
  let dialog: HTMLDialogElement;
  let container: HTMLElement;
  let active: boolean = false;

  onMount(() => {
    window.addEventListener("mouseup", onCloseialog);
  });

  $: {
    if (searchable) {
    }
  }

  const onShowDialog = () => {
    if (dialog && container) {
      let position = getElementScreenCoordinates(container);

      let width = bigger(container.offsetWidth, container.clientWidth);

      dialog.style.left = position.x + "px";
      dialog.style.top = position.y + container.offsetHeight + "px";
      dialog.style.maxWidth = width + 1 + "px";
      dialog.style.minWidth = width + 1 + "px";
      dialog.style.width = width + 1 + "px";

      if (active) {
        dialog.close();
        active = false;
      } else {
        dialog.show();
        active = true;
      }
    }
  };

  const bigger = (a: number, b: number): number => {
    return Math.max(a, b);
  };

  const onCloseialog = () => {
    if (dialog && container) {
      dialog.close();
      active = false;
    }
  };
</script>

<DullButton
  className="sprot-layers relative borderm flex items-center justify-center border-sprotBg1 group bg-sprotBgm hover:bg-sprotBg h-[19.5px] overflow-hidden group min-w-24 w-24 max-w-24 text-ellipsis"
  on:click={onShowDialog}
>
  <div class="w-full h-full flex items-center" bind:this={container}>
    <slot />

    <div
      id=""
      class="flex items-center uppercase h-full outline-none rounded-[2px] bg-transparent px-1 pr-6"
    >
      By Layer
    </div>

    <span
      class="w-4 h-full absolute right-0 top-0 inline-flex items-center justify-center hover:bg-sprotBgLight60 {active ??
        'bg-sprotBgLight60'}"
    >
      <DropDown color="white" size={3.5} />
    </span>
  </div>
</DullButton>

<dialog bind:this={dialog} class="z-40 bg-sprotBg border border-sprotBg1">
  <div class="text-sprotText">
    <ul class="flex flex-col w-full overflow-hidden">
      <li
        class="inline-flex gap-1 items-center hover:bg-sprotPrimary p-1 h-5 max-w-full"
      >
        <div class="w-3 h-3 bg-transparent"></div>
        <div>
          <p>By Layer</p>
        </div>
      </li>
      <li class="border-b border-sprotBgLight20"></li>
      <li
        class="inline-flex gap-1 items-center hover:bg-sprotPrimary p-1 h-5 max-w-full"
      >
        <div class="w-3 h-3 bg-cyan-300"></div>
        <div>
          <p>Cyan</p>
        </div>
      </li>
      <li class="flex gap-1 items-center hover:bg-sprotPrimary p-1 h-5">
        <div class="w-3 h-3 bg-blue-300"></div>
        <div>
          <p>Light Blue</p>
        </div>
      </li>
      <li class="flex gap-1 items-center hover:bg-sprotPrimary p-1 h-5">
        <div class="w-3 h-3 bg-blue-600"></div>
        <div>
          <p>Medium Blue</p>
        </div>
      </li>
      <li class="flex gap-1 items-center hover:bg-sprotPrimary p-1 h-5">
        <div class="w-3 h-3 bg-red-600"></div>
        <div>
          <p>Light Red</p>
        </div>
      </li>
      <li class="border-b border-sprotBgLight20"></li>
      <li
        class="inline-flex gap-1 items-center hover:bg-sprotPrimary p-1 h-5 max-w-full"
      >
        <div class="w-3 h-3 bg-transparent"></div>
        <div>
          <p>Custom..</p>
        </div>
      </li>
    </ul>
  </div>
</dialog>
