<script lang="ts">
  import { DropdownOutline, Plus, ProjectSetup } from "$components/icons";

  import { PillButton } from "$components/toolbars";
  import { SprotFix, type SprotAppViewController, SprotDocumentState, SprotLayer } from "$wasm/sprot_app";
  import { onMount } from "svelte";
  import DocumentTabBtn from "./DocumentTabBtn.svelte";
  import { getActionDocument, getAppViewController, setActionDocument } from "$lib/stores";
  import { None, Some, type SprotOption } from "$lib/utils";
  import { open, save  } from "@tauri-apps/api/dialog";
  import { UserAttentionType, WebviewWindow, appWindow } from "@tauri-apps/api/window";
  import { readTextFile, writeTextFile } from "@tauri-apps/api/fs";

  import {SprotExtractionUtil} from "$lib/extract";
  import Setting from "$components/icons/Setting.svelte";
  import BitmapButton from "./BitmapButton.svelte";
  import { SprotCanvasTab } from "$lib/menus/canvastabs";

  let tabs: SprotDocumentState[] = [];
  let app: SprotOption<SprotAppViewController> = None;
  let fixAdded = false;
  // let actionTool: SprotCanvasTool | null = null;
  let canvastab: SprotCanvasTab = new SprotCanvasTab();
  let tabsContainer: HTMLElement;

  const init = () => {
    canvastab = new SprotCanvasTab();
    // canvastab.addTool

    getAppViewController(state => app = Some(state));
    getActionDocument((documents, _action) => {
        tabs = documents;

        canvastab = new SprotCanvasTab();

        for(const tab of documents) {
          canvastab.addTab(tab.get_name(), tab);
        }

        // console.log("documents: ", documents);        
    });

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }

  onMount(init);

  const onResize = async () => {
    if(tabsContainer && canvastab) {
      let w = tabsContainer.offsetWidth;

      canvastab = canvastab.onResize(w);
    }
  }

  const onSaveFile = async () => {
    let active = tabs.find(d => d.active);
    app.Some(async (application) => {
      if(active) {
        application.save();
        let data = active.get_entities_as_text();
        let saved_to_path = await save({
          title: "save document",
        });
  
        if(saved_to_path) {
          await writeTextFile(saved_to_path, data);
        }
  
        // console.log("saved to: ", data);
        
      }
    })
  }

  const onOpenFile = async () => {
    try {
      const selected_path = await open({
        multiple: false,
        title: "Open a new file",
      });

      if (selected_path) {
        let text = await readTextFile(selected_path as string);

        let d = new SprotExtractionUtil(text);
        await d.open();

        let entities = d.getEntities();
        let layers = d.getLayers();

        const find_layer_by_id = (id: number): SprotOption<SprotLayer> => {
          for(const layer of layers) {
            if (layer.id === id) {
              return Some(layer);
            }
          }

          return None;
        } 

        for(const entity of entities) {
          let id = entity.layer;
          let layer = find_layer_by_id(id);
          
          layer.Some(ly => ly.add_entity(entity));
        }
        let docum = new SprotDocumentState("untitled-2", 2, selected_path as string);
        let id = docum.document_id;

        for(const layer of layers) {
            docum.add_layer(layer);            
        }

        app.Some(appState => {
          if (appState.open_document(docum)) {
            tabs = [...tabs, docum];
              setActionDocument(appState, id);
          }
        })

        

        // console.log("read text: ", text);       
      }
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const onChangeDocument = (document: SprotDocumentState) => {
    app.Some(application => {
      setActionDocument(application, document.document_id);

      application.save();
      // console.log("doc: ", document.get_entities_as_text());
      

      if(!fixAdded) {
        const alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const sz = 36;
        
        // let fixes: SprotFix[] = [];
        // for(let i = 0; i < 8000; i++) {
        //   const alpha_a = Math.floor(Math.random() * 26) ;
        //   const alpha_b = Math.floor(Math.random() * sz);
        //   let x = Math.random() * 1500;
        //   let y = Math.random() * 750;
        //   const fix = new SprotFix(i, i+10, x, y);
        //   fix.set_name(`${alphas[alpha_a]}${alphas[alpha_b]}`);
        //   fixes.push(fix);
        // }

        // application.add_fixes(fixes);
      }

      fixAdded = true;
    });


  
  }

  const onWindow = async () => {
    // const win =  new WebviewWindow("my-label", {
    //   url: " 'https://github.com/tauri-apps/tauri'",
    //   center: true,
    // });

    // // await win.show();
    // await win.once("tauri://created", () => {
    //   console.log("created");
      
    // })
    
    // const unlisten = await win.listen("tauri://blur", () => {
    //   win.requestUserAttention(UserAttentionType.Critical);
    // });

    
  }

</script>

<div class="flex items-center justify-between w-full bg-blackd bg-sprotBg1 bordel border-tl border-x border-sprotBgLight60 pointer-events-auto">
  <div class="h-8k flex items-end">
      <button
        class="w-6 h-6 flex items-center justify-center border-y border-sprotBgLight60"
        on:click={onSaveFile}>
          <PillButton pill>
            <ProjectSetup size={12} color="white" />
          </PillButton>
      </button>
  
      <div class="w-6 h-6 flex items-center justify-center border-y border-r border-sprotBgLight60">
        <PillButton>
          <DropdownOutline size={14} color="white" />
        </PillButton>
      </div>
  
      <div class="flex flex-nowrap">
          <div class="flex items-end gap-[1px] " bind:this={tabsContainer}>
            {#each canvastab.getcanvastabItems() as tab (tab.id) }
                {#if tab.fit}
                  <DocumentTabBtn 
                    on:click={() => onChangeDocument(tab.document)} 
                    location={tab.document.get_location()} 
                    active={tab.document.active} />
                {/if}
            {/each}
          </div>
  
          
        </div>
        
        
      </div>


      <div class="h-6 flex-1 flex items-center justify-between border-b border-sprotBgLight60">
        <div class="w-6 h-5 flex items-center justify-center">
          <PillButton>
            <Plus color="white" size={12}/>
          </PillButton>
        </div>


        <div class="flex border-t border-l border-bk border-sprotBgLight60">
          <!-- {#if actionTool}
            <div class="w-8 h-8 flex items-center justify-center">
              <PillButton>
                <svelte:component this={actionTool.icon} color="white" size={12}/>
              </PillButton>
            </div>
          {/if}
           -->
          <BitmapButton className="w-6 h-5" on:click={onWindow}>
            <Setting color="white" size={12}/>
          </BitmapButton>
        </div>
      </div>
</div>