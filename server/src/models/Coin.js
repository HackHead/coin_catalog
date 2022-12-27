import {Sequelize, Model, DataTypes} from "sequelize";
import connection from '../config/database.js'
import Category from "./Category.js";
import Country from './Country.js';
import Metal from './Metal.js'
import Quality from './Quality.js'

class Coin extends Model {

};

Coin.init({
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
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    denomination: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    weight: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    thumbnail_head: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumbnail_tail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    composition: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    quality: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    issuing_country: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    
}, {
    timestamps: true,
    sequelize: connection,
    tableName: 'Coin',
    modelName: 'Coin',
}

);

(async () => {
    await Coin.sync();
})();

Coin.belongsTo(Category, {foreignKey: {name: 'category'}});
Coin.belongsTo(Country, {foreignKey: {name: 'issuing_country'}});
Coin.belongsTo(Metal, {foreignKey: {name: 'composition'}});
Coin.belongsTo(Quality, {foreignKey: {name: 'quality'}});

export default Coin;