export interface SprotClientPoint {
    x: number,
    y: number
}

export const ORIGIN: SprotClientPoint = {
    x: 0.0,
    y: 0.0
}

export const getElementScreenCoordinates = (element: HTMLElement): SprotClientPoint => {
    let parent = element.offsetParent as HTMLElement | null;

    let coordinate: SprotClientPoint = { ...ORIGIN };
    coordinate.x = element.offsetLeft;
    coordinate.y = element.offsetTop;

    while(parent) {

        coordinate.x += parent.offsetLeft;
        coordinate.y += parent.offsetTop;

        let body =  document.body;
        if(parent == body) {
            break;
        } else {
            parent = parent.offsetParent as HTMLElement | null;
        }
    }
    
    return coordinate;
}