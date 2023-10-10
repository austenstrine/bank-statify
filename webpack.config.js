// webpack.config.js

const path = require('path');

module.exports = {
  // Your Webpack configuration settings here
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    https: true, // Enable HTTPS
    key: fs.readFileSync('C:/wamp64/bin/apache/apache2.4.54.2/conf/key/private.key'), // Path to your SSL key file
    cert: fs.readFileSync('C:/wamp64/bin/apache/apache2.4.54.2/conf/key/certificate.crt'), // Path to your SSL certificate file
    public: 'www.bankstatify.com:443', // Define the public hostname and port
  },
};