<script lang="ts">
    export let className: string = "";

    // this is where whe are going to implement the disabled functionality
</script>

<button 
    class="{className}"
    on:click
    on:mouseenter
    on:keydown|preventDefault>
  <slot />
</button>