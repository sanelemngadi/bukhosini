// import { SprotDocumentPremites, SprotElementEntity, SprotLayer, SprotPoint, SprotSize, type SprotEntityKind } from "$wasm/sprot_app";
// // import { None, Some, type SprotOption } from "./utils";

// export interface ICustomColor {
//     id: number,
//     value: string,
// }

// export interface ITheme {
//     bg: string,
//     fg: string,
// }

// // export interface SprotLayer {
// //     name: string, 
// //     id: number,
// //     theme: ITheme,
// //     lineWidth: number,
// //     active: boolean,
// // }
// // export interface SprotElementEntity {
// //     id: number,
// //     kind: SprotElementEntityKind,
// //     layer: number, 
// //     theme: ITheme,
// //     rfPoint: IPoint,
// //     size: ISize,
// //     rfp: number,
// //     points: IPoint[],
// // }

// export interface ISurface {
//     name: string, 
//     id: number,
//     bg: number,
// }

// export interface IPoint {
//     x: number, 
//     y: number,
//     z: number,
// }
// export interface ISize {
//     width: number, 
//     height: number,
// }

// export interface IFix  {
//     id: number,
//     surface: number,
//     name: string,
//     location: IPoint,
//     code: string,
// }

// const docuFile =  `

// 2,1,third layer,theme[-14:-10],2,1,;

// 5,1,1,0,theme[-1:2],space[528.998002051131:190.94993600021849:528.998002051131],geom[265:8],7,;
// 5,1,2,0,theme[-1:2],space[936.998002051131:326.9499360002185:936.998002051131],geom[248.0000000000001:192],7,;
// 5,1,3,1,theme[-1:2],space[595.998002051131:265.9499360002185:595.998002051131],geom[169:96],1,;
// 5,1,4,2,theme[-1:2],space[947.998002051131:463.9499360002185:947.998002051131],geom[135.25613836779655:129.22741545159568],1,;
// 5,1,5,2,theme[-1:2],space[1288.9980020511312:373.9499360002185:1288.9980020511312],geom[143:135],1,;
// 5,1,6,1,theme[-1:2],space[320.99800205113104:314.9499360002185:320.99800205113104],geom[144.96212341902725:143.035074144948],1,;
// 5,1,7,3,theme[-1:2],space[347.99800205113104:59.949936000218486:347.99800205113104],geom[106:200],9,points[|space[391.99800205113104:170.94993600021849:391.99800205113104]|space[347.99800205113104:259.9499360002185:347.99800205113104]|space[453.99800205113104:196.94993600021849:453.99800205113104]],;
// 5,1,8,3,theme[-1:2],space[162.24843179084473:150.95162882147486:162.24843179084473],geom[367:346.99999999999994],9,points[|space[179.24843179084473:266.95162882147486:179.24843179084473]|space[285.24843179084473:308.95162882147486:285.24843179084473]|space[278.24843179084473:496.9516288214748:278.24843179084473]|space[529.2484317908447:497.9516288214748:529.2484317908447]|space[503.24843179084473:284.95162882147486:503.24843179084473]|space[335.24843179084473:285.95162882147486:335.24843179084473]|space[272.24843179084473:150.95162882147486:272.24843179084473]],;


// `

// const match = (c: string): string => {
//     return c.trim().toLowerCase();
// }

// const resolve = (value: IFix | SprotElementEntity | SprotLayer | ISurface | IPoint | ICustomColor): 
//     Promise<IFix | SprotElementEntity | SprotLayer | ISurface | IPoint | ICustomColor> => {
//     return Promise.resolve(value);
// }

// const reject_size = (): Promise<IFix | SprotElementEntity | SprotLayer | ISurface | IPoint | ICustomColor> => {
//     return Promise.reject("the size of a line does not fit the item");
// }



// // constant / space[x:y:z];

// export class SprotExtractionUtil {
//     private _layers: SprotLayer[];
//     private _entities: SprotElementEntity[];
//     private _fixes: IFix[];

//     constructor(private _file_text: string) {
//         this._entities = [];
//         this._fixes = [];
//         this._layers = [];

//         this.open();
//     }

//     private get_lines = (file: string): string[] => {
//         return match(file).split(",;");
//     }

//     open = async () => {
//         let lines = this.get_lines(this._file_text);
//         for(let i = 0; i < lines.length; i++) {
//             // console.log(lines[i].trim() + "\n");  
            
//             let v = await this.extractLine(lines[i]);


//             // if(v instanceof IEnt)
//             console.log(v);
            
//         };
//     }

//     private extraction = (value: string, dimention: "2d" | "3d" = "3d", prefix: "space" | "points" | "geom" | "theme" = "space"): string[] => {
//         let matched = match(value);
//         if (matched.includes(`${prefix}[`) && matched.includes(":") && matched.endsWith("]")) {
//             let location = matched.replaceAll(`${prefix}[`, "").replaceAll("]", "").split(":");
//             const dime = dimention === "2d" ? 2 : 3;
    
           
            
    
//             if (location.length !== dime) {
//                 throw new Error(`${prefix} length is invalid: `);
//             }
            
//             let values: string[] = [];
    
//             for(let i = 0; i < dime; i++) {
//                 const p = location[i].trim();
    
//                 values.push(p);
//             }
//             // console.log("locations: ", location, " vv: ", values);
    
//             return values;        
//         };
    
//         return [];
//     }

//     private space = (value: string): IPoint => {
//         const values =this.extraction(value, "3d", "space");
    
//         if (values.length === 3) {
//             return { x: parseFloat(values[0]), y: parseFloat(values[1]), z: parseFloat(values[2]) };
//         }
    
//         return { x: 0, y: 0, z: 0};    
//     }

//     private geometry = (value: string): ISize => {
//         const values =this.extraction(value, "2d", "geom");
//         if(values.length === 2) {
//             return { width: parseFloat(values[0]), height: parseFloat(values[1]) };
//         }
    
//         return { width: 0, height: 0};   
//     }
    
//     private theme = (value: string): ITheme => {
//         const values =this.extraction(value, "2d", "theme");
//         if (values.length === 2) {
//             return { bg: values[0], fg: values[1] };
//         }
//         return { bg: "?", fg: "?"};
//     }

    
//     private points = (value: string): IPoint[] => {
//         let pts: IPoint[] = [];
//         let matched = match(value);
    

//         // console.log("points: ", value);
        
//         if (matched.startsWith("points[") && matched.endsWith("]")) {
//             let last = matched.length - 1;
//             let items = matched.slice(0, last - 1);
//             const locations = items.replaceAll("points[", "").split("|");       
    
//             for(let i=0; i< locations.length; i++) {
//                 const v =this.space(locations[i]);
    
//                 pts.push(v);
//             }
    
//             if(pts.length > 0) {
//                 return pts;
//             }
//         } else {
//             console.log("doesnt match: ", value);
//         }
//         return [];
//     }

//     private extactFix = (items: string[]): IFix => {
//         let fix: IFix = {
//             surface: parseInt(items[0]),
//             id: parseInt(items[1]),
//             name: items[2],
//             location:this.space(items[3]),
//             code: items[4],
//         };
    
//         // console.log(fix);    
//         return fix;
//      }
    
//     // private extactEntity = (items: string[]): SprotElementEntity => {
//     //     const layer = parseInt(items[0]);
//     //     const id = parseInt(items[1]);
//     //     const kind = parseInt(items[2]) as SprotEntityKind;
//     //     const theme = this.theme(items[3]);
//     //     const rfPoint = this.space(items[4]);
//     //     const size = this.geometry(items[5]);
//     //     const points = items.length > 6 ?this.points(items[6]) : [];
        
//     //     let entity = SprotElementEntity.from_client(
//     //         id, kind, layer, new SprotPoint(rfPoint.x, rfPoint.y), 
//     //         new SprotSize(size.width, size.height), theme.bg, theme.fg);
//     //     return entity;
//     //  }
    
//     // private extactLayer = (items: string[]): SprotLayer => {
//     //     const id = parseInt(items[0]);
//     //     const name = items[1].trim();
//     //     const theme = this.theme(items[2]);
//     //     const lineWidth = parseInt(items[3]);
//     //     const active = parseInt(items[4]) ? true : false;

//     //     let layer = SprotLayer.from_client(name, id, active, lineWidth, theme.bg, theme.fg);  
//     //     return layer;
//     //  }
    
//     private extactSurface = (items: string[]): ISurface => {
//         let surface: ISurface = {
//             id: parseInt(items[0]),
//             name: items[1],
//             bg: parseInt(items[2])
//         };
       
//         return surface;
//      }
    
//     private extactConstants = (items: string): IPoint => {
//         let constant: IPoint = this.space(items);
       
//         return constant;
//      }
    
//     private extactColor = (items: string[]): ICustomColor => {
//         let colors: ICustomColor = {
//             id: parseFloat(items[0]),
//             value: items[1],
//         };
       
//         return colors;
//      }
    
    
    
//     private extractLine = (ln: string)  => { 
//         let items = match(ln).split(",");
//         if (items.length <= 1) {            
//             return;
//         }
    
//         let first = parseInt(items[0]) as SprotDocumentPremites; //
    
//         items = items.slice(1);
    
//         switch (first) {
//             case SprotDocumentPremites.Constants: // 2
//                 // return resolve(this.extactConstants(items[0]));
//             case SprotDocumentPremites.Colors: // 2
//                 // return resolve(this.extactColor(items));
//             case SprotDocumentPremites.Layers:
//                 // return resolve(this.extactLayer(items));
//                 this._layers.push(this.extactLayer(items));
//                 return;

//             case SprotDocumentPremites.Surface:
//                 // return resolve(this.extactSurface(items));
//             case SprotDocumentPremites.Fixes:
//                 // return resolve(this.extactFix(items));
//                 this._fixes.push(this.extactFix(items));
//                 return;

//             case SprotDocumentPremites.Entities:
//                 // return resolve(this.extactEntity(items));
//                 this._entities.push(this.extactEntity(items));
                
        
//             default: // if parseInt isNan
//                 return;
//         }
    
    
        
//      }

//     getEntities(): SprotElementEntity[] {
//         return this._entities;
//     }

//     getLayers(): SprotLayer[] {
//         return this._layers;
//     }
// }





// // fix / surface, id, name, space[x:y:z], code
// // entity / layer, id, kind,  theme[bg:fg], space[x:y:z], geom[w:h], rfp, points[space[x:y:x], space[x:y:z], space[x:y:x], space[x:y:z]]
// // layer / id, na_me, [theme]bg:fg, line_width, is_target
// // surface / id, name, bg;
// // color / id, value



// // export const print_lines = async () => {

// //     console.time("time");
// //     // const lines = get_lines(docuFile);
// //     // for(let i = 0; i < lines.length; i++) {
// //     //     // console.log(lines[i].trim() + "\n");  
        
// //     //     let v = awaitthis.extractLine(lines[i]);
// //     //     console.log(v);
        
// //     // };
// //     let f = new SprotExtractionUtil(docuFile);
// //     f.open();
// //     console.timeEnd("time");
// // }

// // export const mainFuncton = () => {
// //     print_lines();
// // }

// // 170 - 305