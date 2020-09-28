const express = require('express')

const Tasks = require('./tasksDB')

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.get('/:id', (req, res) => {
    Tasks.getTasksById(req.params.id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})


router.post('/', (req, res) => {
    Tasks.addTasks(req.body)
    .then(task => {
        res.status(202).json(task)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;