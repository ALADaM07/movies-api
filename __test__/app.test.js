import supertest from 'supertest';
import app from '../app.js';
import { movies } from '../controllers/controller.js';

const request = supertest(app);

describe('GET /movies', () => {
  it('Should return status code (200) and return a list of movies as a response', async () => {
    const response = await request.get('/movies');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Should return status code (404) and respond with "There is no Movies in the list!!"', async () => {
    movies.length = 0;
    const response = await request.get('/movies');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: 'There is no Movies in the list!!',
    });
  });
});

describe('POST /movies', () => {
  it('Should return status code (200) and respond with "New movie added."', async () => {
    const movieData = {
      title: 'tst movie 7',
      director: 'tst director 7',
      releaseDate: 'tst 2027',
    };

    const response = await request.post('/movies').send(movieData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'New movie added.' });
    const addedMovie = movies.find((movie) => movie.title === movieData.title);
    expect(addedMovie.id).toBeDefined();
    expect(typeof addedMovie.id).toBe('string');
  });

  it('Should return status code (400) and respond with "Some of the movie details are missing!!"', async () => {
    const response = await request.post('/movies').send({
      director: 'tst director 7',
      releaseDate: 'tst 2027',
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message:
        'Some of the movie details are missing!! Please make sure that you filled all the required details for the movie',
    });
  });
});

describe('DELETE /movies/:id', () => {
  it('Should return status code (200) and respond with "Movie deleted successfully!!"', async () => {
    const movieToDelete = movies[0].id;
    const response = await request.delete(`/movies/${movieToDelete}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Movie deleted successfully!!' });

    const deletedMovie = movies.find((movie) => movie.id === movieToDelete);
    expect(deletedMovie).toBeUndefined();
  });

  it('Should return status code (404) and respond with "Some of the movie details are missing!!"', async () => {
    const nonExistentMovieId = 'nonexistentmovieid';
    const response = await request.delete(`/movies/${nonExistentMovieId}`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: 'No such movie, Please make sure you typed the right ID',
    });
  });
});
