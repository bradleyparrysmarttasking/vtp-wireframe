import * as React from 'react';
import { SVGProps } from "../SVGBase/index.js";
interface SearchProps extends SVGProps {
    title?: string;
    fill?: string;
}
declare const Search: React.FC<SearchProps>;
export default Search;
