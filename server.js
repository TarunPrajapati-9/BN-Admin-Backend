/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const connectDB = require('./Config/dbConnection');
const cors = require('cors')
const dotenv = require('dotenv').config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/items', require('./Routes/itemRoutes'));

app.listen(port);