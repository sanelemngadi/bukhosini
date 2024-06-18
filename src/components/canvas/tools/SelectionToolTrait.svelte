<script lang="ts">
  import Choice from "$components/ui/Choice.svelte";
  // import { ellipses } from "$lib/helper/ellipsis";
  import type { SprotCanvasTool } from "$lib/tools/base";

  export let tool: SprotCanvasTool;

  $: if (tool) {
  }
</script>

<div class="flex items-center gap-2">
  <p class="pl-1">Select:</p>
  <Choice
    choiceList={[
      { active: true, id: 1, label: "Entities" },
      { active: false, id: 2, label: "Fixes" },
      { active: false, id: 3, label: "Compounds" },
      { active: false, id: 4, label: "Dimensions" },
    ]}
  ></Choice>
  <!-- <p class="pl-1">By:</p> -->
  <!-- <Choice
    choiceList={[
      { active: true, id: 1, label: "Layer" },
      { active: false, id: 2, label: "Color" },
      { active: false, id: 3, label: "Shape" }, // select rects only
    ]}
  ></Choice> -->
  <!-- <p class="pl-1">Shape:</p> -->
  <!-- <Choice
    choiceList={[
      { active: true, id: 1, label: "Rectangle" },
      { active: false, id: 2, label: "Line" },
      { active: false, id: 3, label: "Circle" }, // select rects only
    ]}
  ></Choice> -->

  <!-- <label for="box" class="flex items-center gap-2 px-2 h-[22px]">
    <input
      type="checkbox"
      name=""
      id="box"
      class="inline-flex items-center justify-center appearance-none border-2 border-sprotPrimary bg-sprotBg w-3 h-3 text-center hover:bg-sprotBg1 active:bg-sprotBg1"
    />
    Show bounding box
  </label> -->
</div>
