const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const puerto = 8000;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const respuesta = {
    nombre: 'Tu Nombre',
    mensaje: '¡Hola desde tu servidor Node.js!'
  };
  res.end(JSON.stringify(respuesta));
});

servidor.listen(puerto, host, () => {
  console.log(chalk.green(`Servidor escuchando en http://${host}:${puerto}/`));
});git