const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://esgi_cloud_exam_db_35020_user:hWmDrZungHhQPToNIWTxbbJsui9AG7Il@dpg-cv3cj11u0jms739ear00-a/esgi_cloud_exam_db_35020', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;