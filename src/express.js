import express from 'express'
import ditto from './data/pokeDitto.json' with { type: 'json' }

const PORT = process.env.PORT ?? 3000

const app = express()
app.disable('x-powered-by') // Por seguridad - Oculta la tegnologia

// El middleware es una fx que se ejecuta entre la request y la respuesta
// Se puede pasar el endpoint especifico o para un metodo en particular
// Esto que estamos haciendo en el ejemplo de abajo, se resume a un app.use(express.json()) 
// Lo que estamos viendo es como funciona el express.json por debajo

app .use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()
    
  //Solo llega si es post y es un json
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })
  
  req.on('end', () => { // Cuando termino de escuchar y llega ultimo dato, parseo y devuelvo
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // Mutamos la request y metemos la info en req.body
    req.body = data
    next()
  })
})

// GET
app.get('/pokemon/ditto', (req, res) => {
  res.status(200).json(ditto)
})

// POST
app.post('/pokemon', (req, res) => {
  res.status(200).json(req.body)
})

// La ultima request a la cual llega.
app.use(( req, res )=> {
  res.status(404).send('<h1>404</h1>')
}) 

app.listen(PORT, () => {
  console.log(`Server express running on http://localhost:${PORT}`)
})
