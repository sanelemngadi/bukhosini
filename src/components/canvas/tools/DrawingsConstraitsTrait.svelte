<script>

  import Choice from "$components/ui/Choice.svelte";

</script>
<div class="h-full flex items-center gap-2">
    <Choice>Fixed Size</Choice>
    <div class="flex gap-1 items-center h-full">
      <label for="center" class="flex items-center h-full gap-1">
        <input type="checkbox" name="" id="center">
        From Center
      </label>
    </div>
</div>