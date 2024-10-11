export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additonal: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additonal.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(" ");
}
