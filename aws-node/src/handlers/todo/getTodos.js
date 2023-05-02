const connectDB = require('../../database/connection');
const Todo = require('../../models/todo');

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDB();
        let todoDocument = await Todo.find()
        return {
            statusCode: 201,
            body: JSON.stringify(todoDocument)
        }
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({ message: 'Error connecting to database' })
        }
    }
};
