<script lang="ts">
  import RaisedButton from "$components/general/RaisedButton.svelte";
  import NewFileIcon from "$components/icons/toolbars/NewFileIcon.svelte";
  import { getAppViewController } from "$lib/stores";
  import { SprotDocument, type SprotAppViewController } from "$wasm/sprot_app";
  import { onMount } from "svelte";

  let appState: SprotAppViewController | null = null;

  const init = () => {
    getAppViewController((app) => (appState = app));
  };

  onMount(init);

  const onAddNewDocument = () => {
    appState?.open_document(new SprotDocument("This is new doc", -1));
  };
</script>

<div class="h-full p-11 w-full">
  <div class="pb-20">
    <RaisedButton on:click={onAddNewDocument} className="min-w-28 min-h-28">
      <div class="pointer-events-none h-full flex flex-col">
        <div class="sprot-center flex-1">
          <NewFileIcon />
        </div>
        <div class="sprot-center flex-1">Add New</div>
      </div>
    </RaisedButton>
  </div>
</div>
