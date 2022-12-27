import seed from "../data/seed.js";
import { Op, Sequelize } from "sequelize";
import sequelize from '../config/database.js'

import Category from "../models/Category.js";
import Coin from "../models/Coin.js";
import Quality from "../models/Quality.js";
import Metal from '../models/Metal.js'
import Country from "../models/Country.js";
/**
 * Controller - это по сути обычный класс с функциями которые отвечают за
 * обработку запроса к определенному эндпоинту. 
 * 
 * Например пользователь обращается по адресу htpp://localhost:7000/api/coin
 * в этом случае будет выполнен метод класса BaseController - getCoin
 * 
 */
export default class BaseController {
    /**
     * Метод для получения списка возможных металов 
     */
    async getMetal(req, res) {

        // Если мы передаем параметр id - метод возвращает метал из базы данных
        // У которого такой же id
        if(req.params.id){
            const metal = await Metal.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.json({data: metal})
        } else {
            // Если мы не передаем параметр id - мы возвращаем  список всех доступных металов
            const metal = await Metal.findAll();
            return res.json({data: metal})
        }

        // Методы getQuality,getCountry и getCategory работают по такому же принципу
    }

    /**
     * Метод для получения списка "качество чеканки"
     */
    async getQuality(req, res) {
        if(req.params.id){
            const quality = await Quality.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.json({data: quality})
        } else {
            const quality = await Quality.findAll();
            return res.json({data: quality})
        }
    }

    /**
     * Метод для получения списка стран
     */
    async getCountry(req, res) {
        if(req.params.id){
            const country = await Country.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.json({data: country})
        } else {
            const country = await Country.findAll();
            return res.json({data: country})
        }
    }
   
    /**
     * Метод для получения списка монет металов 
     */
    async getCoin(req, res) {
        if(req.params.id){
            const coin = await Coin.findByPk(+req.params.id, {
                include: [
                    {
                        model: Country,
                    },
                    {
                        model: Metal,
                    },
                    {
                        model: Quality,
                    },
                ]
            })
            return res.json({data: coin})
        } else {
            const coinWhereStatment = {};
            const categoryWhereStatment = {};
            const countryWhereStatment = {};
            const qualityWhereStatment = {};
            const metalWhereStatment = {};

            const {
                category,
                countries,
                metals,
                qualities,
                priceFrom,
                priceTo,
                yearFrom,
                yearTo,
                text
            } = req.query;

            if(text){
                coinWhereStatment.$or = [
                    {
                        name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('Coin.name')), 'LIKE', '%' + text.toLowerCase() + '%')
                    },
                    {
                        subtitle: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('Coin.subtitle')), 'LIKE', '%' + text.toLowerCase() + '%')
                    },
                    {
                        description: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('Coin.description')), 'LIKE', '%' + text.toLowerCase() + '%')
                    }    
                ]
            }
            if(category) categoryWhereStatment.id = category;
            if(yearFrom || yearTo){
                coinWhereStatment.year = {};
                if(yearFrom){
                    coinWhereStatment.year.$gte = yearFrom
                } 
                if (yearTo) {
                    coinWhereStatment.year.$lte = yearTo
                }
            };

            if(priceFrom || priceTo){
                coinWhereStatment.price = {};
                if(priceFrom){
                    coinWhereStatment.price.$gte = priceFrom
                } 
                if (priceTo) {
                    coinWhereStatment.price.$lte = priceTo
                }
            }
            
            if(metals) metalWhereStatment.id = metals.split(',');
            if(countries) countryWhereStatment.id = countries.split(',');
            if(qualities) qualityWhereStatment.id = qualities.split(',');

            const coins = await Coin.findAll({
                where: coinWhereStatment,
                include: [
                    {
                        model: Metal,
                        where: metalWhereStatment
                    },
                    {
                        model: Country,
                        where: countryWhereStatment
                    },
                    {
                        model: Quality,
                        where: qualityWhereStatment
                    },
                    {
                        model: Category,
                        where: categoryWhereStatment
                    }
                ]
            });


            return res.json({
                data: coins,
            });
        };
    }


    async getCategory(req, res) {
        
        if(req.params.id){
            
            const categories = await Category.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.json({data: categories})
        } else {
            const categories = await Category.findAll();
            return res.json({data: categories})
        }
    }

   
}