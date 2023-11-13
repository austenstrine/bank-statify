const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 443;

const options = {
  key: fs.readFileSync('C:/wamp64/bin/apache/apache2.4.54.2/conf/key/private.key'),
  cert: fs.readFileSync('C:/wamp64/bin/apache/apache2.4.54.2/conf/key/certificate.crt'),
  rejectUnauthorized: false//for dev only, because I'm using a self-signed certificate
};
const hostname = 'www.bankstatify.com';

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = https.createServer(options, app);

server.listen(port, hostname, () => {
  console.log(`Server is running on https://localhost:${port}`);
});

const insecureServer = http.createServer((req,resp)=>{
  resp.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  resp.end();
});
insecureServer.listen(80, () => {
	console.log(`HTTP server running on port 80`);
});