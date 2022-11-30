import { Molecule } from "../../types/molecule.types";
import { Drawer, DrawerConfig, DrawerType } from "../../types/drawer.interface";
export declare type GVertex = {
    index: number;
    smilesIndex: number;
    x: number;
    y: number;
};
export default class RDKitDrawer implements Drawer {
    gVertices: GVertex[];
    canvas: HTMLCanvasElement;
    molecule: Molecule;
    type: DrawerType;
    showScoresOnStructure: boolean;
    constructor(canvasID: string, molecule: Molecule, config: DrawerConfig);
    getRDKitMolWithAtomNotes(molecule: Molecule): any;
    scoresToRDKitLabels(atomScores: number[]): {
        [id: number]: string;
    };
    updateMoleculeWithVertices(molecule: Molecule): void;
    updateMoleculeWithOldDrawerVertices(molecule: Molecule): void;
    draw: (div: HTMLDivElement) => void;
    getMolecule: () => Molecule;
    setOriginalVerticesFromExternalDrawer: (coordinates: {
        x: number;
        y: number;
        index: number;
    }[]) => void;
    getOriginalVerticesFromExternalDrawer: () => any[];
}
//# sourceMappingURL=rdkitDrawer.d.ts.map