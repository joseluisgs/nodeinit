/**
 * CONFIGURACIÓN DE ACESO AL SERVIDOR DE BASE DE DATOS
 * Configuración MongoDB
 */

// Librerías
import mysql from 'mysql';
import env from './env';

/**
 * configuración de conexión a la base de datos siguiendo un patrón singleton
 */
class Database {
  /**
   * Constructor
   */
  constructor() {
    this.conn = false;
  }

  /**
   * Devuelve el objeto de conexi`ó actual
   */
  connection() {
    return this.conn;
  }

  /**
   * Se conecta a la conexión indicada. Se realiza por promesas, es decir, hasta que no se cumpla la promesa, espera el proceso del servidor
   */
  connect() {
    // Definimos una promesa que se resollverá si nos conecatmos correctamente
    return new Promise((resolve) => {
      // Configuramos el la conexión del cliente Mongo
      this.conn = mysql.createConnection({
        host: env.DB_URL,
        user: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
      });

      this.conn.connect((err) => {
        if (err) {
          if (process.env.NODE_ENV !== 'test') {
            console.error('✕ MySQL Error', err);
          }
          return process.exit();
        }
        if (process.env.NODE_ENV !== 'test') {
          console.log('⚑ Conectado a Servidor MariaDB ✓');
        }
        return resolve(); // Resolvemos la promesa
      });
    });
  }
}

/**
 * Devuelve la instancia de conexión siempre la misma, singleton
 */
const instance = new Database();

// Devolvemos el módulo
export default instance;
