import { ESprotKey, ESprotModifierKey, SprotKeyboardEvent } from "$wasm/sprot_app";

export class SprotClientKeyboard {
    constructor() {}

    static keyevent(event: KeyboardEvent): SprotKeyboardEvent {
        const match = (a: string): string => {
            return a.trim().toLowerCase();
        }
        // const match = (a: string, b: string): boolean {
        //     return a.trim().toLowerCase() === b.trim().toLowerCase();
        // }

        const alt = event.altKey;
        const ctrl = event.ctrlKey;
        const meta = event.metaKey;
        const shift = event.shiftKey;

        let modifier = ESprotModifierKey.None;
        let key = ESprotKey.A;

        if (alt) {
            modifier = ESprotModifierKey.Alt;
        } else if(meta) {
            modifier = ESprotModifierKey.Meta;
        } else if (shift) {
            modifier = ESprotModifierKey.Shift;
        } else if(ctrl) {
            modifier = ESprotModifierKey.Control;
        }

        switch (match(event.code)) {
            case match("keya"):
                key = ESprotKey.A;
                break;
            case match("keyb"):
                key = ESprotKey.B;
                break;
            case match("keyc"):
                key = ESprotKey.C;
                break;
            case match("keyd"):
                key = ESprotKey.D;
                break;
            case match("keye"):
                key = ESprotKey.E;
                break;
            case match("keyf"):
                key = ESprotKey.F;
                break;
            case match("keyg"):
                key = ESprotKey.G;
                break;
            case match("keyh"):
                key = ESprotKey.H;
                break;
            case match("keyi"):
                key = ESprotKey.I;
                break;
            case match("keyj"):
                key = ESprotKey.J;
                break;
            case match("keyk"):
                key = ESprotKey.K;
                break;
            case match("keyl"):
                key = ESprotKey.L;
                break;
            case match("keym"):
                key = ESprotKey.M;
                break;
            case match("keyn"):
                key = ESprotKey.N;
                break;
            case match("keyo"):
                key = ESprotKey.O;
                break;
            case match("keyp"):
                key = ESprotKey.P;
                break;
            case match("keyq"):
                key = ESprotKey.Q;
                break;
            case match("keyr"):
                key = ESprotKey.R;
                break;
            case match("keys"):
                key = ESprotKey.S;
                break;
            case match("keyt"):
                key = ESprotKey.T;
                break;
            case match("keyu"):
                key = ESprotKey.U;
                break;
            case match("keyv"):
                key = ESprotKey.V;
                break;
            case match("keyw"):
                key = ESprotKey.W;
                break;
            case match("keyx"):
                key = ESprotKey.X;
                break;
            case match("keyy"):
                key = ESprotKey.Y;
                break;
            case match("keyz"):
                key = ESprotKey.Z;
                break;



            case match("space"):
                key = ESprotKey.Space;
                break;
            case match("escape"):
                key = ESprotKey.Escape;
                break;

            case match("numpad1"):
                key = ESprotKey.NumPad1;
                break;
            case match("numpad2"):
                key = ESprotKey.NumPad2;
                break;
            case match("numpad3"):
                key = ESprotKey.NumPad3;
                break;
            case match("numpad4"):
                key = ESprotKey.NumPad4;
                break;
            case match("numpad5"):
                key = ESprotKey.NumPad5;
                break;
            case match("numpad6"):
                key = ESprotKey.NumPad6;
                break;
            case match("numpad7"):
                key = ESprotKey.NumPad7;
                break;
            case match("numpad8"):
                key = ESprotKey.NumPad8;
                break;
            case match("numpad9"):
                key = ESprotKey.NumPad9;
                break;
                
        
            default:

                console.log("keys: ", event.code);
                
                // let exhausted: unknown = 
                key = ESprotKey.A;
                break;
        }

        return new SprotKeyboardEvent(key, modifier);
    }
}


/**
 * 
 * 
 *  NumpadDecimal  keycode:  110
3Canvas.svelte:181 down: key:  Enter  code:  NumpadEnter  keycode:  13
Canvas.svelte:181 down: key:  +  code:  NumpadAdd  keycode:  107
Canvas.svelte:181 down: key:  Enter  code:  NumpadEnter  keycode:  13
Canvas.svelte:181 down: key:  +  code:  NumpadAdd  keycode:  107
Canvas.svelte:181 down: key:  -  code:  NumpadSubtract  keycode:  109
Canvas.svelte:181 down: key:  *  code:  NumpadMultiply  keycode:  106
Canvas.svelte:181 down: key:  /  code:  NumpadDivide  keycode:  111
3Canvas.svelte:181 down: key:  NumLock  code:  NumLock  keycode:  144
2Canvas.svelte:181 down: key:  Backspace  code:  Backspace  keycode:  8
Canvas.svelte:181 down: key:     code:  Space  keycode:  32
2Canvas.svelte:181 down: key:  Backspace  code:  Backspace  keycode:  8
4Canvas.svelte:181 down: key:  Delete  code:  Delete  keycode:  46
Canvas.svelte:181 down: key:  Backspace  code:  Backspace  keycode:  8
Canvas.svelte:181 down: key:  Delete  code:  Delete  keycode:  46
Canvas.svelte:181 down: key:  Delete  code:  NumpadDecimal  keycode:  46
 */


