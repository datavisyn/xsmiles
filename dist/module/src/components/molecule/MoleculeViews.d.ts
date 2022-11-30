import React from "react";
import { Method, Molecule, Vertex, RawMolecule } from "../../types/molecule.types";
import { GradientConfig } from "../../types/gradient.types";
import { MoleculeViewsConfig } from "../../types/moleculeViews.types";
import { DrawerType } from "../../types/drawer.interface";
import KDBush from "kdbush";
export interface Props {
    id: string;
    rawMolecule: RawMolecule;
    method?: Method;
    width?: number;
    height?: number;
    structureColorMode: "atom" | "attribution";
    heatmap?: boolean;
    alphaRange?: number[];
    structureColor?: string;
    background?: string;
    theme?: "light" | "dark";
    gradientConfig: GradientConfig;
    hideBarChart?: boolean;
    hideAttributesTable?: boolean;
    drawerType: DrawerType;
    scaleResolution?: number;
    bondLength?: number;
    showScoresOnStructure?: boolean;
}
interface State {
    molecule: Molecule;
    mouseOverChange: boolean;
    viewsConfig: MoleculeViewsConfig;
    kdTreeForAtoms: KDBush<Vertex> | undefined;
    mouseOverVertices: Vertex[];
}
declare class MoleculeViews extends React.Component<Props, State> {
    constructor(props: Props);
    private createMolecule;
    private initializeState;
    switchMouseOverStateController(): void;
    updateStructure: () => void;
    returnMoleculeWithVertices: (molecule: Molecule) => void;
    render(): JSX.Element | null;
    onMouseMoveOverStructure: (event: any, molecule: Molecule, scaleResolution: number) => void;
    private updateColorMaps;
    private validate;
}
export default MoleculeViews;
//# sourceMappingURL=MoleculeViews.d.ts.map