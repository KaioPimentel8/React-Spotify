import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import Artista from './Models/Artista.js'

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (error) =>{
    console.error('Erro ao conectar no MongoDb', error)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDb')
})

app.get('/artistas', async (req, res) => {
    const listaArtistas = await Artista.find({});
    res.status(200).json(listaArtistas);
})

app.listen(3000, () => {
    console.log('Servidor conectado')
})