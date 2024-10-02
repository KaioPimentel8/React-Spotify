import mongoose from "mongoose";

const artistaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true}
})

const artista = mongoose.model('Artistas0', artistaSchema);

export default artista