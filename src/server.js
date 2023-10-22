const express = require('express') // commonjs
const app = express() // app express
const port = 8080E
 // server

app.get('/tin-tuc', (req, res) => {
 return res.send('Hello World with NPT');
})

// app.use('/api/', router)
app.listen(port, () => {
    console.log(`listening on port ' + ${port}`)
})
