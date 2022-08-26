require('./db/mongoose')

// const port = process.env.PORT || 3001
const port = 3001 //rc95 26/08/2022 01:10 - forzamos el puerto en heroku
const express = require('express')
const app = express()

//rc95 25/08/2022 02:29
const cors = require('cors')
app.use(cors({ origin: "*" }))

// JSON Middleware
app.use(express.json());

// Import routes
const notesRouter = require('./routes/notesRoutes')

// Route middleware
app.use("/api/notes", notesRouter);

app.get("/api/ping", (req, res) => {
    res.send('pong')
});

app.get('/*', (req, res) => {
    res.status(404).send()
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`)
})