import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import './database';
import './shared/container';

import { router } from './routes';

const app = express();

app.use(cors({origin:'http://'}));

app.use(express.json());

app.use(router);


//app.get('/',(request,response) => {return response.json({message:'Hello word!'})});

app.listen(3333, ()=>console.log('🚀 Server started on port 3333! 🚀'));