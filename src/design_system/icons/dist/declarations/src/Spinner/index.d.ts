import * as React from 'react';
import { SVGProps } from "../SVGBase/index.js";
interface SpinnerProps extends SVGProps {
    className?: string;
    title?: string;
    fill?: string;
}
declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
