// initialize express
const express = require('express')
const app = express()

// database
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

// parse request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// api routes
const routes = require('./routes/apiRoutes')
app.use(routes)

// Send every other request to the React app
const path = require('path')
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// port
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`))
