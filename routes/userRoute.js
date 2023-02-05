import express from 'express';
import userAuth from '../controllers/userController';

const route = express.Router();

route.post('/admin', userAuth);

export default route;
