import seed from "../data/seed.js";
import { Op, Sequelize } from "sequelize";
import sequelize from '../config/database.js'

import Category from "../models/Category.js";
import Coin from "../models/Coin.js";
import Quality from "../models/Quality.js";
import Metal from '../models/Metal.js'
import Country from "../models/Country.js";

export default class BaseController {
    async getMetal(req, res) {
        if(req.params.id){
            const metal = await Metal.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.json({data: metal})
        } else {
            const metal = await Metal.findAll();
            return res.json({data: metal})
        }
    }
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
   
    async fillSeed(req, res){
        const _categories = seed.categories;
        const _coins = seed.coins;
        const _countries = seed.countries;
        const _metals = seed.metals;
        const _qualities = seed.qualities;

        const categories = await Category.bulkCreate(_categories);
        const countries = await Country.bulkCreate(_countries);
        const metals = await Metal.bulkCreate(_metals);
        const qualities = await Quality.bulkCreate(_qualities);
        const coins = await Coin.bulkCreate(_coins);
        
        res.json({
            data: {
                coins,
                categories,
                countries,
                metals,
                qualities
            },
        });
    }
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

    // Этот контроллер создает новую категорию
    async postCategory(req, res) {
        const createdCategory = await Category.create({
             name: req.body.name,
             thumbnail: req.body.thumbnail,
        });
        res.json({data: createdCategory});
    } 
   
}