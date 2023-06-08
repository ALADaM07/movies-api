import express from 'express';
const router = express.Router();
import {
  seeMoviesList,
  postNewMovie,
  deleteMovie,
  movieSearchById,
  editMovie,
  updateMovie,
} from '../controllers/controller.js';

router.get('/movies', seeMoviesList);
router.get('/movies/:id', movieSearchById);
router.post('/movies', postNewMovie);
router.delete('/movies/:id', deleteMovie);
router.put('/movies/:id', editMovie);
router.patch('/movies/:id', updateMovie);

export default router;
