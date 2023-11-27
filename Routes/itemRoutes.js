/* eslint-disable no-undef */
const express = require('express');
const multer = require('multer');
const { addItem, fetchAllItems } = require('../Controllers/itemControl');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
})

const upload = multer({ storage: storage }).single("imageUrl");

const Router = express.Router();

Router.use(express.static(__dirname + "./public"));

Router.get('/fetchitems', fetchAllItems);
Router.post('/additem', upload, addItem);

module.exports = Router;