const server = require('./server')
const db = require('./data/carsModule')

server.get('/api/cars', async (req, res) => {
  try {
    const cars = await db('cars')
    res.status(200).json(cars)
  }


  catch (err) {
    res.status(500).json({ message: 'Sorry, Something went wrong', error: err })
  }
})

server.post('/api/cars', async (req, res) => {
  try {

    const { vin, make, model, milage } = req.body
    if (vin && make && model && milage) {
      const id = await db('cars').insert(req.body)
      res.status(201).json((await db('cars').where({ id }))[0])
    }
    else {
      res.status(400).json({ message: `Please provide the following, {${!vin && 'vin,'} ${!make && 'make,'} ${!vin && 'model,'} ${!milage && 'milage'}}` })
    }
  }
  catch (err) {
    res.status(500).json({ message: 'Sorry, Something went wrong', error: err })
  }
})

server.put('/api/cars/:id', async (req, res) => {
  try {
    const { vin, make, model, milage } = req.body
    const { id } = req.params
    if (vin && make && model && milage) {
      const count = await db('cars').update(req.body).where({ id })
      if (count > 0) {
        res.status(200).json(await db('cars').where({ id }))
      }
      else {
        res.status(404).json({ message: 'sorry, that id does not exist' })
      }
    }
    else {
      res.status(400).json({ message: `Please provide the following, {${!vin && 'vin,'} ${!make && 'make,'} ${!vin && 'model,'} ${!milage && 'milage'}}` })
    }
  }
  catch (err) {
    res.status(500).json({ message: 'Sorry, Something went wrong', error: err })
  }
})


server.delete('/api/cars/:id', async (req, res) => {
  try {
    const { id } = req.params
    const count = await db('cars').del().where({ id })
    if (count > 0) {
      res.status(204).end()
    }
    else {
      res.status(404).json({ message: 'sorry, that id does not exist' })
    }
  }
  catch (err) {
    res.status(500).json({ message: 'Sorry, Something went wrong', error: err })
  }
})





server.listen(5000, () => {
  console.log('listening on 5000')
})