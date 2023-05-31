const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgresUser',
  host: 'db',
  database: 'naloga',
  password: 'postgresPW',
  port: 5432,
});

const getWord = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM besede ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
const createWord = (body) => {
  return new Promise(function(resolve, reject) {
    const { word } = body
    pool.query('INSERT INTO besede (word) VALUES ($1) RETURNING *', [ word ], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new word has been added added: ${results.rows[0]}`)
    })
  })
}


module.exports = {
  getWord,
  createWord,
}
