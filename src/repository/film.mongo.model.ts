import { Schema, model } from 'mongoose';
import { Film } from '../entities/film';

const filmSchema = new Schema<Film>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  director: {
    type: String,
    require: true,
  },
});

filmSchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.id;
    delete returnedObject.passwd;
  },
});

export const FilmModel = model('Film', filmSchema, 'films');
