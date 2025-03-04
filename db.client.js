const { Sequelize } = require('sequelize');
require('dotenv').config(); // Charge les variables d'environnement

// Connexion à PostgreSQL avec les variables d'environnement
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nom de la base de données
  process.env.DB_USER, // Nom d'utilisateur PostgreSQL
  process.env.DB_PASSWORD, // Mot de passe PostgreSQL
  {
    host: process.env.DB_HOST, // Hôte PostgreSQL
    port: process.env.DB_PORT || 5432, // Port par défaut PostgreSQL
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false, // Désactive les logs SQL
  }
);

// Vérification de la connexion
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connexion à PostgreSQL réussie !');
    return sequelize.sync();
  })
  .catch((error) => console.log('❌ Impossible de se connecter à PostgreSQL :', error));

module.exports = sequelize;
