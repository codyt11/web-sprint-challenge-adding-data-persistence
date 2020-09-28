const db = require('../data/db-conifg')

function getResources(){
    return db('resources')
}

function getResourcesById(id){
    return db('resources')
    .where({id})
}

function addResources(resource){
    return db('resources')
    .insert(resource)
    .then((resource) => {
        return (resource)
    })
}

function deleteResource(id){
        const toBeDeleted = getResourcesById(id)
        db('resources')
        .where({id})
        .del();
        return toBeDeleted
}

module.exports = {
    getResources,
    getResourcesById,
    addResources,
    deleteResource
}