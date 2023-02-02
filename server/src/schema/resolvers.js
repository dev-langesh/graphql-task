const { Task } = require("../models/task.model");
const { tasks } = require("./data");

const resolvers = {
  Query: {
    tasks: async () => {
      const data = await Task.find({});

      return data;
    },
    async task(_, { id }) {
      const task = await Task.findById(id);

      return task;
    },
  },

  Mutation: {
    addTask: async (_, args) => {
      const task = await Task.create(args.input);

      return task;
    },

    deleteTask: async (_, { id }) => {
      const task = await Task.findByIdAndDelete(id);

      return task;
    },

    updateTaskTitle: async (_, args) => {
      console.log(args);
      const task = await Task.findByIdAndUpdate(args.input.id, {
        $set: { task_name: args.input.task_name },
      });

      return task;
    },
  },

  // mutation: {
  //   add,
  // },
};

module.exports = { resolvers };
