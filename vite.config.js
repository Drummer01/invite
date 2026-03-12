import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.MP4'],
  base: 'https://drummer01.github.io/invite/',
})
