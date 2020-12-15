import OS from 'os';
import ENV from './env';

console.log(`Sistema operativo:${OS.platform()}`);
console.log(`Versión del OS:${OS.release()}`);
console.log(`Memoria total:${OS.totalmem()} bytes`);
console.log(`Memoria libre:${OS.freemem()} bytes`);
console.log(`Puerto de escucha: ${ENV.PORT}`);
