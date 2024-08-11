/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.Raw<TResult>}
 */
exports.up = function(knex) {
    return knex.raw(`
        CREATE TABLE companies
        (
            id         SERIAL PRIMARY KEY,
            name       VARCHAR(50) UNIQUE NOT NULL,
            owner_id   integer references users (id),
            status     boolean                  default false,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.Raw<TResult>}
 */
exports.down = function(knex) {
    return knex.raw(`
    drop table companies
  `)
};
