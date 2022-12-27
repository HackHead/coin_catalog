import {Sequelize, Model, DataTypes} from "sequelize";
import connection from '../config/database.js'

class Country extends Model {

};

Country.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: connection,
    tableName: 'Country',
    modelName: 'Country',
}

);
(async () => {
    await Country.sync();
})();
export default Country;