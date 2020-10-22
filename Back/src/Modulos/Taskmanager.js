

const tasks = [];

const add = (task) => {
  tasks.push(task);
  return tasks.length;
};

const get = (id) => tasks[id];


module.exports = { add, get}