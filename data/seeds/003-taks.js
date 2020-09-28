
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, notes:'note1', description: 'edit', completed:0, project_id: 1},
        {id: 2, notes:'note2', description: 'add info', completed:1, project_id: 1},
        {id: 3, notes:'note3', description: 'cut out', completed:0, project_id: 1},
        {id: 4, notes:'note3', description: 'fold', completed:0, project_id: 2},
        {id: 5, notes:'note3', description: 'trim', completed:0, project_id: 2},
        {id: 6, notes:'note3', description: 'copy', completed:0, project_id: 3}
      ]);
    });
};
