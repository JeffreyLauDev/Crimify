const offence_columns = require("../models").offence_columns;
const area = require("../models").area;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {

    offences(req, res) {
        offence_columns.findAll()
            .then(offences => {
                return res.status(200).send({ offences: offences.map(offence => offence.pretty) })
            })
    },

    areas(req, res) {
        area.findAll()
            .then(areas => {
                return res.status(200).send({ areas: areas.map(area => area.area) })
            })
    },

    ages(req, res) {
        return res.status(200).send({
            ages: [
                "Adult",
                "Juvenile"
            ]
        })
    },

    genders(req, res) {
        return res.status(200).send({
            genders: [
                "Female",
                "Male",
                "Not Stated"
            ]
        })
    },

    years(req, res) {
        return res.status(200).send({
            years: [
                2001,
                2002,
                2003,
                2004,
                2005,
                2006,
                2007,
                2008,
                2009,
                2010,
                2011,
                2012,
                2013,
                2014,
                2015,
                2016,
                2017,
                2018,
                2019
            ]
        })
    },

}