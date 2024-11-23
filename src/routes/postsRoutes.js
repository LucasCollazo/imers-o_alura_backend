import express from 'express';
import multer from 'multer';
import { listPosts, postNewPost, uploadImg, updatePost } from '../controls/postsControls.js';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest:'./uploads', storage});

const routes = (app) => {
    // Cria uma aplicação Express
    app.use(express.json());
    app.use(cors(corsOptions));
    // Define uma rota GET para lidar com requisições para '/posts'
    app.get('/posts', listPosts);
    app.post('/posts', postNewPost);
    app.post('/upload', upload.single("img"), uploadImg);
    app.put('/upload/:id', updatePost);
}

export default routes;