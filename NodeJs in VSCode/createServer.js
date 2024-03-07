const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.send('Request received')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server listens on port ${PORT}`))