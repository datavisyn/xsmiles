import React from "react";
import { StructureViewConfig } from "../../../../types/structure.types";
import { Molecule, Vertex } from "../../../../types/molecule.types";
interface Props {
    molecule: Molecule;
    vertices: Vertex[] | undefined;
    config: StructureViewConfig;
    scaleResolution: number;
}
interface State {
}
declare class Heatmap extends React.PureComponent<Props, State> {
    private divRef;
    state: {
        vertices: never[];
    };
    updateHeatmap(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
declare const _default: React.MemoExoticComponent<typeof Heatmap>;
export default _default;
//# sourceMappingURL=Heatmap.d.ts.map