import mongoose from "mongoose";

export default async function conectaNaDb() {
    mongoose.connect("mongodb+srv://kaio:123@cluster0.muwsh.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}