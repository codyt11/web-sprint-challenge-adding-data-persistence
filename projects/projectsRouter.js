const express = require("express");

const router = express.Router();

const Projects = require("./projectsDB");

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.get('/:id', (req, res) => {
    Projects.getProjectsById(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(202).json(project)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

// // router.delete('/:id', async (req, res) => {
// //     const { id } = req.params.id;

// //     try {
// //         const project = await db.del().from('projects').where({ id });
// //         project ? res.status(200).json({ deleted: project })
// //             : res.status(404).json({ message: 'invalid id' });
// //     } catch (err) {
// //         res.status(500).json({ message: 'database error', error: err });
// //     }


// }); 

module.exports = router;