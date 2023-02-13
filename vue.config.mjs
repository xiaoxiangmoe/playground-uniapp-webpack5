import { defineConfig } from '@vue/cli-service';
import ScriptSetup from 'unplugin-vue2-script-setup/webpack';

export default defineConfig({
  configureWebpack: {
    plugins: [
      ScriptSetup({
        reactivityTransform: true,
      }),
    ],
  },
  chainWebpack: (config) => {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete('fork-ts-checker');
  },
});
