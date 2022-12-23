import http from 'http';

const port = 3000;

const routes = {
    '/': 'Node.js course',
    '/books': 'Page of books',
    '/authors': 'List of authors',
    '/editors': 'Page of editors',
    '/about': 'Project infos',
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(routes[req.url]);
});

server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
