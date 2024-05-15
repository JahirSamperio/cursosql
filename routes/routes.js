import express from 'express';
import homeRouter from './home.js'
import userRouter from './usuario.js'

const app = express();

app.use('/', homeRouter, userRouter)

export default app;