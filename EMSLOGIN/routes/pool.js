const util = require('util');
const mongodb = require('mongodb');
/**
 * Connection to the database.
 *  */
const pool = mongodb.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'Your database username', // use your mongosedb username.
    password: 'Your database password', // user your mongosdb password.
    database: 'EMS'
});

pool.getConnection((err, connection) => {
    if(err) 
        console.error("Something went wrong connecting to the database ...");
    
    if(connection)
        connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;