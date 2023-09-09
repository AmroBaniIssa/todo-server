const express = require("express");
const tasksRouter = express.Router();
const { Tasks } = require("../models/index");
// tasksRouter.get("/tasks", getAllTasks);
// tasksRouter.post("/tasks", createTask);
// tasksRouter.put("/tasks/:id", updateTask);
tasksRouter.delete("/tasks/:id", deleteTask);

async function getAllTasks(req, res) {
  let tasksResult = await Tasks?.read();
  console.log(tasksResult);
  if (tasksResult) {
    res.status(200).json(tasksResult);
  } else {
    console.log("there is no tasks");
    res.status("there is no tasks");
  }
}
tasksRouter.get("/tasks", async (req, res) => {
  try {
    let tasksResult = await Tasks.findAll();
    res.status(200).send(tasksResult);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
});

tasksRouter.post("/tasks", async (req, res) => {
  // let { Text, assignedto, difficulty, complete, imageUrl } = req.body;
  let newtask = req.body;
  try {
    let task = await Tasks.create(newtask);
    res.status(201).json(task);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// async function updateTask(req, res) {
//   let BookId = parseInt(req.params.id);
//   let updateTask = req.body;
//   let updatedBook = await Tasks.update(updateTask, BookId);
//   res.status(201).json(updatedBook);
// }

tasksRouter.put("/tasks/:id", async (req, res) => {
  let TaskId = parseInt(req.params.id);
  let updateTask = req.body;

  try {
    await Tasks.update(updateTask, { where: { id: TaskId } });
    res.status(201).json(updateTask);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});


async function deleteTask(req, res) {
  let TaskId = parseInt(req.params.id);
  try {
    await Tasks.destroy({ where: { id: TaskId } });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
}


module.exports = tasksRouter;
