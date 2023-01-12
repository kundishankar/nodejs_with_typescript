import express from "express";
import bodyParser from "body-parser";
import {createServer} from 'http';
import {router1} from './routes/routes'
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const httpServer = createServer(app);

function startApp(){
    app.use('/hello',(req: any, res: any) => {
        res.send('Hello1!!');
    });
    
    app.use('/test', router1);

    httpServer.listen(process.env.PORT, () => {console.log(`Server started in the Port : ${process.env.PORT}`)});
}

startApp();


