import {allPosts, createPost, update} from "../models/postsModels.js";
import fs from "fs";
import generateAlt from "../services/geminiService.js";

export async function listPosts(req, res){
    // Busca todos os posts usando a função assíncrona
    const result = await allPosts();

    // Envia os posts buscados como uma resposta JSON com código de status 200
    res.status(200).json(result);
}

export async function postNewPost(req, res) {
    const newPost = req.body;
    try {
        const createNewPost = await createPost(newPost);
        res.status(200).json(createNewPost);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição!"});
    }
}

export async function uploadImg(req, res) {
    const newPost = {
        desc: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const createNewPost = await createPost(newPost);
        const currentImg = `uploads/${createNewPost.insertedId}.png`;
        fs.renameSync(req.file.path, currentImg);
        res.status(200).json(createNewPost);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição!"});
    }
}

export async function updatePost(req, res) {
    const id = req.params.id;
    const url = `http://localhost:3000/${id}.png`;
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descript = await generateAlt(imgBuffer);

        const updateNew = {
            imgUrl: url,
            desc: descript,
            alt: descript
        }

        const createNewPost = await update(id, updateNew);
        res.status(200).json(createNewPost);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição!"});
    }
}