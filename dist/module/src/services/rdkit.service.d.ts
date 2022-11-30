import { Molecule } from "../types/molecule.types";
import RDKitDrawer from "./drawers/rdkitDrawer";
declare class RDKitServices {
    setVerticesInMolecule(molecule: Molecule, rdkitDrawer: RDKitDrawer): void;
    private findGVertex;
    private createVertex;
    getMoleculeSVG(smiles: string, config: {
        width: number;
        height: number;
    }): string;
    drawMoleculeCanvas(smiles: string, config: {
        width: number;
        height: number;
    }): string;
    private getCommands;
    private getMCommand;
    private getLCommand;
    private getSource;
    private getTarget;
    private getCoordinatesFromEdge;
    private getPointsFromPath;
    private getMidPointFromPath;
    private getCoordinatesFromVertex;
    private getBBox;
    private getCentroidFromPoints;
    private getVertex;
    private getCandidatePaths;
    private getEdgeLength;
    private isConnecting;
    private getVertexFromIndexedPath;
    private getBestBond;
    private getBondsNames;
    private getIndexedPathList;
    getMaxEdgeLength: (svg: string) => number;
    private getMaxEdgeLengthFromVertex;
    getAtomsCoordinatesFromSVG(svg: string): {
        x: number;
        y: number;
        index: number;
    }[];
    private getAtomsIndexes;
    private getPathNodesFromSVG;
    test(smiles: string): void;
}
declare const _default: RDKitServices;
export default _default;
//# sourceMappingURL=rdkit.service.d.ts.map