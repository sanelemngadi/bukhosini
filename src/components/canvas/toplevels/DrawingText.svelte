<script lang="ts">
    import { getAppViewController, setActionTool } from "$lib/stores";
    import type { SprotCanvasTool } from "$lib/tools/base";
    import { SprotActions } from "$lib/types";
    import { SprotPoint, type SprotAppViewController, SprotSize } from "$wasm/sprot_app";
    import { onMount } from "svelte";
    // export let tool: SprotTool;

    export let tool: SprotCanvasTool;
    let point: { x: number, y: number } = { x: 20, y: 200 };
    let textarea: HTMLTextAreaElement | undefined = undefined;
    let text: string = "";
    let textMoving: boolean = true;
    let wrapLines: number = 1;
    let writingFocused: boolean = false;

    let appState: SprotAppViewController | null = null;

    onMount(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);

        getAppViewController(app => appState = app);


        textarea?.addEventListener("focus", ()=> {
          writingFocused = true;
        });

        textarea?.addEventListener("blur", () => writingFocused = false);

        window.addEventListener("keydown", (e: KeyboardEvent) => {
          if(e.key.toLowerCase() == "enter" && writingFocused) {
            wrapLines += 1;

            if(textarea) {
              textarea.rows = wrapLines;
            }
          }
        })
        

        return () => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mousedown", onMouseDown);
        } 
    });
    
    const onMouseMove = (e: MouseEvent) => {

      if(textMoving) {
        const { clientX, clientY } = e;
        point = { x: clientX, y: clientY };
      }

    }

    const onMouseDown = () => {
        if(textarea) {
            // textarea.focus()
            textMoving = false;
            console.log("area: ", textarea);
            // textarea.;
        }

        
    }

    const onChange = (e: any) => {
      const target = e.target as HTMLTextAreaElement | null;
      if(!target) { return; }

      const content = target.value;

      if(appState) {
        let pt = new SprotPoint(target.offsetLeft, target.offsetTop);
        appState.add_text_entity(pt, new SprotSize(200, 50), content);
        text = "";
        textarea?.remove();
        textMoving = false;
        setActionTool(appState, SprotActions.ToolSelection);
      }
    }  
  </script>

{#if tool}
  <textarea 
    bind:this={textarea}
    bind:value={text}
    on:blur={onChange}
    class="pointer-events-auto fixed left-0 top-0 m-0 resize-none p-0 bg-transparent focus:outline-none text-sprotText border-none whitespace-pre overflow-hidden"
    style="left: {point.x}px; top: {point.y}px; background: transparent;" 
    id="" />
{/if}