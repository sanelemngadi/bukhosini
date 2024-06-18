type ESprotDrawStateConstraints = "Unconstrained" | 
                                { "FixedWidth": [] } | 
                                { "Proportional": [] } | 
                                { "FixedWidth": number } | 
                                { "FixedHeight": number};

type ESprotReferencePoint =  "TopLeft" | "TopCenter" | "TopRight" | "CenterRight" | "BottomRight" | "BottomCenter" | "BottomLeft" | "CenterLeft" | { "Custom": [] }

export interface SprotDrawState {
    layer: number | null,
    constraints: ESprotDrawStateConstraints,
    rfp: ESprotReferencePoint,
}

export const drawState: SprotDrawState = {
    layer: null,
    rfp: "TopLeft",
    constraints: "Unconstrained"
} as const;
/*

use serde::Deserialize;



#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all="camelCase")]
pub struct SprotDrawState {
    pub layer: Option<usize>,
    pub constraints: ESprotDrawStateConstraints,
    pub rfp: ESprotReferencePoint,
}


*/