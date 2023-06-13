import { Controller } from './controller';
import { Film } from '../entities/film';
import { FilmRepo } from '../repository/film.mongo.repository';

import createDebug from 'debug';
const debug = createDebug('W6:FilmController');

export class FilmController extends Controller<Film> {
  constructor(protected repo: FilmRepo) {
    super();
    debug('Instantiated');
  }
}
