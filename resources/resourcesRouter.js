const express = require('express');

const Resources = require('./resourcesDB')

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.get('/:id', (req, res) => {
    Resources.getResourcesById(req.params.id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    Resources.addResources(req.body)
    .then(resource => {
        res.status(202).json(resource)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router