export const ellipses = (word: string, maxLength: number, side: "LEFT" | "RIGHT" | "CENTER" = "RIGHT"): string => {
    if(word.length < maxLength) {
        return word;
    }

    const len = word.length;

    const half = Math.floor( (maxLength - 1) / 2);
    let first_chars = word.slice(0, half);
    const last_chars = word.slice(len - half, len);

    switch (side) {
        case "CENTER":
            return first_chars + ".." + last_chars;
        case "LEFT":
            return "..." + word.slice(len - maxLength - 3);
        case "RIGHT":
            return word.slice(0, maxLength) + "...";
    
        default:
            break;
    }

    

    return first_chars + ".." + last_chars;
}