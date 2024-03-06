import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Counter': './src/lib/Counter.svelte',
      },
      shared: ['svelte', 'tailwindcss']
    })
  ],
})
