const {clean} = require('knex-cleaner')   ///// in package.json , knex-cleaner is in dependencies, NOT DevDependencies. Is that okay?

exports.seed = function (knex){
  return clean(knex,{
    mode: 'truncate',
    ignoreTables: ['knex_migrations', 'knex_migrations_lock']
  })
}