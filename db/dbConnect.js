const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Connected to DATABASE");
    } catch {
        console.log("Connection Error");
    }
}

module.exports = connect;