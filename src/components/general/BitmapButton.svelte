<script lang="ts">
  export let active: boolean = false;
  export let overflow: boolean = false;
  export let className: string = "";
  export let title: string | undefined = undefined;
  export let disabled: boolean = false;

  // this is where whe are going to implement the disabled functionality
</script>

<button
  class="h-5 w-6 {active && 'bg-sprotBg1'} {!disabled &&
    'active:bg-sprotBg1 border border-transparent hover:bg-sprotBg hover:border-sprotBg1'} {className}"
  {title}
  on:click
  on:mouseenter
  on:keydown|preventDefault
  {disabled}
>
  {#if overflow}
    <span class="absolute bottom-0 right-0">
      <svg
        width="5"
        height="4"
        viewBox="0 0 5 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.26667 4H0L4.26667 0V4Z" fill="white" />
      </svg>
    </span>
  {/if}
  <slot />
</button>

<style lang="postcss">
  button {
    @apply overflow-hidden whitespace-nowrap inline-flex relative items-center justify-center text-sprotText;
  }
</style>
