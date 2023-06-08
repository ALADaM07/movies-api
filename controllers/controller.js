import { v4 as uuidv4 } from 'uuid';

export let movies = [
  {
    id: '1',
    title: 'movie 1',
    director: 'director 1',
    releaseDate: '2021',
  },
  {
    id: '2',
    title: 'movie 2',
    director: 'director 2',
    releaseDate: '2022',
  },
  {
    id: '3',
    title: 'movie 3',
    director: 'director 3',
    releaseDate: '2023',
  },
];

export const seeMoviesList = (req, res) => {
  if (movies.length === 0) {
    res.status(404).send({
      error: 'There is no Movies in the list!!',
    });
  }
  res.status(200).json(movies);
};

export const movieSearchById = (req, res) => {
  const id = req.params.id;
  for (let movie of movies) {
    if (movie.id.toString() === id) {
      res.status(200).json(movie);
      return;
    }
  }
  res.status(404).send({ message: 'Movie not found' });
};

export const postNewMovie = (req, res) => {
  const newMovie = req.body;
  newMovie.id = uuidv4();
  if (
    req.body.title === undefined ||
    req.body.director === undefined ||
    req.body.releaseDate === undefined
  ) {
    res.status(400).send({
      message:
        'Some of the movie details are missing!! Please make sure that you filled all the required details for the movie',
    });
  }
  movies.push(newMovie);
  res.status(200).send({ message: 'New movie added.' });
};

export const deleteMovie = (req, res) => {
  const movieToDelete = movies.find((movie) => movie.id === req.params.id);
  if (typeof movieToDelete == 'undefined') {
    res.status(404);
    res.send({
      message: 'No such movie, Please make sure you typed the right ID',
    });
    return;
  }
  movies.splice(movies.indexOf(movieToDelete), 1);
  res.status(200).send({ message: 'Movie deleted successfully!!' });
};

// export const editMovie = (res, req) => {

// };
