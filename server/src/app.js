// Импортируем необходимые модули
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import CoreRoutes from './routes/Core.Routes.js';
import cors from 'cors';
import seed from './data/seed.js';
import Category from './models/Category.js';
import Country from './models/Country.js';
import Metal from './models/Metal.js';
import Quality from './models/Quality.js';
import Coin from './models/Coin.js';

class App {
    constructor() {
        this.PORT = process.env.NODE_PORT || 7000;
        this.APP = express();

        this.initBodyParser();
        this.initStaticFiles();
        this.initCors();
        this.initRoutes();
        
        
        const server = this.run();

        // Заполняем базу данных seed-значениями, если указан соотвественный ключ
        if(process.argv.some(e => e === '--seed')){
            (async () => {
                const _categories = seed.categories;
                const _coins = seed.coins;
                const _countries = seed.countries;
                const _metals = seed.metals;
                const _qualities = seed.qualities;

                try {
                    await Category.bulkCreate(_categories);
                    await Country.bulkCreate(_countries);
                    await Metal.bulkCreate(_metals);
                    await Quality.bulkCreate(_qualities);
                    await Coin.bulkCreate(_coins);
                } catch (error) {
                    console.log('Возможно база данных уже заполнена!')
                    console.log(error)
                }
            })();
            server.close();
        }
        
    }

    /**
     * Делаем возможным чтение статических файлов
     * К примеру теперь мы можем обратиться по аддресу http://localhost:7000/img/название_файла.jpg
     * чтобы получить изображение
     */
    initStaticFiles(){
        this.APP.use('/img', express.static(path.join(path.resolve(), 'src/public/img')))
    }
    async seed() {
        const _categories = seed.categories;
        const _coins = seed.coins;
        const _countries = seed.countries;
        const _metals = seed.metals;
        const _qualities = seed.qualities;
        
        await Category.bulkCreate(_categories);
        await Country.bulkCreate(_countries);
        await Metal.bulkCreate(_metals);
        await Quality.bulkCreate(_qualities);
        await Coin.bulkCreate(_coins);
    }
    /**
     * Инициируем CORS 
     * Документация: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
     * 
     * Этот медтод делает возможнным обращение к нашему серверу с адресов отличных от 
     * того на котором работает наше приложение
     */
    initCors() {
        this.APP.use(cors());
    }

    /**
     * Делаем возможным читать тело запроса. По-умолчанию express этого не умеет
     * Документация: https://www.npmjs.com/package/body-parser
     */
    initBodyParser() {
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded());
    }

    /**
     * Инициируем роуты
     * Документация: https://expressjs.com/en/guide/routing.html
     * 
     * Теперь мы можем обращаться к конечным точкам, которые мы определили в директории
     * routes/ к примеру: http://localhost:7000/api/coin/1, http://localhost:7000/api/country
     * 
     */
    initRoutes() {
        this.APP.use('/api', CoreRoutes);
    }
    
    /**
     * Запускаем наше приложение на указаном порте
     */
    run() {
        return this.APP.listen(this.PORT, () => {
            console.log(`Приложение успешно запущено и работает по аддресу http://localhost:${this.PORT}`);
        })
    }
}

new App();