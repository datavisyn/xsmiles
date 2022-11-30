import { MoleculeFromJson, ProcessedMoleculeFromJson } from "../types/molecule.types";
import { RankingType } from "src/types/app.types";
declare class MoleculesDatasetService {
    getVersionControlledData(json: any): MoleculeFromJson[];
    private getScoresFromMolecule;
    private getScoresFromMolecules;
    private getSignedMeanScoreFromMoleculesNoOutliers;
    private getSignedStdScoreFromMoleculesNoOutliers;
    private getSignedMinMaxScoreFromMolecules;
    private getPositiveScores;
    private getNegativeScores;
    private signedZScore;
    private normalize;
    private signedNormalize;
    private getMinMax;
    filterOutliers(someArray: number[]): number[];
    private standardizeMethodScores;
    divergingNormalize(molecules: MoleculeFromJson[], methodName: string): void;
    private standardizeMethodsScores;
    preprocess: (molecules: MoleculeFromJson[], scale?: boolean) => ProcessedMoleculeFromJson[];
    cloneData: (molecules: MoleculeFromJson[]) => MoleculeFromJson[];
    getSmallExample: () => MoleculeFromJson[];
    getMethodsNames(molecules: MoleculeFromJson[]): Set<string>;
    getAttributesNames(molecules: ProcessedMoleculeFromJson[]): string[];
    sortRowsByRankingType(moleculesDataset: ProcessedMoleculeFromJson[], type: RankingType): ProcessedMoleculeFromJson[];
}
declare const _default: MoleculesDatasetService;
export default _default;
//# sourceMappingURL=molecules.dataset.service.d.ts.map