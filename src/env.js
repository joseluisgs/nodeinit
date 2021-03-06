/**
 * Lectura de las variables de entorno
*/

// Librerías
// const conf = require('dotenv'); --> Manera tradicional
import conf from 'dotenv'; // Manera ES2015 o superior usando Babel con Node

// Cogemos el objeto que necesitamos .env
conf.config(); // Toda la configuración parseada del fichero .env

// Filtramos que estos parámetros importantes para la ejecución estén para MaríaDB
const paramsMariaBD = process.env.DB_USER && process.env.DB_PASS && process.env.DB_URL && process.env.DB_PORT && process.env.DB_NAME;
if (!paramsMariaBD) {
  console.error('✕ Error: Faltán variables de entorno para la ejecución en MariaDB. Por favor revise su fichero .env');
  process.exit();
}

// Es importante que pongamos unos valores por defecto por si no están en el .env o defnidos en el sistema
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  ENV: process.env.ENV || 'development',
  DEBUG: process.env.DEBUG || true,
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 8080,
  TIMEZONE: process.env.TIMEZONE || 'Europe/Madrid',
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_URL: process.env.DB_URL,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
};
