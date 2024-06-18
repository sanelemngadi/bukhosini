<script>
  import BitmapButton from "$components/general/BitmapButton.svelte";
  import { DropdownOutline, Minus, Plus } from "$components/icons";
  import Choice from "$components/ui/Choice.svelte";

  const btn =
    "w-4 flex border border-transparent hover:border-sprotPrimary hover:bg-sprotPrimary25 rounded-none hover:bg-sprotBg1 border-sprotBgLight60 h-[18px]";
</script>

<div class="border-sprotBgLight60 border-t-0 flex items-center">
  <p class="text-[11px] text-nowrap px-2 h-full sprot-center">Scale</p>
  <span
    class="inline-flex items-center bg-sprotBg1 border border-sprotBgLight60"
  >
    <BitmapButton className={btn}>
      <Minus size={8} color="white" />
    </BitmapButton>
    <!-- <input 
            type="text" 
            class="w-16 px-1 bg-sprotBg focus:bg-sprotText focus:text-sprotBg text-sprotText border-x border-sprotBgLight60 h-[18px] text-[10px] focus:outline-none focus:border-sprotText" 
            name="" 
            value="250%" 
            id=""> -->
    <Choice
      choiceList={[
        { active: true, id: 0, label: "10%" },
        { active: false, id: 1, label: "15%" },
        { active: false, id: 2, label: "25%" },
        { active: false, id: 3, label: "35%" },
        { active: false, id: 4, label: "40%" },
        { active: false, id: 5, label: "50%" },
        { active: false, id: 6, label: "65%" },
        { active: false, id: 7, label: "70%" },
        { active: false, id: 8, label: "75%" },
        { active: false, id: 9, label: "80%" },
        { active: false, id: 10, label: "85%" },
        { active: false, id: 11, label: "95%" },
        { active: false, id: 12, label: "100%" },
        { active: false, id: 13, label: "120%" },
        { active: false, id: 14, label: "150%" },
        { active: false, id: 15, label: "180%" },
        { active: false, id: 16, label: "200%" },
        { active: false, id: 17, label: "220%" },
        { active: false, id: 18, label: "240%" },
        { active: false, id: 19, label: "260%" },
        { active: false, id: 20, label: "280%" },
        { active: false, id: 21, label: "300%" },
      ]}
    />
    <!-- <BitmapButton className={btn}>
              <span class="-rotate-90ll h-full w-full center"><DropdownOutline size={16} color="white"/></span>
            </BitmapButton> -->
    <BitmapButton className={btn}>
      <Plus size={8} color="white" />
    </BitmapButton>
  </span>
</div>
