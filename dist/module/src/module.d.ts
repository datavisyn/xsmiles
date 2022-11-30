import { SingleView, appendSingleView, Props as SProps, Molecule as SingleMolecule, MoleculeWithMethods as MWM } from "./modules/SingleView";
import { Method as MolMethod } from "./types/molecule.types";
import { GradientConfigOverwriteDefaults as ModuleGradientConfig } from "./types/gradient.types";
import { Palette as PaletteImported } from "./services/colors.service";
declare module "xsmiles";
declare const interpolate: (hexColors: string[]) => import("chroma-js").Scale<import("chroma-js").Color>;
declare const getColorPalettes: () => PaletteImported[];
export declare type SingleViewProps = SProps;
export declare type Molecule = SingleMolecule;
export declare type MoleculeWithMethods = MWM;
export declare type Method = MolMethod;
export declare type GradientConfig = ModuleGradientConfig;
export declare type Palette = PaletteImported;
export { SingleView, appendSingleView, interpolate, getColorPalettes };
//# sourceMappingURL=module.d.ts.map