import { Palette } from "../services/colors.service";
export declare type GradientOpacity = {
    min: number;
    max: number;
};
export declare type GradientRadius = {
    min: number;
    max: number;
};
export declare type GradientColorMap = {
    [id: string]: string;
};
export declare type RawGradient = {
    colors: {
        negative: GradientColorMap;
        positive: GradientColorMap;
    };
    opacity: GradientOpacity;
    radius: GradientRadius;
};
export interface Gradient extends RawGradient {
    thresholds: number[];
    highlight: boolean;
    blur: number;
    palette: Palette;
    colorDomain: number[];
    delta: number;
}
export declare type GradientConfig = {
    thresholds: number[];
    highlight: boolean;
    blur: number;
    palette: Palette;
    colorDomain: number[];
    opacity: GradientOpacity;
    radius: GradientRadius;
    delta: number;
};
export declare type GradientConfigOverwriteDefaults = {
    thresholds?: number[];
    highlight?: boolean;
    blur?: number;
    palette?: Palette;
    colorDomain?: number[];
    opacity?: GradientOpacity;
    radius?: GradientRadius;
    delta?: number;
};
//# sourceMappingURL=gradient.types.d.ts.map