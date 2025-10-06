import http from 'node:http' // import ditto from './data/pokeDitto.json' // Assert  Es para que no tire error al importar un json
// eslint-disable-next-line 
import ditto from './data/pokeDitto.json' with { type: 'json' }

const desiredPort = process.env.PORT ?? 1234
const procesarRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(ditto))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>No se encontro lo especificado...tontito!</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          req.on('data', chunk =>{ // A medida que escucho por el evento, y me va llegando data lo concateno
            body += chunk.toString()
          })
          
          req.on('end', () =>{ // Cuando termino de escuchar y llega ultimo dato, parseo y devuelvo
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' }) // 201 es creado
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404</h1>')
      }
  }
}

const server = http.createServer(procesarRequest)

server.listen(desiredPort, () => {
  console.log(`Server is running on port http://localhost:${desiredPort}/`)
})
