import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/potato-fe-1/dist/', github部署时需要放入base 
  plugins: [vue()]
})
