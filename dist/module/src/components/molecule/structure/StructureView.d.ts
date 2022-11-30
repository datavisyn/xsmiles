/// <reference types="react" />
import { DrawerConfig } from "../../../types/drawer.interface";
import { Molecule } from "../../../types/molecule.types";
import { StructureViewConfig } from "../../../types/structure.types";
interface Props {
    id: string;
    onMouseMove: (event: any) => void;
    config?: StructureViewConfig;
    drawerConfig: DrawerConfig;
    molecule: Molecule;
    returnMoleculeWithVertices: (molecule: Molecule) => void;
}
export default function StructureView(props: Props): JSX.Element;
export {};
//# sourceMappingURL=StructureView.d.ts.map