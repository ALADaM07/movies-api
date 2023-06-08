import express from 'express';
import router from './routers/moviesRouter.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

export default app;
