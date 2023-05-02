const mongoose = require('mongoose')

let conn = null
module.exports = async () => {
    if (conn == null) {
        console.log("Establishing new connection");
        conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        })
        return conn
    }
    console.log("Connect already established, Reusing it")
}