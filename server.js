var express = require('express')
var path = require('path')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')

var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

var env = process.env.NODE_ENV

if (env === 'production') {
  app.use(express.static(__dirname))

  // app.use('/api', require('./server/api'));

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })
} else {
  var config = require('./webpack.config.js')
  var compiler = webpack(config)

  app.use(express.static(__dirname))

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }))

  // app.use('/api', require('./server/api'));

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })
}

app.listen(8080, function () {
  console.log('Your app listening on 8080! have a nice day:)')
})
