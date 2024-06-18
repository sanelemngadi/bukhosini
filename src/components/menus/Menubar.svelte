<script lang="ts">
  // import { appWindow } from "@tauri-apps/api/window";
  import { onMount } from "svelte";

  import { SprotMenu, SprotMenubar } from "$lib/menus/";
  import type { SprotMenubarItem } from "$lib/types";
  import { Close, Minus, NewFile, Rect, Save } from "$components/icons";
  import Undo from "$components/icons/Undo.svelte";
  import Redo from "$components/icons/Redo.svelte";
  import History from "$components/icons/History.svelte";
  import { CopyIcon, CutIcon, PasteIcon } from "$components/icons/toolbars";
  import DullButton from "$components/general/DullButton.svelte";
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import Setting from "$components/icons/Setting.svelte";
  import { appWindow } from "@tauri-apps/api/window";
  import type { SprotDocument } from "$wasm/sprot_app";

  let menubar = new SprotMenubar();

  const subM2 = new SprotMenu();
  subM2.addButton("Hello world", "P", null);
  subM2.addSeperator();
  subM2.addButton("Second item", "P", null);

  const subM1 = new SprotMenu();
  subM1.addButton("Hello world", "P", null);
  subM1.addSeperator();
  subM1.addButton("Second item", "P", null);

  const fileMenu = new SprotMenu();
  fileMenu.addButton("New File", "P", NewFile);
  fileMenu.addButton("Open File", "P", null);
  fileMenu.addButton("Save File", "P", Save);
  fileMenu.addSeperator();
  fileMenu.addButton("Save", "Ctrl+S", Save);
  fileMenu.addButton("Save As", "Ctrl+S", Save);
  fileMenu.addButton("Save All", "Ctrl+S", Save);
  fileMenu.addSubmenu("Print Selection", subM2);

  fileMenu.addSeperator();
  fileMenu.addButton("Exit", "P", null);

  const editMenu = new SprotMenu();
  editMenu.addButton("Undo", "P", Undo);
  editMenu.addButton("Redo", "P", Redo);
  editMenu.addButton("Open Undo History", "P", History);
  editMenu.addSeperator();
  editMenu.addButton("Cut", "P", CutIcon);
  editMenu.addButton("Copy", "P", CopyIcon);
  editMenu.addButton("Paste", "P", PasteIcon);
  editMenu.addButton("Paste into selection", "P", Redo);
  editMenu.addSeperator();
  editMenu.addButton("Delete", "P", null);
  editMenu.addButton("Duplicate", "P", null);
  editMenu.addButton("Explode", "P", null);
  // editMenu.addSeperator();

  const viewMenu = new SprotMenu();
  viewMenu.addButton("Hello world", "P", null);
  viewMenu.addSeperator();
  viewMenu.addButton("Second item", "P", null);
  viewMenu.addSubmenu("subsub", subM1);
  viewMenu.addSeperator();

  const insertMenu = new SprotMenu();
  insertMenu.addButton("Block", "P", null);
  insertMenu.addSeperator();
  insertMenu.addButton("Image", "P", null);
  insertMenu.addButton("Layers", "P", null);
  insertMenu.addButton("Points", "P", null);

  const generalMenu = new SprotMenu();
  generalMenu.addButton("Hello world", "P", null);
  generalMenu.addSeperator();
  generalMenu.addButton("Second item", "P", null);
  generalMenu.addSubmenu("subsub", subM1);
  generalMenu.addSeperator();

  const conversionMenu = new SprotMenu();
  conversionMenu.addButton("Hello world", "P", null);
  conversionMenu.addSeperator();
  conversionMenu.addButton("Second item", "P", null);
  conversionMenu.addSubmenu("subsub", subM1);
  conversionMenu.addSeperator();

  const panelsMenu = new SprotMenu();
  panelsMenu.addButton("Properties", "P", null);
  panelsMenu.addButton("Layers", "P", null);
  panelsMenu.addButton("History", "P", null);
  panelsMenu.addButton("Surface", "P", null);
  panelsMenu.addSeperator();
  panelsMenu.addButton("Document", "P", null);
  panelsMenu.addButton("Documentation", "P", null);
  panelsMenu.addSeperator();
  panelsMenu.addButton("Templates", "P", null);
  panelsMenu.addButton("Colors Swatches", "P", null);
  panelsMenu.addButton("Fonts", "P", null);
  panelsMenu.addSeperator();
  panelsMenu.addButton("Print", "P", null);
  panelsMenu.addButton("Tools", "P", null);

  const helpMenu = new SprotMenu();
  helpMenu.addButton("Hello world", "P", null);
  helpMenu.addSeperator();
  helpMenu.addButton("Second item", "P", null);
  helpMenu.addSubmenu("subsub", subM1);
  helpMenu.addSeperator();

  let actionDocument: SprotDocument | null = null;

  onMount(() => {
    const mb = new SprotMenubar();
    mb.addMenu("File", fileMenu, "F");
    mb.addMenu("Edit", editMenu, "E");
    mb.addMenu("View", viewMenu, "V");
    mb.addMenu("Insert", insertMenu, "I");
    mb.addMenu("General", generalMenu, "G");
    mb.addMenu("Conversions", conversionMenu, "C");
    mb.addMenu("Panels", panelsMenu, "P");
    mb.addMenu("Help", helpMenu, "H");
    menubar = mb;

    // getActionDocument((doc) => {
    //   doc.Some((someDocument) => (actionDocument = someDocument));
    // });

    // const unlisten = listen("tauri://resize", async (payload) => {
    //     // console.log("payload: ", payload);

    //     isMaximized = await appWindow.isMaximized();
    //     // console.log("maximised: ", await appWindow.isMaximized());
    //     // console.log("minimize: ", await appWindow.isMaximized());

    // })

    // return async () => {
    //     unlisten.then((un) => {
    //         un();
    //     });
    // }
  });

  const onStartMenus = () => {
    menubar = menubar.toggleActive();
    // menubar = menubar.activate(true);
  };

  const onOverMenu = (item: SprotMenubarItem) => {
    menubar = menubar.setActiveMenu(item);
  };

  const onMin = async () => {
    await appWindow.minimize();
    console.log("minimize");
  };
  const onMax = async () => {
    console.log("maximize");

    await appWindow.toggleMaximize();
  };
  const onClose = async () => {
    console.log("close");

    await appWindow.close();
  };

  // const onSystemMenu = () => {

  // }
</script>

<div
  data-tauri-drag-regionkk
  class="w-full border-y border-sprotBg1 text-sprotText bg-sprotBg min-h-6 h-6 pointer-events-auto flex items-center justify-between"
>
  <div class="w-fit flex items-center" role="menubar" tabindex="0">
    <!-- <div class="w-8 h-4 border-r border-sprotBgLight60"></div> -->
    <!-- <div class="min-w-8 h-4 border-r border-sprotBgLight60"></div> -->
    <!-- <Seperator vertical={false} /> -->
    {#each menubar.getMenubarItems() as menu (menu.id)}
      <div class="relative inline-block">
        <button
          class="px-2 h-5 bg-inherit text-sprotText text-[12px]"
          on:click={() => {
            onStartMenus();
          }}
          on:mouseenter={() => {
            onOverMenu(menu);
          }}
        >
          {menu.name}
        </button>
        <div class=" absolute bg-sprotBgkk bottom left-0 z-[888]">
          <svelte:component
            this={menu.menu.getComponent()}
            menuObject={menu.menu}
            active={menu.active && menubar.isActive()}
          />
        </div>
      </div>
    {/each}
  </div>

  <!-- <div class="flex items-center justify-between h-full">
    <BitmapButton className="w-6 h-5">
      <Setting color="white" size={12} />
    </BitmapButton>

    <DullButton
      className="w-12 h-full flex items-center justify-center hover:bg-sprotBgLight20"
      on:click={onMin}
    >
      <Minus size={10} />
    </DullButton>
    <DullButton
      className="w-12 h-full flex items-center justify-center hover:bg-sprotBgLight20"
      on:click={onMax}
    >
      <Rect size={10} />
    </DullButton>
    <DullButton
      className="w-12 h-full flex items-center justify-center hover:bg-sprotDanger"
      on:click={onClose}
    >
      <Close size={10} />
    </DullButton>
  </div> -->
</div>
