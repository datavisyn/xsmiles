import { Method } from "./molecule.types";
import { RawGradient } from "./gradient.types";
export declare type MoleculeViewsParamsToConfig = {
    gradient?: RawGradient;
    width?: number;
    height?: number;
    hideBarChart?: boolean;
    theme?: string;
    structureColor?: string;
    colorsRange?: string[];
    colorsDomain?: number[];
    alphaRange?: number[];
    background?: string;
    smilesAlphaRange?: number[];
    numerical?: boolean;
    heatmap?: boolean;
    method?: Method;
};
export declare type MoleculeViewsConfig = {
    width: number;
    height: number;
    hideBarChart: boolean;
    hideAttributesTable: boolean;
    theme: string;
    structureColor: string;
    alphaRange: number[];
    background: string;
    smilesAlphaRange: number[];
    numerical: boolean;
    heatmap: boolean;
};
//# sourceMappingURL=moleculeViews.types.d.ts.map