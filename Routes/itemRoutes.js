/* eslint-disable no-undef */
const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
})

const upload = multer({ storage: storage }).single("imageUrl");

const { addItem, fetchAllItems } = require('../Controllers/itemControl');
const Router = express.Router();

Router.use(express.static(__dirname + "./public"));

Router.get('/fetchitems', fetchAllItems);
Router.post('/additem', upload, async (req, res) => {
    try {
        const { name, description, category } = req.body;
        // console.log(req.file);
        // console.log(req.file.filename);
        const imageUrl = req.files[0].filename;

        if (!name || !description || !category || !imageUrl) {
            return res.status(400).json({ error: "All Fields must be Required" });
        }

        const addItem = await Items.create({
            name,
            description,
            category,
            imageUrl,
        });

        res.json(addItem);
    } catch (err) {
        console.error("Error adding item:", err);
        // res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = Router;