import {Sequelize, Model, DataTypes} from "sequelize";
import connection from '../config/database.js'

class Category extends Model {

};

Category.init({
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
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: connection,
    tableName: 'Category',
    modelName: 'Category',
}

);
(async () => {
    await Category.sync();
})();
export default Category;