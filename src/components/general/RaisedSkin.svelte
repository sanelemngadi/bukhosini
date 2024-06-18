<script lang="ts">
    export let className: string = ""
</script>

<div class="raised border-0 outline-0 text-sprotText select-none text-[11.5px] text-left h-6 px-2 rounded-sm {className}"><slot /></div>

<style>
    .raised {
        --bg: #292929;
        --action-bg: linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.11) 100%);
        --action-bg-hover: linear-gradient(180deg, rgba(255,255,255,0.19) 0%, rgba(255,255,255,0.17) 100%);
        --border-color-1: rgba(255,255,255,0.13);
        /* --text-active: #e8e8e8; */
        --box-shadows: 0px 0.5px 1px rgba(0,0,0,0.8),
                        inset 0px 0.5px 0.5px rgba(255,255,255,0.12);


        outline: 0px;
        /* cursor: default; */
        border-color: var(--border-color-1);
        /* user-select: none; */
        color: var(--text-active);
        background: var(--action-bg);
        /* border-width: 0px; */
        /* border-style: solid; */
        /* font-size: 11.5px; */
        box-shadow: var(--box-shadows);
        /* text-align: left; */
    }
</style>