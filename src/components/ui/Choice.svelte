<script lang="ts">
  import DullButton from "$components/general/DullButton.svelte";
  import RaisedButton from "$components/general/RaisedButton.svelte";
  import DropDown from "$components/icons/DropDown.svelte";
  import { ellipses } from "$lib/helper/ellipsis";
  import { getElementScreenCoordinates } from "$lib/helper/point";
  import { createEventDispatcher, onMount } from "svelte";

  export let searchable: boolean = false;
  export let disabled: boolean = false;

  let dialog: HTMLDialogElement;
  let container: HTMLElement;
  let active: boolean = false;
  const dispatch = createEventDispatcher();

  export let choiceList: { id: number; active: boolean; label: string }[] = [];

  let activeChoice: { id: number; active: boolean; label: string } | null;

  onMount(() => {
    window.addEventListener("mouseup", onCloseialog);

    activeChoice = choiceList.find((layer) => layer.active) || null;
  });

  $: {
    if (searchable) {
    }

    if (choiceList.length > 0) {
      if (choiceList.length === 1) {
        choiceList[0].active = true;
        activeChoice = choiceList[0];
      }
      activeChoice = choiceList.find((layer) => layer.active) || null;
    }
  }

  const onSelection = (id: number) => {
    choiceList = choiceList.map((choice) => {
      choice.active = choice.id === id;
      if (choice.active) {
        dispatch("selection", id);
      }
      return choice;
    });
  };

  const onShowDialog = () => {
    if (dialog && container) {
      let position = getElementScreenCoordinates(container);

      let maxHeight = 384;
      let width = bigger(container.offsetWidth, container.clientWidth);

      const totalHeight = choiceList.length * 20;
      const containerPosition = getElementScreenCoordinates(container);
      const windowHeight = window.innerHeight;
      const containerHeight = bigger(
        container.offsetHeight,
        container.clientHeight
      );

      dialog.style.left = position.x + "px";
      dialog.style.top =
        position.y +
        bigger(container.offsetHeight, container.clientHeight) +
        3 +
        "px";
      dialog.style.maxWidth = width + 1 + "px";
      dialog.style.minWidth = width + 1 + "px";
      dialog.style.width = width + 1 + "px";

      if (
        containerPosition.y + containerHeight + totalHeight + 12 >
        windowHeight
      ) {
        const h = maxHeight > totalHeight ? totalHeight : maxHeight;
        let y = windowHeight - h - containerHeight - 4;
        dialog.style.top = y + "px";
      }

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
  className="sprot-layers relative border flex items-center justify-center border-sprotBg1 group bg-sprotBg hover:bg-sprotBg1 h-[19.5px] overflow-hidden group min-w-24 w-24 max-w-24 {active &&
    'bg-sprotBg1'} {disabled &&
    'bg-sprotBgLight20 text-sprotBgLight60 pointer-events-none'}"
  on:click={onShowDialog}
>
  <div class="w-full h-full" bind:this={container}>
    <div
      id=""
      class="flex items-center uppercase h-full outline-none rounded-[2px] bg-transparent px-1 pr-6"
    >
      {#if activeChoice}
        {ellipses(activeChoice.label, 10)}
      {/if}
    </div>

    <span
      class="w-3 h-full absolute right-0 top-0 inline-flex items-center justify-center hover:bg-sprotBgLight60 {active &&
        'bg-sprotBgLight60'}"
    >
      <DropDown color="white" size={4} {disabled} />
    </span>
  </div>
</DullButton>

<dialog
  bind:this={dialog}
  class="z-40 bg-sprotBg border border-sprotBg1 max-h-96 overflow-auto {choiceList.length <=
    0 && 'invisible opacity-0 hidden'} {disabled &&
    'hidden invisible opacity-0'}"
>
  <div>
    <ul class="flex flex-col w-full overflow-hidden">
      {#each choiceList as choice (choice.id)}
        <DullButton
          className="inline-flex gap-1 items-center border border-transparent hover:bg-sprotPrimary25 hover:border-sprotPrimary p-1 h-5 max-w-full"
          on:click={() => onSelection(choice.id)}
        >
          <div class="flex items-center h-full gap-1">
            <span
              class="w-1 h-1 bg-sprotPrimary {!choice.active &&
                'invisible opacity-0'}"
            ></span>
            <p>{ellipses(choice.label, 12, "CENTER")}</p>
          </div>
        </DullButton>
      {/each}
    </ul>
  </div>
</dialog>
