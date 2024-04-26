<script lang="ts">
    export let className: string = "";
    export let style: string = "";
    export let self: HTMLElement | undefined = undefined;
</script>

<div class="sprot px-2 {className}" {style} bind:this={self}>
    <slot />
</div>

<style>
    .sprot {
        --bg: #292929;
        --action-bg: linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.11) 100%);
        --action-bg-hover: linear-gradient(180deg, rgba(255,255,255,0.19) 0%, rgba(255,255,255,0.17) 100%);
        --border-color-1: rgba(255,255,255,0.13);
        --text-active: #e8e8e8;
        --box-shadows: 0px 0.5px 1px rgba(0,0,0,0.8),
                        inset 0px 0.5px 0.5px rgba(255,255,255,0.12);
        --font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg);
        font-family: var(--font-family);
        outline: 0px;
        /* width: 90px; */
        cursor: default;
        border-top-color: var(--border-color-1);
        border-right-color: var(--border-color-1);
        border-bottom-color: var(--border-color-1);
        border-left-color: var(--border-color-1);
        user-select: none;
        color: var(--text-active);
        border-radius: 2px;
        background: var(--action-bg);
        border-width: 0px;
        border-style: solid;
        font-family: inherit;
        font-size: 11.5px;
        box-shadow: var(--box-shadows);
        /* height: 24px; */
        /* padding: 0px 8px; */
        /* min-width: 90px; */
        text-align: left;
    }
</style>