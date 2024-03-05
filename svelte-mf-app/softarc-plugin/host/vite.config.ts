import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { federation } from '@module-federation/vite';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { sveltePlugin } from './module-federation/esbuild-svelte-plugin';
import { writeFileSync, existsSync, mkdirSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
	const selfEnv = loadEnv(mode, process.cwd());
  return {
    server: {
      port: 3000,
    },
    plugins: [
      {
        name: "generate-enviroment",
        options: function () {
          console.info("selfEnv", selfEnv);
          if (!existsSync("dist")){
            mkdirSync("dist");
          }
          writeFileSync(
            "./dist/remoteEntry.json",
            `{}`
          );
        },
      },
      await federation({
        options: {
          workspaceRoot: __dirname,
          outputPath: 'dist',
          tsConfig: 'tsconfig.json',
          federationConfig: 'module-federation/federation.config.cjs',
          verbose: false,
          dev: command === 'serve',
        },
        adapter: createEsBuildAdapter({
          plugins: [sveltePlugin],
        }),
      }),
      svelte()
    ],
  }
});
