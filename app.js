var express = require('express')
var port = process.env.PORT || 80
var app = express()
var ejs = require('ejs')
var path = require('path')

app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.set('views', './views')
app.listen(port)
console.log('myBlog is starting on port:' + port)
app.use(express.static(path.join(__dirname)))

app.get('/', function(req, res) {
  if(err) {
    console.log(err)
  }
  res.render('index', {})
})
