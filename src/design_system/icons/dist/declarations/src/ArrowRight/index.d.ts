import * as React from 'react';
import { SVGProps } from "../SVGBase/index.js";
interface ArrowRightProps extends SVGProps {
    title?: string;
    fill?: string;
}
declare const ArrowRight: React.FC<ArrowRightProps>;
export default ArrowRight;