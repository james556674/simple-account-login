const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginCheck = require('./loginCheck')

const app = express()
const PORT = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  if (loginCheck(req.body)) {
    return res.render('welcome')
  } else {
    let alertNews = `
      <div class="alert alert-danger" role="alert">
        Wrong email or Wrong password!
      </div>`
    return res.render('index', { alertNews })
  }
})

app.listen(PORT, () => {
  console.log(`this express is running on https://localhost:${PORT}`)
})