const connectDB = require('../../database/connection');
const User = require('../../models/user');

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDB();
        const { email, password } = JSON.parse(event.body);
        let userObj = {
            email,
            password
        }
        userObj = await User.create(userObj)
        return {
            statusCode: 201,
            message: JSON.stringify(userObj)
        }
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({ message: 'Error connecting to database' })
        }
    }
};
