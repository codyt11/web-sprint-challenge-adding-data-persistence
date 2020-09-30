
exports.up = function (knex) {
    return knex.schema
        .createTable("projects", (tbl) => {
            tbl.increments("id");
            tbl.string("project_name", 128).notNullable();
            tbl.string("description", 128).notNullable();
            tbl.boolean("completed",false)
        })
        .createTable("resources", (tbl) => {
            tbl.increments("id");
            tbl.string("resource_name", 128).notNullable().unique();
            tbl.string("description", 128);
        })
        .createTable("task", (tbl) => {
            tbl.increments("id");
            tbl.string("description", 128).notNullable();
            tbl.integer("notes", 128);
            tbl.boolean("completed").defaultTo(false);
            tbl.integer("project_id").notNullable().references('id').inTable("projects");
        })
        .createTable("project_resources", (tbl) => {
            tbl.integer("project_id").notNullable().references('id').inTable("projects");
            tbl.integer("resource_id").notNullable().references("id").inTable("resources");
            tbl.primary(['project_id','resource_id'])
        })

        .createTable("project_tasks", (tbl) => {
            tbl.integer('project_id').notNullable().references('id').inTable("projects");
            tbl.integer('task_id').notNullable().references("id").inTable("task")
            tbl.primary(['project_id','task_id'])
        })
        
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('project_tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('task')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};