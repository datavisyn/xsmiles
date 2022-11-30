import { RawMolecule } from "../types/molecule.types";
import { RawGradient, GradientColorMap, GradientConfig, GradientOpacity, GradientRadius, Gradient, GradientConfigOverwriteDefaults } from "../types/gradient.types";
declare class GradientService {
    getColorDomainWithDefaultIfEmpty(gradientConfig: GradientConfig, scores: number[]): number[];
    optimizeMinMaxRadius(molecule: RawMolecule, gradientConfig: GradientConfig): {
        min: number;
        max: number;
    };
    getThresholds(arg0: number): any;
    cloneGradientConfig(gradientConfig: GradientConfig): {
        thresholds: number[];
        colorDomain: number[];
        opacity: {
            min: number;
            max: number;
        };
        radius: {
            min: number;
            max: number;
        };
        highlight: boolean;
        blur: number;
        palette: import("./colors.service").Palette;
        delta: number;
    };
    getGradient: (gradientConfig: GradientConfig) => Gradient;
    createGradient: (thresholds: number[], negativeColors: string[], positiveColors: string[], linesColors: string[], opacity: GradientOpacity, radius: GradientRadius, delta?: number) => RawGradient;
    adjustedThresForInterpolator: (signedThreshold: number) => number;
    sortGradientColorMap: (unsorted: GradientColorMap) => GradientColorMap;
    colorMap(colors: string[], linesColors: string[], thresholds: number[], delta: number): GradientColorMap;
    equalColorMaps: (m1: GradientColorMap, m2: GradientColorMap) => boolean;
    validation: (thresholds: number[], negativeColors: string[], positiveColors: string[], linesColors: string[], opacity: GradientOpacity, radius: GradientRadius, delta: number) => void;
    validDelta: (delta: number) => boolean;
    validThresholds: (thresholds: number[], delta: number) => boolean;
    validColors: (colors: string[], thresholds: number[]) => boolean;
    getThresholdsList: () => number[][];
    getGradientConfig: (config?: GradientConfigOverwriteDefaults, bondLength?: number) => GradientConfig;
    defaultConfig: GradientConfig;
}
declare const _default: GradientService;
export default _default;
//# sourceMappingURL=gradients.service.d.ts.map