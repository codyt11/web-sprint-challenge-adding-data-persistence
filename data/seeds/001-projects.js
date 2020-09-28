
exports.seed = function(knex) {
      return knex('projects').insert([
        {id: 1, project_name: 'JavaScript', description: 'something 1', completed: 0},
        {id: 2, project_name: 'Express', description: 'something 2', completed: 1},
        {id: 3, project_name: 'Redux', description: 'something 3', completed: 0}
      ]);
};