
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '1N6AD09U77C464021',
          make: 'Bentley',
          model: 'ARNAGE',
          milage: 102416,
        },
        {
          vin: '2C3CCAAG6FH760142',
          make: 'Freightliner',
          model: 'FL106',
          milage: 87917,
        },
        {
          vin: '2G1WH52K739250563',
          make: 'Dodge',
          model: 'STRATUS',
          milage: 99646,
        },
        {
          vin: '1G6KE57Y84U125154',
          make: 'Kawasaki',
          model: 'KLX110',
          milage: 70088,
        },
      ]);
    });
};
