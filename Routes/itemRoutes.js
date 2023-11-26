const express = require('express');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
})

const upload = multer({ storage: storage })

const { addItem, fetchAllItems } = require('../Controllers/itemControl');
const Router = express.Router();

Router.get('/fetchitems', upload.single("image"), fetchAllItems);
Router.post('/additem', addItem);

module.exports = Router;