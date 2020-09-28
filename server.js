const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./projects/projectsRouter");
const ResourcesRouter = require('./resources/resourcesRouter');
const TasksRouter = require('./tasks/tasksRouter')

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

server.get("/", (req, res) => {
    res.send(`The server is working!`);
});



module.exports = server;