import userController from './src/infrastructure/routes/userController.js';
import articleController from './src/infrastructure/routes/articleController.js';
import commandController from './src/infrastructure/routes/commandController.js';
import shoppingController from './src/infrastructure/routes/shoppingController.js';
import express, { Router } from 'express'
import passport from 'passport'
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

const port = process.env.PORT | 4000;



import client from './src/infrastructure/database/database.js';

if ('development' === process.env.NODE_ENV) {
    app.use(cors({
        origin: true,
        credentials: true,
    }));
} else {
    app.use(cors());
}
console.log(process.env);
await client.connect();
app.use(express.json());

app.use(cookieParser());

app.use('/user/', userController)
app.use('/article/', articleController)
app.use('/command/', commandController)
app.use('/shopping/', shoppingController)

console.log('TEST')

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://localhost:${port}`);
});


// app.listen(process.env.PORT, () => console.log(`Server listening to port: http://localhost:${port}`))

