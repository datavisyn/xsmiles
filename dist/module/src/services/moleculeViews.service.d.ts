import { Props as MoleculeViewProps } from "../components/molecule/MoleculeViews";
import { MoleculeViewsConfig } from "../types/moleculeViews.types";
declare class MoleculeViewsService {
    validate(props: Readonly<MoleculeViewProps> & Readonly<{
        children?: import("react").ReactNode;
    }>): void;
    covertTo3ColorRangeForSmilesBars: (colors: string[]) => string[];
    getConfigBasedOnPropsAndMethod: (props: MoleculeViewProps) => MoleculeViewsConfig;
    updateColorRange: (config: MoleculeViewsConfig) => {
        width: number;
        height: number;
        hideBarChart: boolean;
        hideAttributesTable: boolean;
        theme: string;
        structureColor: string;
        alphaRange: number[];
        background: string;
        smilesAlphaRange: number[];
        numerical: boolean;
        heatmap: boolean;
    };
}
declare const _default: MoleculeViewsService;
export default _default;
//# sourceMappingURL=moleculeViews.service.d.ts.map