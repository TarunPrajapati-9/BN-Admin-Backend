/* eslint-disable no-undef */
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://tarun912:Tarun%40912211104@tarunprajapati.qqgxsuo.mongodb.net/BuildersNeed");
        console.log("Connect to the Database " + connect.connection.port);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB; 