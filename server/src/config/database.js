// Импортируем необходимые модули
import { Op, Sequelize } from 'sequelize';
import path from 'path';

/**
 * Создаем новый экземпляр Sequelize 
 * Документация: https://sequelize.org/
 * 
 * Sequelize отвечает за работу с базой данных: подключение к базе,
 * создание, редактирование, удаление таблиц из базы данных и тд...
*/

const storage = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(path.resolve(), '/src/config/dev.sqlite'),
    operatorsAliases: {
        $lte: Op.lte,
        $gte: Op.gte,
        $not: Op.not,
        $like: Op.like,
    }
});

(async () => {
    try {
        if (storage) await storage.authenticate();
        console.log('Соединение с базой данных успешно установлено...');
    } catch (error) {
        console.log(`Произошла ошибка при попытке подключения к базе данных ... ${error}`);
    }
})();


export default storage;