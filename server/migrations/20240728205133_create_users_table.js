/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.Raw<TResult>}
 */
exports.up = function(knex) {
    return knex.raw(`
        CREATE TABLE users
        (
            id          SERIAL PRIMARY KEY,
            first_name  VARCHAR(50)         NOT NULL,
            last_name   VARCHAR(50)         NOT NULL,
            username    VARCHAR(50) UNIQUE  NOT NULL,
            email       VARCHAR(100) UNIQUE NOT NULL,
            password    VARCHAR(255)        NOT NULL,
            role_id     smallint references user_roles (id),
            company_ids INTEGER[],
            created_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.Raw<TResult>}
 */
exports.down = function(knex) {
    return knex.raw(`
    drop table users
  `)
};
