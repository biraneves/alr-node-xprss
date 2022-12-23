import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Node.js course');
});

server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
