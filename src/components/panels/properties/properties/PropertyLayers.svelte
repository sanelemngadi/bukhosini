<script lang="ts">
  import DullButton from "$components/general/DullButton.svelte";
  import { DropdownOutline } from "$components/icons";
  import LayerIcon from "$components/icons/LayerIcon.svelte";

  let dialog: HTMLDialogElement;

  const onSwitchLayers = () => {
    if (!dialog) {
      return;
    }

    dialog.show();
  };
</script>

<div
  class="w-full h-8 rounded-[4px] border border-sprotLightBorder bg-black mt-2 px-2 flex items-center gap-2"
>
  <div
    class="bg-sprotBgLight20l rounded-[4px] w-6 h-6 flex items-center justify-center"
  >
    <LayerIcon color="white" />
  </div>
  <div class="bg-sprotBgLight20 rounded-[4px] w-32 h-6 px-2 flex items-center">
    Buidlings
  </div>
  <DullButton
    on:click={onSwitchLayers}
    className="w-6 h-6 hover:bg-sprotBgLight60 flex items-center justify-center ml-auto rounded-[4px] active:bg-sprotBgLight20"
  >
    <DropdownOutline color="white" />
  </DullButton>
</div>

<dialog bind:this={dialog} class="w-full min-h-36 z-10">hello</dialog>
