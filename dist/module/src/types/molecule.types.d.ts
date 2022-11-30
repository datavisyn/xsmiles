export declare type Method = {
    name: string;
    scores: number[];
    attributes: {
        [id: string]: number | string;
    };
};
export interface MoleculeFromJson {
    string: string;
    sequence?: string[];
    methods: Method[];
    attributes?: {
        [id: string]: number | string;
    };
    index?: number;
}
export interface ProcessedMoleculeFromJson extends MoleculeFromJson {
    id: string;
    sequence?: string[];
    maxStd: number;
    std: number;
    mean: number;
    index: number;
    substructureHighlight?: string;
}
export interface RawMolecule {
    id: string;
    index: number;
    string: string;
    substructureHighlight?: string;
    sequence?: string[];
    method: Method;
    attributes: {
        [id: string]: number | string;
    };
}
export interface Molecule extends RawMolecule {
    smilesElements: SmilesElement[];
    sequence: string[];
    vertices: Vertex[] | undefined;
}
export declare type SmilesElement = {
    smilesIndex: number;
    chars: string;
    groupIndex: number;
    vertex: Vertex | null;
    branchesIds: number[] | undefined;
    rings: number[] | undefined;
    score: number;
};
export declare type Vertex = {
    position: {
        x: number;
        y: number;
    };
    atomIndex: number;
    atomSmilesElement: SmilesElement;
    hover: boolean;
};
export declare type DomainByModelHash = {
    [id: string]: number[];
};
export declare type MoleculesDataset = MoleculeFromJson[] | null;
//# sourceMappingURL=molecule.types.d.ts.map