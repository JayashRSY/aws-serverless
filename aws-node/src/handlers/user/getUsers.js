const connectDB = require('../../database/connection');
const User = require('../../models/user');

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDB();
        let userDocument = await User.find()
        return {
            statusCode: 201,
            body: JSON.stringify(userDocument)
        }
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({ message: 'Error connecting to database' })
        }
    }
};
