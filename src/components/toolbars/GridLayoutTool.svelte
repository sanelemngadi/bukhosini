<script>
    import ExportDfxIcon from "$components/icons/toolbars/ExportDFXIcon.svelte";
    import ExportDwgIcon from "$components/icons/toolbars/ExportDWGIcon.svelte";
    import ExportPdfIcon from "$components/icons/toolbars/ExportPDFIcon.svelte";
    import ExportShpIcon from "$components/icons/toolbars/ExportSHPIcon.svelte";
    import GridCanvasTool from "./GridCanvasTool.svelte";
    
    </script>
    <div class="flex h-full bg-sprotBgLight20 text-sprotText pointer-events-auto p-1 border-r border-sprotBg1">
        <GridCanvasTool name="Layout" tools={[
          {active: false, id: 0, name: "Define Print Bounds", icon: ExportPdfIcon },
          {active: false, id: 1, name: "Add Block layout", icon: ExportPdfIcon },
          {active: false, id: 2, name: "Add Diagram Block", icon: ExportPdfIcon },
        ]}/>
    
  
        <div class="min-w-9 flex flex-col h-full group border border-transparent">
            <div class="border flex border-transparent hover:border-sprotBg1 flex-1"> 
                <div class="flex flex-1 items-center justify-center hover:bg-sprotBg">
                    <ExportDfxIcon size={16} />
                </div>
            </div>
            <div class="border flex border-transparent hover:border-sprotBg1 flex-1"> 
                <div class="flex flex-1 items-center justify-center hover:bg-sprotBg">
                    <ExportDwgIcon size={16} />
                </div>
            </div>
            <div class="border flex border-transparent hover:border-sprotBg1 flex-1"> 
                <div class="flex flex-1 items-center justify-center hover:bg-sprotBg">
                    <ExportShpIcon size={16} />
                </div>
            </div>
    
        </div>
    </div>