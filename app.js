/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1.0.1')
})
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  // if (true) throw('error...  ')
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

// minor code change for testing github actions
const hello = 'hello'
console.log(hello)

// minor commit with #skip