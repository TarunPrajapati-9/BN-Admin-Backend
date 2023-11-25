const express = require('express');
const { addItem, fetchAllItems } = require('../Controllers/itemControl');
const Router = express.Router();

Router.get('/fetchitems', fetchAllItems);
Router.post('/additem', addItem);

module.exports = Router;