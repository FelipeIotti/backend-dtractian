import 'reflect-metadata';
import express,{Request,Response,NextFunction} from 'express';
import cors from 'cors';
import {AppError} from './shared/errors/AppError'
import './database';
import './shared/container';

import { router } from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use((err:Error,request:Request,response:Response,next:NextFunction)=>{
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
});

//app.get('/',(request,response) => {return response.json({message:'Hello word!'})});

app.listen(3333, ()=>console.log('🚀 Server started on port 3333! 🚀'));