const path = require('path')

export default {
  base: process.env.NODE_ENV === 'production' ? '/lerninstitut-archimedes.github.io/' : './',
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}
