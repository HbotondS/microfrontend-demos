import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remote: {
          external: 'http://localhost:3000/remoteEntry.js',
          externalType: 'url',
          format: 'var',
          from: 'webpack'
        }
      },
      shared: ['react', 'react-dom'],
    })
  ],
})
