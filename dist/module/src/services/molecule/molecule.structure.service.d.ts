import { Molecule, Method, SmilesElement, MoleculeFromJson, ProcessedMoleculeFromJson, RawMolecule, Vertex } from "../../types/molecule.types";
import { Drawer } from "src/types/drawer.interface";
declare class MoleculeStructureService {
    getCxSmilesWithScores(molecule: Molecule): string;
    getAtomsScores(molecule: Molecule): number[];
    createRawMolecule(processedJsonMolecule: ProcessedMoleculeFromJson, selectedMethod: Method): import("../../types/molecule.types").RawMolecule;
    getVerticesFromMolecule(molecule: Molecule): Vertex[];
    getHoveredVerticesFromMolecule(molecule: Molecule): Vertex[];
    getHoverStatusFromAtoms(indexedSmilesElements: SmilesElement[]): boolean[];
    cloneMoleculeFromJson: (molecule: MoleculeFromJson) => {
        string: string;
        sequence?: string[] | undefined;
        methods: Method[];
        attributes?: {
            [id: string]: string | number;
        } | undefined;
        index?: number | undefined;
    };
    cloneMolecule: (molecule: Molecule) => {
        smilesElements: SmilesElement[];
        sequence: string[];
        vertices: Vertex[] | undefined;
        id: string;
        index: number;
        string: string;
        substructureHighlight?: string | undefined;
        method: Method;
        attributes: {
            [id: string]: string | number;
        };
    };
    cloneMethod: (method: Method) => {
        name: string;
        scores: number[];
        attributes: {
            [id: string]: string | number;
        };
    };
    getElementsIfInAllBranches(smilesElements: SmilesElement[], branches: number[]): SmilesElement[];
    setSmilesElementsBranches: (smilesElements: SmilesElement[]) => void;
    getRingContext: (indexedSmilesElements: SmilesElement[], start: number, visited: number[]) => {
        visited: number[];
        lastIndex: number;
    };
    preprocessSmilesElementsAndMethod: (rawMolecule: RawMolecule) => Molecule;
    extractSmilesElementsAndMethods(smilesString: string | undefined, smilesSequence: string[] | undefined, method: Method | undefined): {
        smilesSequence: string[];
        smilesMethod: {
            name: string;
            scores: number[];
            attributes: {
                [id: string]: string | number;
            };
        };
    };
    parseAtoms(smilesString: string): {
        vIndex: number;
        match: RegExpMatchArray;
    }[];
    createSmilesElements(smilesSequence: string[], smilesScores: number[]): SmilesElement[];
    findNonRingSmilesElements(indexedSmilesElements: SmilesElement[]): SmilesElement[];
    getElementsInTheSameGroup(indexedSmilesElements: SmilesElement[], element: SmilesElement): SmilesElement[];
    setRingIdOfNumericalSmilesElements: (smilesElements: SmilesElement[]) => void;
    setRingsIntoSmilesElements: (smilesElements: SmilesElement[]) => void;
    private appendRingToSmilesElements;
    spreadVerticesToOtherSmilesElements(smilesElements: SmilesElement[]): void;
    findGVertexFromGroupedElements: (vertices: any[], groupedElements: SmilesElement[], findGVertex: (gVertices: any[], smilesElement: SmilesElement) => any) => any | undefined;
    private setRingsInSmilesElements;
    notAtom: Set<string>;
    smilesElementIsAtom: (smilesElement: SmilesElement) => boolean;
    smilesElementIsHydrogen: (smilesElement: SmilesElement) => boolean;
    setWhichElementIsInWhichRing(smilesElements: SmilesElement[], drawer: Drawer, findGVertex: (gVertices: any[], smilesElement: SmilesElement) => any): void;
    setVerticesInSmilesElements(smilesElements: SmilesElement[], drawer: Drawer, findGVertex: (gVertices: any[], smilesElement: SmilesElement) => any, createVertex: (smilesElement: SmilesElement, gVertex: any) => Vertex | null, debug?: boolean): void;
    getNAtomsFromSmilesString(smilesString: string): number;
}
declare const _default: MoleculeStructureService;
export default _default;
//# sourceMappingURL=molecule.structure.service.d.ts.map