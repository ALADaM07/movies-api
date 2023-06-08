import express from 'express';
const router = express.Router();
import {
  seeMoviesList,
  postNewMovie,
  deleteMovie,
  movieSearchById,
  // editMovie,
} from '../controllers/controller.js';

router.get('/movies', seeMoviesList);
router.get('/movies/:id', movieSearchById);
router.post('/movies', postNewMovie);
router.delete('/movies/:id', deleteMovie);
// router.patch('/movies/:id', editMovie);

export default router;
