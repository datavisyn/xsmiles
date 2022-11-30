/// <reference types="react" />
import { Method } from "src/types/molecule.types";
declare type Props = {
    smilesAttributes: {
        [key: string]: string | number;
    };
    methodAttributes: {
        [key: string]: string | number;
    };
    method: Method;
    colorsDomain: number[] | undefined;
    maxWidth: number;
};
export default function Legend(props: Props): JSX.Element;
export {};
//# sourceMappingURL=Legend.d.ts.map