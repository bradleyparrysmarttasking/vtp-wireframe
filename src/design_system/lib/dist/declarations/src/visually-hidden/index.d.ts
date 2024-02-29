declare function visuallyHidden({ important: isImportant, focusable: isFocusable }?: {
    important?: boolean;
    focusable?: boolean;
}): {
    [key: string]: string | {
        [key: string]: string;
    };
};
declare namespace visuallyHidden {
    var focusable: typeof import("./index.js").focusable;
}
declare function focusable({ important }?: {
    important?: boolean;
}): {
    [key: string]: string | {
        [key: string]: string;
    };
};
export default visuallyHidden;
export { focusable };
