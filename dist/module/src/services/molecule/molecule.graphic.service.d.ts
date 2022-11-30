import { SmilesElement } from "../../types/molecule.types";
declare class SmilesGraphicService {
    setHoverOfAllSmilesElements(atomElements: SmilesElement[], hover?: boolean): void;
    setHoverOfBranchGivenElement(smilesElements: SmilesElement[], smilesElement: SmilesElement, hover?: boolean): void;
    setHoverOfAtom(smilesElement: SmilesElement, hover?: boolean): void;
    setHoverOfRingGivenElement(smilesElements: SmilesElement[], smilesElement: SmilesElement, hover?: boolean): void;
    setVerticesHoverStateBasedOnType(smilesElements: SmilesElement[], hoverElements: SmilesElement[], hover?: boolean): void;
}
declare const _default: SmilesGraphicService;
export default _default;
//# sourceMappingURL=molecule.graphic.service.d.ts.map