import {Router} from 'express';
import BaseController from '../controllers/Core.Controller.js';

const router = new Router();
const controller = new BaseController();
// https://appmaster.io/ru/blog/kak-sozdat-endpointy-i-zachem-oni-nuzhny

// Эндпоинт для получение данных монеты по уникальному id
// router.get('/coin/:id', controller.getCoinById)

// Эндпоинт для получение списка монет
router.get('/coin', controller.getCoin);
router.get('/coin/:id', controller.getCoin);

router.get('/country', controller.getCountry);
router.get('/country/:id', controller.getCountry);

router.get('/quality', controller.getQuality);
router.get('/metal', controller.getMetal);


// router.get('/coins/:category', controller.getCoins);

router.get('/categories', controller.getCategory);
router.get('/categories/:id', controller.getCategory);

router.post('/category', controller.postCategory)
// router.get('/seed', controller.fillSeed)

export default router;