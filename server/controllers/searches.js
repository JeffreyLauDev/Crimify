const offence_columns = require("../models").offence_columns;
const offence = require("../models").offence
const models = require("../models")
const area = require("../models").area;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {

    search(req, res) {

        let whereCondition = {}
        if (req.query.area !== undefined) {// area query
            whereCondition = {
                ...whereCondition,
                area: {
                    [Op.in]: req.query.area.split(",")
                }
            }
        }
        if (req.query.age !== undefined) {// age query
            whereCondition = {
                ...whereCondition,
                age: {
                    [Op.in]: req.query.age.split(",")
                }
            }
        }
        if (req.query.gender !== undefined) {// gender query
            whereCondition = {
                ...whereCondition,
                gender: {
                    [Op.in]: req.query.gender.split(",")
                }
            }
        }
        if (req.query.year !== undefined) {// year query
            whereCondition = {
                ...whereCondition,
                year: {
                    [Op.in]: req.query.year.split(",")
                }
            }
        }
        if (req.query.month !== undefined) {// month query
            whereCondition = {
                ...whereCondition,
                month: {
                    [Op.in]: req.query.month.split(",")
                }
            }
        }
        offence_columns.findOne({
            where: {
                pretty: req.query.offence,
            },

        })
            .then(offenceResult => {
                area.findAll().then(areas => {

                    offence.findAll({
                        where: whereCondition,
                        attributes: [['area', 'LGA'], [models.sequelize.fn('sum', models.sequelize.col(offenceResult.column)), 'total']],
                        group: ['area'],
                    })
                        .then(results => {

                            results = results.map(result => {
                                result = JSON.parse(JSON.stringify(result))
                                const chossenArea = areas.find((area) => area.area === result.LGA)
                                return {
                                    LGA: result.LGA,
                                    total: result.total,
                                    lat: chossenArea.lat,
                                    lng: chossenArea.lng
                                }
                            })

                            return res.status(200).send(
                                {
                                    query: {
                                        offence: req.query.offence,
                                        area: req.query.area,
                                        age: req.query.age,
                                        gender: req.query.gender,
                                        year: req.query.year,
                                        month: req.query.month,
                                    },
                                    result: results
                                }
                            )
                        })
                })

            })

    },

}