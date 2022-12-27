import {Sequelize, Model, DataTypes} from "sequelize";
import connection from '../config/database.js'

class Quality extends Model {

};

Quality.init({
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
    tableName: 'Quality',
    modelName: 'Quality',
}

);
Quality.sync();
export default Quality;