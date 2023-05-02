const connectDB = require('../../database/connection');
const Todo = require('../../models/todo')

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDB();
        const { todo } = JSON.parse(event.body);
        let todoObj = {
            todo
        }
        todoObj = await Todo.create(todoObj)
        return {
            statusCode: 201,
            body: JSON.stringify(todoObj)
        }
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({ message: 'Error connecting to database' })
        }
    }
};
