// 
const { Sequelize } = require("sequelize");
const {
  DB_POSTGRE_DBNAME,
  DB_POSTGRE_USERNAME,
  DB_POSTGRE_PASSWORD,
  DB_POSTGRE_HOST,
  DB_POSTGRE_PORT,
} = require("../configs");

// Create a new Sequelize instance
const sequelize = new Sequelize(DB_POSTGRE_DBNAME, DB_POSTGRE_USERNAME, DB_POSTGRE_PASSWORD, {
  host: DB_POSTGRE_HOST,
  dialect: 'postgres',
  port: DB_POSTGRE_PORT,
  ssl: true, // Enable SSL
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  define: {
    // Disable Sequelize's pluralization of table names
    freezeTableName: true,
  },
  logging: false
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error.message);
  });

// Export the initialized Sequelize instance for use in other parts of the application
module.exports = sequelize;
