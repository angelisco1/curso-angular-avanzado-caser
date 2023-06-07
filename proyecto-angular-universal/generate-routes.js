const fs = require('fs/promises')
const axios = require('axios')


axios.get('https://digimon-api.vercel.app/api/digimon')
  .then((resp) => {
    const digimons = resp.data
    const digimonsRoutes = digimons.map(digimon => `/digimon/${digimon.name}`)
    const digimonsRoutesStr = digimonsRoutes.join('\n')
    return fs.writeFile('rutas-digimons.txt', digimonsRoutesStr)
  })
  .then(() => {
    console.log('FIN')
  })