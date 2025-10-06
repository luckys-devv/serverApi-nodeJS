import http from 'node:http'
import fs from 'node:fs'
// node --watch server.js
// Recordar que los headers es informacion que va pegada a la peticioion o respuesta para darle mas contexto a la peticion o respuesta
/**
 * Metodos mas conocidos
 * GET: Obtener datos
 * POST: Crear entidad de un recurso
 * PUT: Reemplazar o actualizar un recurso que ya existe
 * DELETE: Eliminar un recurso
 * PATCH: Actualizar o modificar parcialmente un recurso
 */
const desiredPort = process.env.PORT ?? 1234

const procesarRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('Holis, bienvesssnido!!!')
  } else if (req.url === '/about') {
    res.statusCode = 200
    res.end('Acerca de mi perritos')
  } else if (req.url === '/img.png') {
    fs.readFile('./resources/gps128.png', (err, data) => { // Data es un buffer de datos. Un buffer es una clase que lee datos binarios. Lee los datos y los deja reservado en un espacio de memoria
      if (err) {
        res.statusCode = 500
        res.end('Error al leer la imagen - Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.end('No encontré lo que buscabas :(')
  }
}
const server = http.createServer(procesarRequest)

server.listen(desiredPort, () => {
  console.log(`Server is running on port http://localhost:${desiredPort}`)
})
