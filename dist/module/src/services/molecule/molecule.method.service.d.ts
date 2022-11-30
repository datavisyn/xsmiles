import { ColorDomainType } from "src/types/app.types";
import { Method, MoleculeFromJson } from "../../types/molecule.types";
declare class MoleculeMethodService {
    scoresFromMethods: (molecule: MoleculeFromJson) => number[];
    getDomainByModelHash(molecules: MoleculeFromJson[]): any;
    getDomainFromDataset(molecules: MoleculeFromJson[]): number[];
    getDomainFromMolecule(molecule: MoleculeFromJson): number[];
    getDomainFromMoleculeByMethod(molecule: MoleculeFromJson, methodName: string): number[];
    getColorDomainByType(colorDomainType: ColorDomainType, globalScoresDomain: number[], domainByModel: any, method?: Method, molecule?: MoleculeFromJson): number[];
}
declare const _default: MoleculeMethodService;
export default _default;
//# sourceMappingURL=molecule.method.service.d.ts.map