import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createDebug from 'debug';
import { sampleRouter } from './routers/sample.router.js';
import { bookRouter } from './routers/book.router.js';
import { errorHandler } from './middleware/error.js';
import { filmRouter } from './routers/film.router.js';
const debug = createDebug('W6:App');

export const app = express();

debug('Loaded Express App');

const corsOptions = {
  origin: '*',
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

app.use((_req, _res, next) => {
  debug('Soy un middleware');
  next();
  // TEMP next(new Error('Error'));
});

app.get('/', (req, res) => {
  res.send(`<h1>Literally the teacher's repo, with films)<h1>`);
});

app.use('/sample', sampleRouter);
app.use('/book', bookRouter);
app.use('/films', filmRouter);

app.use(errorHandler);
