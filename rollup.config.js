const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;

const packageJson = require("./package.json");

module.exports = [
  // Build principal
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.build.json",
      }),
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
      "react",
      "react-dom",
    ],
  },
  // Build SSR
  {
    input: "src/ssr-index.ts",
    output: [
      {
        file: "dist/ssr-exports.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/ssr-exports.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.build.json",
      }),
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
      "react",
      "react-dom",
    ],
  },
  // Types principaux
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
  // Types SSR
  {
    input: "dist/ssr-exports.d.ts",
    output: [{ file: "dist/ssr-exports.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
