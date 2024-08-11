/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.Raw<TResult>}
 */
exports.up = function(knex) {
    return knex.raw(`
      CREATE TABLE user_roles
      (
          id         SERIAL PRIMARY KEY,
          name VARCHAR(50) UNIQUE NOT NULL
      );

      INSERT INTO user_roles (name)
      VALUES ('admin'), ('manager'), ('owner'), ('visitor');
  `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.Raw<TResult>}
 */
exports.down = function(knex) {
    return knex.raw(`
        drop table user_roles
  `)
};
