
exports.up = function (knex) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments();
    tbl.decimal('sale_amount').notNullable()
    tbl.integer('car_id').unsigned()
    tbl.foreign('car_id').references('id').inTable('cars')
    tbl.integer('add_on_id').unsigned()
    tbl.foreign('add_on_id').references('id').inTable('add-ons')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('sales')
};
