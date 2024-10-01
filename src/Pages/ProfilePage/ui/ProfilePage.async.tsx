import { lazy } from "react";

export const ProfilePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // DO NOT DO THIS IN REAL PROJECTS!!!!! WE DO IT FOR THE COURSE!
            setTimeout(() => resolve(import("./ProfilePage")), 500);
        }),
);
