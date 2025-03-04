const { Sequelize } = require('sequelize');

const databaseUrl = process.env.DATABASE_URL;

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Vérification de la connexion
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connexion à PostgreSQL réussie !');
    return sequelize.sync();
  })
  .catch((error) => console.log('❌ Impossible de se connecter à PostgreSQL :', error));

module.exports = sequelize;
