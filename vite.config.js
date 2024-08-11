import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: path.resolve(__dirname),
    publicDir: 'public',
    resolve: {
        alias: {
        //   '@': path.resolve(__dirname, './src'),
          '@assets': path.resolve(__dirname, '/assets'),
          '@img': path.resolve(__dirname, './public/img'),
        },
      },
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
                @use "./assets/scss/breakpoints.scss";
                @use "./assets/scss/colors.scss";
                @use "./assets/scss/mixins.scss";

            `
          }
        }
    }
  })