import {Router} from 'express';
import BaseController from '../controllers/Core.Controller.js';

const router = new Router();
const controller = new BaseController();
/**
 * Документация: https://appmaster.io/ru/blog/kak-sozdat-endpointy-i-zachem-oni-nuzhny
 * 
 */

router.get('/coin', controller.getCoin);
router.get('/coin/:id', controller.getCoin);

router.get('/country', controller.getCountry);
router.get('/country/:id', controller.getCountry);

router.get('/quality', controller.getQuality);
router.get('/metal', controller.getMetal);

router.get('/categories', controller.getCategory);
router.get('/categories/:id', controller.getCategory);

export default router;