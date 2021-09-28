const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const seedDatabase = require('./utils/seedDatabase')
const Employee = require('./models/employees.model')

require('dotenv').config()

const app = express()

// Cors
app.use(cors())

// body parser middleware(validate data so we can pass data into req.body)
app.use(express.json({ extended: false }))
const uri = process.env.ATLAS_URI

// Connect to the database and output if connected successfully.
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB database connection established succssfully')

  // If the employee collection is empty, we seed 20 random data for the collection.
  Employee.count((err,count)=>{
      if(!err && count === 0){
        seedDatabase()
      }
  })
})

const employeesRouter = require('./routes/employees')

app.use('/', employeesRouter)
app.get('/', (req, res) => res.send('API running'))

const PORT = process.env.PORT || 5000 // if there is a port in .env, if not default 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))