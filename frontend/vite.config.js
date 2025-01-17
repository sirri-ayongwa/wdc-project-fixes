import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// export default defineConfig({
// server: { https: true }, // Not needed for Vite 5+
// plugins: [ react(), mkcert() ]
// });

//https://vitejs.dev/config/
export default defineConfig({
  // server: { https: true }, 
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-helmet-async"], // Add react-helmet-async as an external dependency
    },
  },
})
