import * as React from "react";
interface Props {
    char: string;
    updateStructure(hoverVertices: {
        smilesElementIndex: number;
        hover: boolean;
    }[]): void;
    index: number;
    hover: boolean;
    score: number;
    width: number;
    height: number;
    x: number;
    fontSize: number;
    colorsDomain: number[];
    colorsRange: string[];
    alphaRange: number[];
}
interface SmilesCharState {
    hover: boolean;
}
declare class SmilesChar extends React.Component<Props, SmilesCharState> {
    alphaScale: any;
    colorScale: any;
    barScale: any;
    maxBarSize: number;
    constructor(props: Props);
    updateAlphaScaler(props: Props): void;
    updateColorScale(props: Props): void;
    updateBarScale(props: Props): void;
    update(nextProps: Props): void;
    render(): JSX.Element;
}
declare const _default: React.MemoExoticComponent<typeof SmilesChar>;
export default _default;
//# sourceMappingURL=SmilesChar.d.ts.map