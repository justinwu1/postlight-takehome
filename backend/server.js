const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

// Cors
app.use(cors())

// body parser middleware(validate data so we can pass data into req.body)
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5000 // if there is a port in .env, if not default 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))