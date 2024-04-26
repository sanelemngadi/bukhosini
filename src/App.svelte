<script lang="ts">
  import Canvas from "$components/canvas/Canvas.svelte";
  import { onMount } from "svelte";
  import { setAppViewController, setDocuments } from "$lib/stores";
  import Menubar from "$components/menus/Menubar.svelte";
  import init, { start } from "$wasm/sprot_app";
  import { SprotClientViewController } from "$lib/application/viewcontroller";
  import { SprotClientBinder } from "$lib/application/binder";
  import Tools from "$components/toolbars/Tools.svelte";
  import { getCurrentSelection } from "$lib/stores/action-selection";
  import Toplevels from "$components/toplevel/Toplevels.svelte";
  import StaticToolbars from "$components/toolbars/StaticToolbars.svelte";
  import VerticalTools from "$components/toolbars/VerticalTools.svelte";
  import PanelsNotebook from "$components/panels/PanelsNotebook.svelte";
  import DrawingControl from "$components/canvas/DrawingControl.svelte";
  import Gap from "$components/general/Gap.svelte";

  // let targetTool: SprotCanvasTool | null = null;
  // let panelsOpen: boolean = false;
  let container: HTMLElement;

  // export let data: string;

  onMount(() => {
    onResize();

    // console.log("data is: ", data);

    init().then(() => {
      let binder = new SprotClientBinder();
      let client = new SprotClientViewController(binder);
      const app = start(client);
      setDocuments(app.get_documents());

      getCurrentSelection(selection => {console.log("selection: ", selection); });
      
      setAppViewController(app);
    })

    document.addEventListener("resize", onResize);
  });


  const onResize = () => {
    if(container) {
      // console.log("container size: ", container.offsetWidth);
      
    }
  }

  const onMouseMove = (e: MouseEvent) => {
      let distance = Math.hypot(e.clientX, e.clientY);
      let date = new Date();
      // console.log("magnitude: ", distance, " date: ", date.getDate());
      
  }
</script>
<!-- <Greet/> -->

<div class="relative sprot-app overflow-hidden- sprot-container w-screen h-screen" bind:this={container}>
  <!-- <Menubar /> -->
  <DrawingControl />
  
  <div class="sprot-content flex flex-col w-full h-full absolute top-0 left-0 pointer-events-none">
    <div>
      <Menubar />
      <StaticToolbars />
      <Tools/>
    </div>
 
    <div class="flex flex-col h-full">
      <div class="sprot-div-canvas flex flex-1 bg-sprotBgss overflow-hidden w-full h-full">
        <div class="bg-sprotBg py-0 flex justify-center h-fulll w-[31.4px] borderp pointer-events-auto border-sprotBgLight60 border-r-0 ">
            <VerticalTools />
        </div>
        <!-- <Gap horizontal={false} size={4} /> -->
        <Canvas />
        <!-- <Gap horizontal={false} size={4} /> -->
        <PanelsNotebook />
      </div>
      
      <!-- <Gap horizontal={true} size={4} /> -->
      <div class="h-6 border border-t-0 bg-sprotBg border-sprotBgLight60"></div>
    </div>
  </div>

  <div id="toplevels" class="sprot-toplevels w-screen h-screen absolute top-0 left-0 bg-trasparent pointer-events-none">
    <Toplevels />
  </div>
</div>