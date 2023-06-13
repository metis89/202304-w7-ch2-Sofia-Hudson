import { Router as createRouter } from 'express';
import createDebug from 'debug';
import { Film } from '../entities/film';
import { FilmRepo } from '../repository/film.mongo.repository';
import { FilmController } from '../controllers/film.controller';
import { Repo } from '../repository/repo';

const debug = createDebug('W6:FilmRouter');

debug('Film router executed');

const repo: Repo<Film> = new FilmRepo();
const controller = new FilmController(repo);
export const filmRouter = createRouter();

filmRouter.get('/', controller.getAll.bind(controller));
filmRouter.get('/:id', controller.getById.bind(controller));
filmRouter.post('/', controller.post.bind(controller));
filmRouter.patch('/:id', controller.patch.bind(controller));
filmRouter.delete('/:id', controller.deleteById.bind(controller));
