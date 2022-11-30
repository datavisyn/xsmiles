import * as React from "react";
import { Molecule } from "../../../../types/molecule.types";
import { Drawer, DrawerConfig } from "../../../../types/drawer.interface";
interface Props {
    id: string;
    width?: number;
    height?: number;
    drawerConfig: DrawerConfig;
    returnMoleculeWithVertices: (molecule: Molecule) => void;
    molecule: Molecule;
}
declare type State = {
    drawer: Drawer | null;
    molecule: Molecule;
};
declare class Structure extends React.PureComponent<Props, State> {
    ref: any;
    constructor(props: Props);
    componentDidMount(): void;
    resetCanvas: (canvas: HTMLCanvasElement) => void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
declare const _default: React.MemoExoticComponent<typeof Structure>;
export default _default;
//# sourceMappingURL=Structure.d.ts.map