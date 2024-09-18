import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (error) =>{
    console.error('Erro ao conectar no MongoDb', error)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDb')
})

app.listen(3000, () => {
    console.log('Servidor conectado')
})