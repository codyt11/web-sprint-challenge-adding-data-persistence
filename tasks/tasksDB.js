const db = require('../data/db-conifg')


function getTasks(){
    return db('task as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 'p.project_name', 'p.description as project_description')
}

function getTasksById(id){
    return db('task as t')
    .where({id})
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 'p.name as project_name', 'p.description')
}

function addTasks(task){
    return db('task')
    .insert(task)
    .then(([id]) => {
        return findById(id)
    })
}

module.exports = {
    getTasks,
    getTasksById,
    addTasks
}