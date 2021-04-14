import express from 'express';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoute from './routes/productRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB"))
.catch(error => console.log(error.reason));

const app = express();
app.use("/api/products", productRoute);

app.listen(5000, () => { console.log("Server started at http://localhost:5000")});