import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userAuth from './controllers/userController';
import userModel from './models/userModel';
import route from './routes/userRoute';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/admin', route);

const port = process.env.PORT || 5001;

app.listen(port, console.log(`The server is running at port ${process.env.MONGO_URL}`));
