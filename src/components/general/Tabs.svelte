<script lang="ts">
  import { DropdownOutline, Plus, ProjectSetup } from "$components/icons";
  import { type SprotAppViewController } from "$wasm/sprot_app";
  import { createEventDispatcher, onMount } from "svelte";
  import DocumentTabBtn from "./DocumentTabBtn.svelte";
  import {
    getActionDocument,
    getAppViewController,
    setActionDocument,
  } from "$lib/stores";
  import Setting from "$components/icons/Setting.svelte";
  import BitmapButton from "./BitmapButton.svelte";
  import { SprotCanvasTab } from "$lib/menus/canvastabs";
  import DullButton from "./DullButton.svelte";
  import { SprotClientDocument } from "$lib/application/document";
  import { ask } from "@tauri-apps/api/dialog";
  import { appWindow } from "@tauri-apps/api/window";

  let tabs: SprotClientDocument[] = [];
  let actionDocument: SprotClientDocument = new SprotClientDocument();

  let appState: SprotAppViewController | null = null;
  // let fixAdded = false;
  let canvastab: SprotCanvasTab = new SprotCanvasTab();
  let tabsContainer: HTMLElement;

  const dispatch = createEventDispatcher();

  const init = () => {
    canvastab = new SprotCanvasTab();

    getAppViewController((state) => {
      appState = state;
      // tabs = appState.get_documents().map((d) => {
      //   const p = new SprotClientDocument();
      //   p.changeState(d); // set state otherwise its a welcome document
      //   return p;
      // });
      // tabs = [];

      // canvastab = new SprotCanvasTab();

      // console.log("documents: ", tabs);

      // for (const tab of tabs) {
      //   if (actionDocument) {
      //     tab.active = actionDocument.id === tab.id;
      //   }
      //   canvastab.addTab(tab.getName(), tab);
      // }

      // we load documents on app create and on document added
    });

    getActionDocument(async (doc) => {
      // doc.Some((someDocument) => ());
      actionDocument = doc;

      let sprot = "[Survey Prototype Tool] - " + doc.getName();
      appWindow
        .setTitle(sprot)
        .then(() => {
          console.log("title set");
        })
        .catch((e) => {
          console.log("error title: ", e);
        });

      // canvastab = new SprotCanvasTab();

      // setTimeout(() => {
      //   if (appState) {
      //     try {
      //       const documents = appState.get_documents();
      //       console.log("documents loaded: ", documents);
      //     } catch (error) {
      //       console.log("errors: ", error);
      //     }
      //   }
      // }, 2000);
      // for (const tab of tabs) {
      //   if (actionDocument) {
      //     tab.active = actionDocument.id === tab.id;
      //   }
      //   canvastab.addTab(tab.getName(), tab);
      // }
      // tabs = documents.map((d) => {
      //   let p = new SprotClientDocument();
      //   p.changeState(d);
      //   return p;
      // });

      // console.log("documents: ", tabs);
    });

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  };

  onMount(init);

  const onResize = async () => {
    if (tabsContainer && canvastab) {
      let w = tabsContainer.offsetWidth;

      canvastab = canvastab.onResize(w);
    }
  };

  const onDocumentSetup = () => {
    dispatch("documentsetup");
  };

  const onUndo = () => {
    if (appState) {
      appState.undo_last_actions();
    }
  };

  const onChangeDocument = (document: SprotClientDocument) => {
    if (appState) {
      let application = appState;
      // setActionDocument(application, document.id);

      application.set_action_document(document.id);
    }
  };

  // const onMin = async () => {
  //   await appWindow.minimize();
  //   console.log("minimize");
  // };
  // const onMax = async () => {
  //   console.log("maximize");

  //   await appWindow.toggleMaximize();
  // };
  // const onClose = async () => {
  //   console.log("close");

  //   await appWindow.close();
  // };

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
  };

  const onNewDocument = () => {
    setActionDocument(new SprotClientDocument());
  };

  const onCloseDocument = async (document: SprotClientDocument) => {
    const doc = document.getDocument();
    if (appState && doc) {
      let changes = doc.has_changes;

      if (changes) {
        const yes2 = await ask(
          `Your changes will be lost if you don't save them`,
          {
            title: `Do you want to save the changes you made to ${document.getName()}`,
            type: "info",
          }
        );
      } else {
        appState.close_document(doc.id);
      }
    }
  };

  $: if (canvastab && tabs && actionDocument) {
    canvastab = new SprotCanvasTab();

    if (appState) {
      tabs = appState.get_documents().map((d) => {
        const p = new SprotClientDocument();
        p.changeState(d);
        return p;
      });
    }

    for (const tab of tabs) {
      if (actionDocument) {
        tab.active = actionDocument.id === tab.id;
      }
      canvastab.addTab(tab.getName(), tab);
    }
  }
</script>

<div
  data-tauri-drag-regionkk
  class="flex border border-sprotBg1 items-center justify-between w-fullk bg-sprotBg pointer-events-auto"
>
  <div class="flex items-end">
    <DullButton
      className="w-6 h-6 flex items-center justify-center bg-sprotBgLight20 border-sprotBg1"
      on:click={onDocumentSetup}
    >
      <BitmapButton className="h-full">
        <ProjectSetup size={12} color="white" />
      </BitmapButton>
    </DullButton>

    <div
      class="w-6 h-6 flex items-center justify-center bg-sprotBgLight20 border-sprotBg1"
    >
      <BitmapButton className="h-full" on:click={onUndo}>
        <DropdownOutline size={14} color="white" />
      </BitmapButton>
    </div>

    <div class="flex flex-nowrap border-l border-sprotBg1">
      <div class="flex items-end" bind:this={tabsContainer}>
        {#each canvastab.getcanvastabItems() as tab (tab.id)}
          {#if tab.fit}
            <DocumentTabBtn
              on:click={() => onChangeDocument(tab.document)}
              location={tab.document.getDocument()?.get_location()}
              active={tab.document.active}
              name={tab.document.getName()}
              haveChanges={tab.document.getDocument()?.has_changes || false}
              on:close={() => onCloseDocument(tab.document)}
            />
          {/if}
        {/each}

        {#if actionDocument.id === -1}
          <DocumentTabBtn
            location={actionDocument.getDocument()?.get_location()}
            name={actionDocument.getName()}
            closable={false}
            active
          />
        {/if}

        <BitmapButton
          className="h-6 bg-sprotBgLight20"
          on:click={onNewDocument}
        >
          <Plus color="white" size={12} />
        </BitmapButton>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-between h-full">
    <BitmapButton className="w-6 h-5" on:click={onWindow}>
      <Setting color="white" size={12} />
    </BitmapButton>
  </div>
</div>
