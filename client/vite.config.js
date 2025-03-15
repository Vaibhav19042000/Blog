import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
 target: "https://0kzm7wvu4b.execute-api.ap-south-1.amazonaws.com",
        changeOrigin: true,
        secure: false, // Disable SSL verification
      }
    }
  },
  plugins: [react()],
})
