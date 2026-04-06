import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // This ensures all your images in assets are cached for offline use
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg}']
      },
      manifest: {
        name: 'Naff Mwaura Portfolio',
        short_name: 'NaffPort',
        description: 'Software Developer & AI/ML Engineer Portfolio',
        theme_color: '#0b0c2a',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})







//  plugins: [react(),],
