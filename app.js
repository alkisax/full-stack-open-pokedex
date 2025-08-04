const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1.0.0')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

// minor change for testing deploy