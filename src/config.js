/**
* CONFIGURACIÓN DE SERVIDOR
* Configuración principal de nuestro servidor
*/

// Librerías
import express from 'express';
import logger from 'morgan';
// import history from 'connect-history-api-fallback';
import { join } from 'path';
import serveStatic from 'serve-static';
import handlebars from 'express-handlebars'; // Motor de Plantillas
import env from './env';

// Creamos el módulo de configurar. Es una función que recibe Up
export default (app) => {
  // Quitamos la cabecera que indica que esta hecho con express, por seguridad, así nod amos pistas
  app.disable('x-powered-by');

  // Middleware Le indicamos el midlleware morgan a usar logger.
  // Nos dara información de las peticiones y de todo
  if (env.NODE_ENV !== 'test') {
    // Si no estamos en test sacamos los logs
    app.use(logger('dev'));
  }

  // Directorio de donde buscar las páginas web
  // Indicamos el modo historia imprsescidible para SPA: Angular, Vue, etc
  app.use('/', serveStatic(join(__dirname, '/dist')));
  // Importante activar para Angular, Vue y Demás
  // app.use(history());
  // Cargamos index.
  // app.get(/.*/, (req, res) => {
  //   res.sendFile(join(__dirname, '/dist/index.html'));
  // });

  // Carpetas para CSS y JS, boostrapt y jQuery los cargo por web
  app.use('/css', express.static(`${__dirname}/public/css`));
  app.use('/js', express.static(`${__dirname}/public/js`));
  app.use('/assets', express.static(`${__dirname}/public/assets`));

  // Ruta publica por defecto
  app.use(express.static('public'));

  // Configuramos handlebars como motor de plantillas
  handlebars.registerPartials = `${__dirname}/views/partials`; // Registro de fragmentos parciales.
  handlebars.layoutsDir = `${__dirname}/views/layouts`; // Directorio de Layouts
  app.set('views', `${__dirname}/views`);
  app.set('view engine', 'hbs');
  app.engine('hbs', handlebars({
    extname: 'hbs', // extensión
    defaultLayout: 'index', // layout por defecto
  }));
};
