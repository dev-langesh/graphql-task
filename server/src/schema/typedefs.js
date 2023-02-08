const { tasks } = require("./data");

const typeDefs = `#graphql

    type Task {
        _id:ID,
        task_name:String
        completed:Boolean
    }

    input AddTaskInput {
        task_name:String
    }

    input UpdateTaskInput {
        id:ID
        task_name:String
    }

    type Mutation {
        addTask(input:AddTaskInput!):Task
        deleteTask(id:ID):Task
        updateTaskTitle(input:UpdateTaskInput):Task
    }

    type Query {
        tasks: [Task]
        task(id:String):Task
    }
`;

module.exports = { typeDefs };
