const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server with forwarding options
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: 'http://localhost:3000' });
});

console.log('Reverse proxy server running on port 8080');
server.listen(8080);