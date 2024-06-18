<script lang="ts">
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import {
    Constraints,
    DropdownOutline,
    Eye,
    Trash,
    Zoom,
  } from "$components/icons";
  // import NewFile from "$components/icons/NewFile.svelte";
  import { SprotLayer, type SprotDocument } from "$wasm/sprot_app";
  import { getActionDocument } from "$lib/stores";
  import { onMount } from "svelte";
  import { NewFileIcon } from "$components/icons/toolbars";
  import DullButton from "$components/general/DullButton.svelte";
  import SearchLayer from "../layers/SearchLayer.svelte";
  import type { SprotClientDocument } from "$lib/application/document";

  let document: SprotClientDocument | null;
  let layer: SprotLayer = new SprotLayer("sprot", -20);
  let layers: SprotLayer[] = [];

  onMount(() => {
    getActionDocument((action) => {
      document = action;
      layers = action.getDocument()?.get_doc_layers() || [];

      const target = layers.find((l) => l.is_target());

      if (target) {
        layer = target;
      }
    });
  });

  const onActivateLayerInput = (e: MouseEvent) => {
    e.preventDefault();

    console.log("double clicled input");

    const target = e.target as HTMLInputElement | null;

    if (target) {
      target.disabled = false;
      target.focus();
    }
  };
</script>

<div class="border h-full flex flex-col overflow-hidden border-sprotBg">
  <div class="pt-2 flex-1">
    <div class="borderl border-sprotBgLight60">
      {#if document}
        <ul class="flex flex-col gap-[2px]">
          {#each layers as lyr}
            <li
              class="h-6 border border-transparent bg-sprotBg hover:border-sprotPrimary flex items-center group"
            >
              <DullButton className="w-5 borderk h-full sprot-center">
                <span class="-rotate-90 w-full h-full sprot-center">
                  <DropdownOutline size={12} />
                </span>
              </DullButton>

              <DullButton className="w-5 borderl h-full sprot-center">
                <div class="flex gap-1 items-center h-4 cursor-pointer">
                  <div
                    class="flex border border-[{lyr.get_stroke_color()}] w-3 h-3 pointer-events-none"
                    style="background-color: {lyr.get_background()};"
                  ></div>
                </div>
              </DullButton>
              <input
                type="text"
                name={"layer-" + String(lyr.id)}
                id={String(lyr.id)}
                class="h-full px-1 disabled:bg-inherit flex-1 w-20"
                value={lyr.get_name()}
                disabled={true}
                on:click={onActivateLayerInput}
              />
              <DullButton
                className="w-5 borderk h-full sprot-center opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              >
                <Constraints size={12} />
                <!-- lock -->
              </DullButton>
              <DullButton
                className="w-5 borderk h-full sprot-center opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              >
                <Eye size={12} />
              </DullButton>
              <DullButton className="w-5 borderk h-full sprot-center">
                <div class="flex gap-1 items-center h-4 cursor-pointer">
                  <div
                    class="flex items-center justify-center border border-sprotBgLight60 pointer-events-none w-3 h-3 bg-sprotBg1 rounded-lg"
                    style="background-color: {lyr.current_target
                      ? 'blue'
                      : 'inherit'};"
                  >
                    <div
                      class="flex w-1 h-1 border bg-sprotBg1 rounded-lg"
                    ></div>
                  </div>
                </div>
              </DullButton>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>

  <div
    class="flex items-center gap-1 h-8 px-2 mt-auto border-t border-sprotBgLight60"
  >
    {#if document}
      <div>
        {layers.length}
        Surfaces
      </div>
    {/if}
    <BitmapButton className="h-6 w-6">
      <NewFileIcon color="white" size={14} />
    </BitmapButton>
    <BitmapButton className="h-6 w-6">
      <Trash color="white" size={14} />
    </BitmapButton>
    <BitmapButton className="h-6 w-6">Merge</BitmapButton>
    <BitmapButton className="h-6 w-6">Target</BitmapButton>
  </div>
</div>
