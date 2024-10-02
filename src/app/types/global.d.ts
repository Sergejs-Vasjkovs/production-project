declare module "*.scss" {
    interface IClassNames {
        [className: string]: string;
    }
    const classnames: IClassNames;
    export = classnames;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
    import React from "react";
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS_DEV__: boolean;
e;
declare const __API__: string;
