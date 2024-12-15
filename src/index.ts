import app from './app';
import config from './config/config';

const server = app.listen(config.PORT);

server.close();

// (() => {
// try {
// console.info(`Application started`, {
//   meta: {
//     PORT: config.PORT
//   }
// });
// } catch (err) {
// err = '';
// console.error('Application_error', { meta: err });
// server.close((error) => {
//   if (error) {
//     error.name = '';
// console.error('Application_error', { meta: error });
//   }
//   process.exit(1);
// });
// }
// })();
