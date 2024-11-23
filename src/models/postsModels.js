import 'dotenv/config';
import { ObjectId } from 'mongodb';
import connectDB from '../config/dbconfig.js';

// Conecta ao banco de dados MongoDB usando a string de conexão do ambiente
const connect = connectDB(process.env.STRING_CONNECT);

// Função assíncrona para buscar todos os posts do banco de dados MongoDB
export async function allPosts() {
    // Obtém a instância do banco de dados
    const db = (await connect).db("instabyte");
    // Obtém a coleção 'posts'
    const collect = db.collection("posts");
    // Busca e retorna todos os documentos da coleção como um array
    return collect.find().toArray();
}

export async function createPost(newPost) {
    // Obtém a instância do banco de dados
    const db = (await connect).db("instabyte");
    // Obtém a coleção 'posts'
    const collect = db.collection("posts");
    return collect.insertOne(newPost);
}

export async function update(id, newPost) {
    // Obtém a instância do banco de dados
    const db = (await connect).db("instabyte");
    // Obtém a coleção 'posts'
    const collect = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return collect.updateOne({_id: new ObjectId(objId)}, {$set: newPost});
}