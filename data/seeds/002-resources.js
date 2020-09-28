
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, description: 'something1', resource_name: 'book'},
        {id: 2, description: 'something2', resource_name: 'PC'},
        {id: 3, description: 'something3', resource_name: 'coffee'}
      ]);
    });
};