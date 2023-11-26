/* eslint-disable no-undef */
const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
})

const upload = multer({ storage: storage }).single("imageUrl");

const { addItem, fetchAllItems } = require('../Controllers/itemControl');
const Router = express.Router();

Router.get('/fetchitems', fetchAllItems);
Router.post('/additem', upload, addItem);

module.exports = Router;