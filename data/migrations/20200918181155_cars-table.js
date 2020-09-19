
exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('vin', 128).unique().notNullable();
    tbl.text('make', 128).notNullable()
    tbl.text('model', 128).notNullable()
    tbl.integer('milage').unsigned().notNullable()
    tbl.text('transmission', 128).nullable()
    tbl.text('titleStatus').nullable().defaultTo('clean')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('cars')
};
