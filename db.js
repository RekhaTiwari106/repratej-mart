const sql = require("mssql");

const config = {
 connectionString: process.env.DB_CONNECTION
};

async function saveUser(data){
 await sql.connect(config);

 await sql.query`
 INSERT INTO UserActivity (username, category, item)
 VALUES (${data.username}, ${data.category}, ${data.item})
 `;
}

module.exports = { saveUser };