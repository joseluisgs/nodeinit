/**
 * ENRUTADOR
 * Enrutador central
 */

import { join } from 'path';

// exportamos los módulos
export default (app) => {
  // indicamos que para ruta quien la debe resolver
  // Cargamos index.
  app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(join(__dirname, '/public/index.html'));
  });

  // Páginas webs generadas
  // Lo ideal sería crear un dichero de enrutación y un controlador, pero para tres páginas no merece la pena.
  // Pero sería el proceder
  // Una ruta por defecto de presentación
  app.get('/plantilla', (req, res) => {
    // Inyecta el fichero main.hbl" dentro de layout index, en su etiqueta Body
    res.render('main',
      {
        layout: 'index',
        titulo: 'NodeMonRest',
        mensaje: '2ºDAW',
      });
  });

  // Tambien podemos crear errores a rutas que no existen
  // es un middleware, por eso es un next, si existe vamos a la ruta, si no lanza esto
  app.use((req, res) => {
    res.render('error404',
      {
        layout: 'index',
        titulo: 'Error 404. Página no encotrada',
      });
    // res.status(404).json({
    //   error: 404,
    //   ensaje: 'No existe ningún recurso para esta ruta',
    // });
  });
  // next(err); //-->> si añadimos un error de este tipo a las peticiones,
  // podemos enviarlo al error 500 que es el que pilla el error.
  // res.status(404).json({
  //   error: 404,
  //   mensaje: 'No existe ningún recurso para esta ruta',
  // });

  // app.use((err, req, res, next) => {
  //   console.error(err.stack);
  //   // res.status(500).send('Algo va mal!');
  //   res.status(500).json({
  //     error: 500,
  //     mensaje: 'Algo va mal',
  //   });
  // });
};
