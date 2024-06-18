import { Move } from "$components/icons/modifiers";
import type { SprotListButton } from "$lib/types";

export const canvasviews: SprotListButton[] = [
    {
        id: 1,
        active: false,
        icon: Move,
        name: "Quadrants", // indicate which quadrant is visible in viewport between bottom left, bottom right, topleft and top right
    }
]