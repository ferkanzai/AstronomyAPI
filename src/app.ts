import express from 'express';

const morgan = require('morgan');
const helmet = require('helmet');

const appRouter = require('./routes');

const appConfig = express();

const configApp = (app: express.Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(morgan('combined'));
  app.use(helmet());

  app.use('/', appRouter);

  app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.code || 500).json({
      status: 'no ok',
      info: {
        error,
        message: error.message,
      },
    });
  });

  return app;
};

module.exports = configApp(appConfig);