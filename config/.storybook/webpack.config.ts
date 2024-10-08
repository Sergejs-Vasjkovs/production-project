// import webpack, { RuleSetRule } from "webpack";
// import path from "path";
// import { buildCssLoader } from "../build/loaders/buildCssLoader";
// import { BuildPaths } from "../build/types/config";

// export default ({ config }: { config: webpack.Configuration }) => {
//     const paths: BuildPaths = {
//         build: "",
//         html: "",
//         entry: "",
//         src: path.resolve(__dirname, "..", "..", "src"),
//     };
//     config.resolve.modules.push(paths.src);

//     config.resolve.extensions.push(".ts", ".tsx");

//     config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
//         if (/svg/.test(rule.test as string)) {
//             return { ...rule, exclude: /\.svg$/i };
//         }

//         return rule;
//     });

//     config.module.rules.push({
//         test: /\.svg$/,
//         use: ["@svgr/webpack"],
//     });

//     config.module.rules.push(buildCssLoader(true));

//     return config;
// };

//fixed all warning by AI
import webpack, { DefinePlugin } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve = config.resolve || {};
    config.resolve.modules = config.resolve.modules || [];
    config.resolve.extensions = config.resolve.extensions || [];

    config.resolve.modules.push(paths.src);

    config.resolve.extensions.push(".ts", ".tsx");

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.module.rules = config.module.rules.map((rule) => {
        if (rule && typeof rule === "object" && rule.test && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    config.module.rules.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(""),
        }),
    );

    return config;
};
