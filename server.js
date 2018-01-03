const graphqlExpress = require('graphql-server-express').graphqlExpress;
const graphiqlExpress = require('graphql-server-express').graphiqlExpress;
const schema = require('./server/schema');

const path = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const env = process.env.ENV || 'dev';

const express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, 'dist')));

// Webpack hot reload middleware
if(env === 'dev') {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(webpackMiddleware(compiler, {
    // webpack-dev-middleware options
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
  }));
}

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log("Listening on port", port));
