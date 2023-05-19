const mysql = require("mysql2");

const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
  ...databaseConfig,
  database: "",
});

dbConnection.query("CREATE DATABASE IF NOT EXISTS final_project", (err) => {
  if (err) throw err;
  console.log("Database created");

  dbConnection.query("USE final_project", (err) => {
    if (err) throw err;
    console.log("Using final_project database");

    const adminTableQuery = `CREATE TABLE IF NOT EXISTS admin (
            id INT PRIMARY KEY AUTO_INCREMENT,
            first_name VARCHAR(255) NOT NULL,
            last_surname VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
            )`;

    const participantsTableQuery = `
            CREATE TABLE IF NOT EXISTS participants (
              id INT PRIMARY KEY AUTO_INCREMENT,
              first_name VARCHAR(255) NOT NULL,
              last_name VARCHAR(255) NOT NULL,
              email VARCHAR(255) NOT NULL UNIQUE,
              phone_number VARCHAR(255) NOT NULL,
              admin_id INT,
              FOREIGN KEY (admin_id) REFERENCES admin(id)
            )
          `;

    dbConnection.query(adminTableQuery, (err) => {
      if (err) throw err;
      console.log("admin table created");

      dbConnection.query(participantsTableQuery, (err) => {
        if (err) throw err;
        console.log("participants table created");
      });
    });
  });
});

module.exports = { dbConnection };
