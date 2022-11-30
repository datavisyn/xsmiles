import { Method, Molecule } from "./molecule.types";
export declare type DrawerConfig = {
    width: number;
    height: number;
    structureColor: string;
    method: Method;
    drawerType: DrawerType;
    scaleResolution: number;
    bondLength: number;
    showScoresOnStructure: boolean;
};
export declare type DrawerType = "RDKitDrawer" | "RDKitDrawer_black";
export interface Drawer {
    type: DrawerType;
    draw(div: HTMLDivElement): any;
    getOriginalVerticesFromExternalDrawer(): any[];
    getMolecule(): Molecule;
    updateMoleculeWithOldDrawerVertices(molecule: Molecule): any;
}
//# sourceMappingURL=drawer.interface.d.ts.map