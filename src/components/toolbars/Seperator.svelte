<script lang="ts">
  export let vertical: boolean = false;
</script>

<div class="relative"></div>

<style lang="postcss">
  div {
    width: 21px;
    height: 100%;
  }

  div::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 55%;
    width: 0px;
    /* background-color: black; */
    /* border: 0; */
    /* border-right: 1px solid white; */
    @apply border-r border-sprotLightBorder;
  }
</style>
