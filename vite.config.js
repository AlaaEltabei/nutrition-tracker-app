import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Nutrition Tracker',
        short_name: 'Nutrition',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4caf50',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/nutrition-tracker-app/'
})
