/**
 * CONFIGURACIÓN DE ACESO AL SERVIDOR DE BASE DE DATOS
 * Configuración MongoDB
 */

// Librerías
import mysql from 'mysql2/promise';
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
  async connect() {
    // Definimos una promesa que se resollverá si nos conecatmos correctamente
    // Configuramos el la conexión del cliente Mongo
    try {
      this.conn = await mysql.createConnection({
        host: env.DB_URL,
        user: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
      });
      console.log('⚑ Conectado a Servidor MariaDB ✓');
      return this.conn;
    } catch (ex) {
      console.error('✕ MySQL Error', ex);
      return null;
    }
  }
}

/**
 * Devuelve la instancia de conexión siempre la misma, singleton
 */
const instance = new Database();

// Devolvemos el módulo
export default instance;
