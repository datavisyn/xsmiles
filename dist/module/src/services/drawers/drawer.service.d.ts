import { DrawerConfig } from "../../types/drawer.interface";
import { Molecule } from "../../types/molecule.types";
import RDKitDrawer from "./rdkitDrawer";
declare class DrawerService {
    createDrawer(id: string, molecule: Molecule, drawerConfig: DrawerConfig): RDKitDrawer | undefined;
}
declare const _default: DrawerService;
export default _default;
//# sourceMappingURL=drawer.service.d.ts.map