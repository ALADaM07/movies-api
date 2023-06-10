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
    res.status(200).send({
      message: 'There is no Movies in the list!!',
    });
  }
  res.status(200).json(movies);
};

export const movieSearchById = (req, res) => {
  const id = req.params.id;
  for (let movie of movies) {
    if (movie.id === id) {
      res.status(200).json(movie);
      return;
    }
  }
  res.status(404).send({ message: 'Movie not found' });
};

export const postNewMovie = (req, res) => {
  const { title, director, releaseDate } = req.body;

  if (!title || !director || !releaseDate) {
    res.status(400).send({
      message:
        'Please make sure to provide a title, director, and release date for the movie you want to add.',
    });
  } else {
    const newMovie = {
      id: uuidv4(),
      title,
      director,
      releaseDate,
    };

    movies.push(newMovie);

    res
      .status(201)
      .send({ message: `New movie added with the id: ${newMovie.id}` });
  }
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

export const editMovie = (req, res) => {
  const { title, director, releaseDate } = req.body;
  const movieId = req.params.id;

  if (
    title === undefined ||
    director === undefined ||
    releaseDate === undefined
  ) {
    res
      .status(400)
      .send({ message: 'Failed to edit movie due to missing details' });
    return;
  }

  const movieIndex = movies.findIndex((movie) => movie.id === movieId);
  if (movieIndex === -1) {
    res.status(404).send({ message: 'Movie not found' });
    return;
  }

  movies[movieIndex] = {
    id: movieId,
    title,
    director,
    releaseDate,
  };

  res
    .status(200)
    .send({ message: `Movie with the id: ${movieId} updated successfully` });
};

export const updateMovie = (req, res) => {
  const { title, director, releaseDate } = req.body;
  const movieId = req.params.id;

  if (!title && !director && !releaseDate) {
    res.status(400).send({ message: 'No fields provided for update' });
    return;
  }

  const movieIndex = movies.findIndex((movie) => movie.id === movieId);

  if (movieIndex === -1) {
    res.status(404).send({ message: 'Movie not found' });
    return;
  }

  if (title) {
    movies[movieIndex].title = title;
  }
  if (director) {
    movies[movieIndex].director = director;
  }
  if (releaseDate) {
    movies[movieIndex].releaseDate = releaseDate;
  }

  res.status(200).send({ message: 'Movie updated successfully' });
};
