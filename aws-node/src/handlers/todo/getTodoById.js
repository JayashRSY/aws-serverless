const connectDB = require('../../database/connection');
const Todo = require('../../models/todo')

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDB();
        const { id } = JSON.parse(event.body);
        let searchParam = {
            id
        }
        todoObj = await Todo.findOne(searchParam)
        return {
            statusCode: 201,
            body: JSON.stringify(searchParam)
        }
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({ message: 'Error connecting to database' })
        }
    }
};
