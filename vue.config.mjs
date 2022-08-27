import { defineConfig } from "@vue/cli-service";

export default defineConfig({
  chainWebpack: (config) => {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete("fork-ts-checker");
  },
});
