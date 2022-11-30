import * as React from "react";
import { StructureViewConfig } from "../../../../types/structure.types";
import { Vertex } from "../../../../types/molecule.types";
interface Props {
    hoverVertices: Vertex[];
    config: StructureViewConfig;
    scaleResolution: number;
}
declare function Highlight(props: Props): JSX.Element | null;
declare const _default: React.MemoExoticComponent<typeof Highlight>;
export default _default;
//# sourceMappingURL=Highlight.d.ts.map