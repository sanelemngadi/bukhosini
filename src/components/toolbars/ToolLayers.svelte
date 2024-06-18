<script lang="ts">
  import LayerChoice from "$components/ui/LayerChoice.svelte";
  import { getActionDocument, getAppViewController } from "$lib/stores";
  import type { SprotAppViewController } from "$wasm/sprot_app";
  import { onMount } from "svelte";

  export let disabled = false;

  let appState: SprotAppViewController | null = null;
  let layers: { id: number; active: boolean; label: string }[] = [];

  onMount(() => {
    getAppViewController((app) => (appState = app));

    getActionDocument((action) => {
      layers =
        action
          .getDocument()
          ?.get_doc_layers()
          .map((layer) => {
            return {
              active: layer.is_target(),
              id: layer.id,
              label: layer.get_name(),
            };
          }) || [];
    });
  });

  const onSelection = (layerId: number) => {
    if (appState && appState.set_active_layer(layerId)) {
      let state = appState.get_draw_state();
      appState.set_draw_state(state.set_layer(layerId));
    }
  };
</script>

<LayerChoice
  choiceList={layers}
  {disabled}
  on:selection={(e) => onSelection(e.detail)}
/>
