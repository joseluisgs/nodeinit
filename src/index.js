import os from 'os';

console.log(`Sistema operativo:${os.platform()}`);
console.log(`Versión del OS:${os.release()}`);
console.log(`Memoria total:${os.totalmem()} bytes`);
console.log(`Memoria libre:${os.freemem()} bytes`);
