import {Sequelize, Model, DataTypes} from "sequelize";
import connection from '../config/database.js'

class Metal extends Model {

};

Metal.init({
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
    tableName: 'Metal',
    modelName: 'Metal',
}

);
Metal.sync();
export default Metal;