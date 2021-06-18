import * as http from 'http';
import Api from './api/api';

const models = require('./models');

const config = require('./config/env/config')();

const server = http.createServer(Api);

models.sequelize.sync().then(() => {
  server.listen(process.env.PORT);
  server.on('listening', () => console.log(`On`));
  server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
});
