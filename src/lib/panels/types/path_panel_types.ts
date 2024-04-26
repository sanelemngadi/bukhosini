/*

pub x: Option<f64>,
    pub y: Option<f64>,
    pub w: Option<f64>,
    pub h: Option<f64>,
    pub horizontal: Option<f64>,
    pub vertical: Option<f64>,
    pub distance: Option<f64>,
    pub direction: Option<f64>,
    pub move_to: Option<bool>,
    pub line_to: Option<bool>,
    pub add_rect: Option<bool>,
    pub add_circle: Option<bool>,
    pub rect_init_rfp: Option<usize>, // 1 is topleft,  throught 8 clockwise all sides centers of sides in a rect, 0 is center
    pub rect_end_rfp: Option<usize>,

*/

export interface SprotPathPremitiveType {
    x: number | null,
    y: number | null,
    w: number | null,
    h: number | null,
    horizontal: number | null,
    vertical: number | null,
    distance: number | null,
    direction: number | null,
    move_to: boolean | null,
    line_to: boolean | null,
    add_rect: boolean | null,
    add_circle: boolean | null,
    rect_init_rfp: number | null,
    rect_end_rfp: number | null,
    close_path: boolean,
    undo: boolean | null,
}

export const No_PATH: SprotPathPremitiveType = {
    x: null,
    y: null,
    w: null,
    h: null,
    horizontal: null,
    vertical: null,
    distance: null,
    direction: null,
    move_to: null,
    line_to: null,
    add_rect: null,
    add_circle: null,
    rect_init_rfp: null,
    rect_end_rfp: null,
    close_path: false,
    undo: null,
}