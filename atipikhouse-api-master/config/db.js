const { Pool } = require('pg')

try {
  const pool = new Pool({
    user: 'postgres',
  host: 'localhost',
  database: 'atipikhouse',
  password: 'admin',
  port: 5432,
  })

  console.log(`Database is connected`.bgYellow.black.bold)

  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })
  module.exports = pool
} catch (e) {
  console.log(e.stack)
}
