export const colorToUrlCompatible = (color: string): string => {
    return color.includes("#") ? color.replaceAll("#", "%23") : color;
}

export const svgToURL = (svg: string) : string => {
    return `data:image/svg+xml,${svg.replaceAll("<", "%3C").replaceAll(">", "%3E").replaceAll("#", "%23")}`;
};


export class SprotOption<T> {
    constructor(private _value: T | null | undefined) {}

    Some = (predicate: (value: T) => void): SprotOption<T> => {
        if( this._value) {
            predicate(this._value);
        }
        
        return this;
    }

    None = (predicate: () => void): SprotOption<T> => {
        if(!this._value) {
            predicate();
        }
        return this;
    }
}

export const None = new SprotOption<any>(null);
export const Some = <T>(value: T) => new SprotOption(value);
export const SomeFromUnknown = <T>(value: T | null | undefined) => new SprotOption(value);


export class SelectionOption<T> {
    constructor(private items: T[]) {}

    Single = (predicate: (item: T) => void): SelectionOption<T> => {
        if(this.items.length === 1) {
            predicate(this.items[0]);
        }
        return this;
    }

    GroupEach = (predicate: (index: number, item: T, length: number) => void): SelectionOption<T> => { // loops through item
        let len = this.items.length;
        if(len > 1) {
            this.items.forEach((value, index) => {
                predicate(index, value, len);
            })
        }
        return this;
    }

    GroupAll = (predicate: (items: T[]) => void): SelectionOption<T> => { // retrieve all items
        if (this.items.length > 1) {
            predicate(this.items);
        }
        return this;
    }

    Empty = (predicate: () => void): SelectionOption<T> => {
        if(this.items.length === 0) {
            predicate();
        }
        return this;
    }

    isEmpty = (): boolean => {
        return this.items.length === 0;
    }
}

export const NoSelection = new SelectionOption([] as any[]);
export const SomeSelelction = <T>(items: T[]) => new SelectionOption(items);