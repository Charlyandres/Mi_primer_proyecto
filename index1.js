/*const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('memoria libre', os.freemem(), 'bytes');
console.log('memoria total', os.totalmem(), 'bytes');

const fs = require('fs');
fs.writeFile('./texto.txt', 'linea uno', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Archivo creado');
});

console.log('ultima linea de codigo');

const fs = require('fs');
fs.readFile('./texto.txt', function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});*/

const http = require('http');

const colors = require('colors');

const handleServer = function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write('<h1>Hola mundo</h1>');
  res.end();
};
const server = http.createServer(handleServer);

server.listen(3000, function () {
  console.log('Server on port 3000'.green);
});
