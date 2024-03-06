import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    svelte(),
    federation({
      name: 'host',
      remotes: {
        'remote': 'remote@http://localhost:4173/assets/remoteEntry.js',
      }
    }),
  ],
})
