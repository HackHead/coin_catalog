// Импортируем необходимые модули
import { Op, Sequelize } from 'sequelize';
import path from 'path';
import dotenv from 'dotenv';

/**
 * Создаем новый экземпляр Sequelize 
 * Документация: https://sequelize.org/
 * 
 * Sequelize отвечает за работу с базой данных: подключение к базе,
 * создание, редактирование, удаление таблиц из базы данных и тд...
*/

// Создаем объект конфигурации

// const storage = new Sequelize({
//     dialect: 'sqlite',
//     storage: path.join(path.resolve(), '/src/data/dev.sqlite'),
//     operatorsAliases: {
//         $lte: Op.lte,
//         $gte: Op.gte,
//         $not: Op.not,
//         $like: Op.like,
//         $eq: Op.eq,
//         $or: Op.or
//     }
// });

dotenv.config({
    path: path.join(path.resolve(), 'src/config/.env')
})

const [
    host, port, database, user, password
] = [
    process.env.MYSQL_HOST,
    process.env.MYSQL_PORT,
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD
]

const storage = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'mysql',
    operatorsAliases: {
        $lte: Op.lte,
        $gte: Op.gte,
        $not: Op.not,
        $like: Op.like,
        $eq: Op.eq,
        $or: Op.or
    },
    logging: false
});

(async () => {
    try {
        // Авторизируемся в базе данных
        if (storage) await storage.authenticate();
        console.log('Соединение с базой данных успешно установлено...');
    } catch (error) {
        console.log(`Произошла ошибка при попытке подключения к базе данных ... ${error}`);
    }
})();


export default storage;