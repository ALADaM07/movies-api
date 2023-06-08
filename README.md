# Movie REST API Application

This is a RESTful application that manages a collection of movies.

## REST Resource

The main REST resource in this app is `/movies`. It represents a collection of movies.

## Permitted Operations and HTTP Methods

The following operations are permitted on the `/movies` resource:

- `GET /movies`: Retrieves the list of movies.
- `GET /movies/:id`: Retrieves a specific movie by its ID.
- `POST /movies`: Creates a new movie and adds it to the list.
- `DELETE /movies/:id`: Deletes a movie with the provided ID.

## Routes and Functionality

### `GET /movies`

- Description: Retrieves the list of movies.
- Response:
  - 200 OK: Returns the list of movies in the response body.
  - 404 Not Found: Returns an error message if the movie list is empty.

### `GET /movies/:id`

- Description: Retrieves a specific movie by its ID.
- Request Parameter: `id` - The ID of the movie.
- Response:
  - 200 OK: Returns the movie's information if found.
  - 404 Not Found: Returns an error message if the movie with the provided ID is not found.

### `POST /movies`

- Description: Creates a new movie.
- Request Body: JSON object representing the new movie, including `title`, `director`, and `releaseDate` properties.
- Response:
  - 200 OK: Returns a success message if the movie is successfully created.
  - 400 Bad Request: Returns an error message if any required movie details are missing.

### `DELETE /movies/:id`

- Description: Deletes a movie with the provided ID.
- Request Parameter: `id` - The ID of the movie to delete.
- Response:
  - 200 OK: Returns a success message if the movie is successfully deleted.
  - 404 Not Found: Returns an error message if the movie with the provided ID is not found.

## Code Improvements

- Modularized the code into separate files for better organization.
- Utilized `express.Router()` for handling routes in a separate module.
- Introduced UUID (`uuidv4`) for generating unique IDs for new movies.
- Implemented proper error handling with meaningful messages and appropriate HTTP status codes.

## Tests

The following tests were conducted to ensure the app's functionality:

- Tested `GET /movies` to verify correct retrieval of the movie list and handling of an empty list.
- Tested `GET /movies/:id` with valid and invalid IDs to ensure accurate movie information retrieval and proper error handling.
- Tested `POST /movies` with valid and invalid movie data to verify successful creation of movies and appropriate error responses.
- Tested `DELETE /movies/:id` with valid and invalid IDs to confirm proper deletion of movies and correct handling of non-existent movie IDs.

Feel free to reach out if you have any further questions or need additional information.
