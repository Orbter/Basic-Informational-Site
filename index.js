import http from 'http';
import fs from 'fs';
import { URL } from 'url';

const port = 8000;
const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, 'http://localhost:8000');
  const pathname = myUrl.pathname;

  if (pathname === '/' || pathname === '/index.html') {
    console.log(pathname);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('Error:file Not Found');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (pathname === '/about') {
    console.log(pathname);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('about.html', (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('Error:file Not Found');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (pathname === '/contact-me') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('contact-me.html', (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('Error:file Not Found');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else {
    res.writeHead(404);
    res.write('Error: Page Not Found');
    res.end();
  }
});

server.listen(port, (error) => {
  if (error) {
    console.log('something went wrong', error);
  } else {
    console.log('Server is up and running on port' + port);
  }
});
