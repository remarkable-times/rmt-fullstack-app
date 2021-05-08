
// get the client
const mysql = require('mysql2/promise');

(async () => {

    // create the connection
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'RMT_DB' , password: 'rootpassword'});
    // query database
    const data = await connection.execute('SELECT * FROM tutorials_tbl');
    console.log(data[0]);

})()
