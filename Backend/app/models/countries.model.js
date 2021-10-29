// Isi table db country <pgAdmin4>
// https://sequelize.org/v5/manual/data-types.html
//const currentTime = new Date();

module.exports = (sequelize, Sequelize) => {
    const Countries = sequelize.define("country", {
      country_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER        
      },
      country: {
        unique: true,
        type: Sequelize.STRING
      },
      last_update: {
        allowNull: true,
        type: Sequelize.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    });
    return Countries;
};