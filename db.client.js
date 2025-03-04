const { Sequelize } = require('sequelize');

// Connexion à la base de données PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false, // Désactive les logs SQL pour plus de clarté (optionnel)
});

// Vérification de la connexion
sequelize.authenticate()
  .then(() => {
    console.log("✅ Connexion à PostgreSQL réussie !");
    return sequelize.sync();
  })
  .catch((error) => console.log("❌ Impossible de se connecter à PostgreSQL :", error));

module.exports = sequelize;
