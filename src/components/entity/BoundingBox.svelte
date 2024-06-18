<script lang="ts">
  import EditableInput from "$components/general/EditableInput.svelte";
  import { SnapPerpendicular } from "$components/icons/snapping";
  // import { SelectionOption, NoSelection } from "$lib/utils";
  import { SprotEntity } from "$wasm/sprot_app";
  import { onMount } from "svelte";
  import { getCurrentSelection } from "$lib/stores";
  import { NO_SELECTION, type SprotTSSelection } from "$lib/types";

  // export let selection: SelectionOption<SprotEntity> = NoSelection;
  let selection: SprotTSSelection = NO_SELECTION;

  export let selectedEntity: SprotEntity | null = null;

  const init = () => {
    getCurrentSelection((selected) => {
      selection = selected;

      if (selected.is_group || selected.is_none) {
        onClearSelection();
      } else {
        onSetSelection(selected.entities[0]);
      }
    });
  };

  const onClearSelection = () => {
    selectedEntity = null;
  };

  const onSetSelection = (entity: SprotEntity) => {
    selectedEntity = entity;
  };

  const toFixed = (x: number): string => {
    return x.toFixed(2);
  };

  onMount(init);
</script>

<div class="grid grid-cols-2 gap-2">
  <EditableInput
    initValue={selectedEntity ? toFixed(selection.rect.pt.x) : "mixed"}
    >X</EditableInput
  >
  <EditableInput
    initValue={selectedEntity ? toFixed(selection.rect.pt.y) : "mixed"}
    >Y</EditableInput
  >
  <EditableInput
    initValue={selectedEntity ? toFixed(selection.rect.sz.w) : "mixed"}
    >W</EditableInput
  >
  <EditableInput
    initValue={selectedEntity ? toFixed(selection.rect.sz.h) : "mixed"}
    >H</EditableInput
  >
  <EditableInput initValue="00.00.00"
    ><SnapPerpendicular size={16} color="white" /></EditableInput
  >
</div>
