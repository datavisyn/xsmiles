import { Molecule } from "../types/molecule.types";
import { Gradient } from "../types/gradient.types";
declare class HeatmapService {
    appendHeatmap: (parent: HTMLElement, molecule: Molecule, gradient: Gradient, scaleResolution: number) => void;
    private adaptValueToBeOverThresholds;
}
declare const _default: HeatmapService;
export default _default;
//# sourceMappingURL=heatmap.service.d.ts.map