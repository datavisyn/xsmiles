import * as React from "react";
import "./Smiles.css";
import { SmilesElement } from "../../../types/molecule.types";
interface SmilesProps {
    smilesString: string;
    id: string;
    updateStructure(): void;
    smilesScores: number[];
    colorsDomain: number[];
    colorsRange: string[];
    alphaRange: number[];
    smilesElements: SmilesElement[];
    thresholds?: number[];
}
interface SmilesState {
    hoverController: boolean;
}
declare class Smiles extends React.Component<SmilesProps, SmilesState> {
    constructor(props: SmilesProps);
    updateComponent: () => void;
    getBarScale(maxBarSize: number): import("d3-scale").ScaleLinear<number, number, never>;
    onMouseOver: (smilesElement: SmilesElement) => void;
    onMouseOut: (smilesElement: SmilesElement) => void;
    render(): JSX.Element;
}
export default Smiles;
//# sourceMappingURL=Smiles.d.ts.map