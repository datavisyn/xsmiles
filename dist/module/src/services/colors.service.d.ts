import chroma from "chroma-js";
export declare type Palette = {
    name: string;
    colors: string[];
};
export declare type ColorSpace = {
    colorRange: string[];
    colorDomain: number[];
};
declare class ColorsService {
    mid: (colors: string[]) => number;
    correctColors: (colors: string[]) => string[];
    splitComplementaryFrom2Colors: (color1: string, color2: string) => string;
    interpolate(colors: string[], domain?: number[]): chroma.Scale<chroma.Color>;
    setMidColorGray: (colors: string[]) => string[];
    sortPalettes: (palettes: Palette[]) => Palette[];
    getDivergingColorblindSafePalettes: (sizes?: number[], includeReverse?: boolean) => Palette[];
    getPaletteByName: (name: string, size?: number, reverse?: boolean) => {
        name: string;
        colors: string[];
    };
    equalPalettes: (p1: Palette, p2: Palette) => boolean;
    domain3to5: (domain: number[]) => number[] | undefined;
    private reverse;
    private appendReversePalettes;
}
declare const _default: ColorsService;
export default _default;
//# sourceMappingURL=colors.service.d.ts.map