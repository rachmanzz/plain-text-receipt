import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
    input: "./src/index.ts",
    output: {
      file: "./dist/plain-receipt.js",
      format: "iife",
      name: "plainreceipt"
    },
    plugins: [
      nodeResolve(),
      typescript({lib: ["es5", "es6", "dom"], target: "es5"})
    ]
};

