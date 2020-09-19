
exports.up = function (knex) {
  return knex.schema.createTable('add-ons', tbl => {
    tbl.increments()
    tbl.text('name', 128).unique().notNullable()
    tbl.decimal('price').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('add-ons')
};
