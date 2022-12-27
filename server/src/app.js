import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import CoreRoutes from './routes/Core.Routes.js';
import cors from 'cors';

class App {
    constructor() {
        this.PORT = process.env.NODE_PORT || 7000;
        this.APP = express();

        this.initBodyParser();
        this.initStaticFiles();
        this.initCors();
        this.initRoutes();
        this.initDatabase();
        this.run();
    }

    initDatabase() {
    }
    
    initStaticFiles(){
        this.APP.use('/img', express.static(path.join(path.resolve(), 'src/public/img')))
    }

    initCors() {
        this.APP.use(cors());
    }
    initBodyParser() {
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded());
    }
    initRoutes() {
        this.APP.use('/api', CoreRoutes);
    }
    
    run() {
        this.APP.listen(this.PORT, () => {
            console.log(`Приложение успешно запущено и работает по аддресу http://localhost:${this.PORT}`);
        })
    }
}

// Создаем экземпляр класса App
new App();