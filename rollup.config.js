import { importMetaAssets } from "@web/rollup-plugin-import-meta-assets";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "es",
  },
  plugins: [importMetaAssets()],
};
