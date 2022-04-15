const serverless = require('serverless-http')
const express = require('express')
require('dotenv').config()

const router = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(router)

module.exports.handler = serverless(app)
