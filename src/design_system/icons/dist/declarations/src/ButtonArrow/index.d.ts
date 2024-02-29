import * as React from 'react';
import { SVGProps } from "../SVGBase/index.js";
interface ButtonArrowProps extends SVGProps {
    title?: string;
    fill?: string;
}
declare const ButtonArrow: React.FC<ButtonArrowProps>;
export default ButtonArrow;
