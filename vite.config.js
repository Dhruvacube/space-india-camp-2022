const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        guests: resolve(__dirname, 'guests.html'),
        competitions: resolve(__dirname, 'competitions.html'),
        activities: resolve(__dirname, 'activities.html'),
        contactus: resolve(__dirname, 'contactus.html'),
        workshops: resolve(__dirname, 'workshops.html'),
        sponsers: resolve(__dirname, 'sponsers.html'),
      }
    }
  }
})