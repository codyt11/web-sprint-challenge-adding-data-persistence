const db = require("../data/db-conifg");

function getProjects() {
    return db("projects");
}
function getProjectsById(id){
    return db('projects')
    .where({id})
}


function addProject(project){  
    return db('projects')
    .insert(project)
    .then(([project]) => {
        return(project)
    })
}

module.exports = {
    getProjects,
    getProjectsById,
    addProject
};