import { SendBack, SendBackward, SendForward, SendFront } from "$components/icons/arranging";
import { SprotActions, type SprotListButton } from "$lib/types";

export const arrangmemts: SprotListButton[] = [
    {
        id: SprotActions.SendBack,
        name: "Sent Back",
        active: false, 
        icon: SendBack,
    },
    {
        id: SprotActions.SendBackward,
        name: "Send Backward",
        active: false,
        icon: SendBackward,
    },
    {
        id: SprotActions.SendForward,
        name: "Send Forward",
        active: false,
        icon: SendForward,
    },
    {
        id: SprotActions.SendFront,
        name: "Send Front",
        active: false,
        icon: SendFront,
    },
]

