import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '',
  plugins: [react(), viteTsconfigPaths()],
  build: {
    outDir: './build',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
})
