import { Method } from "../types/molecule.types";
import { GradientConfigOverwriteDefaults } from "../types/gradient.types";
import "./SingleView.css";
import { DrawerType } from "../types/drawer.interface";
export declare type Props = {
    molecule: Molecule;
    gradientConfig: GradientConfigOverwriteDefaults;
    drawerType: DrawerType;
    width?: number;
    height?: number;
    bondLength?: number;
    hideBarChart?: boolean;
    hideAttributesTable?: boolean;
    showScoresOnStructure?: boolean;
};
export declare type Molecule = {
    string: string;
    sequence?: string[];
    method: Method;
    attributes: {
        [id: string]: number | string;
    };
};
export declare type MoleculeWithMethods = {
    string: string;
    sequence?: string[];
    methods: Method[];
    attributes: {
        [id: string]: number | string;
    };
};
export declare var SingleViewCounter: number;
export declare const SingleView: (props: Props) => JSX.Element;
export declare const appendSingleView: (div: HTMLDivElement, props: Props) => void;
export declare const appendSingleViewCallBack: (div: HTMLDivElement, props: Props, callback: () => void) => void;
export default SingleView;
//# sourceMappingURL=SingleView.d.ts.map