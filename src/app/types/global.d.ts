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

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
